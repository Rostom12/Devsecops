from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return "App2 Flask accessible via reverse proxy"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)