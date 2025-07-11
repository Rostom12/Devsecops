const express = require('express');
const Stripe = require('stripe');
const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('App1 Node.js avec Stripe');
});

// Endpoint pour tester un paiement Stripe (exemple simple)
app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, // en centimes (ex: 10 EUR)
      currency: 'eur',
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('App1 Node.js avec Stripe écoute sur le port 3000');
});
