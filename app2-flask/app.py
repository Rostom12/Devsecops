from flask import Flask, jsonify, request
import stripe
import os

app = Flask(__name__)

# Configure ta clé secrète Stripe (à mettre dans les variables d'environnement)
stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

@app.route('/')
def home():
    return "App2 Flask accessible via reverse proxy"

@app.route('/create-payment-intent', methods=['POST'])
def create_payment():
    try:
        # Création d'un PaymentIntent pour 10 EUR (1000 centimes)
        intent = stripe.PaymentIntent.create(
            amount=1000,
            currency='eur'
        )
        # Retourne le client secret nécessaire pour confirmer le paiement côté client
        return jsonify({'clientSecret': intent.client_secret})
    except Exception as e:
        return jsonify(error=str(e)), 400

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
