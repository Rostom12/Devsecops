# Projet DevSecOps - Déploiement d’une stack Docker avec Stripe et Reverse Proxy
PROJET FAIT PAR MOUADDEB Rostom
## Description

Ce projet consiste à déployer une stack composée de 4 applications Docker, dont :

- **app1-node-stripe** : Application Node.js utilisant la passerelle de paiement Stripe
- **app2-flask** : Application Flask en Python accessible via reverse proxy
- **app3-express** : Application Express simple Node.js accessible via reverse proxy
- **static-app** : Application statique (HTML/CSS), accessible directement (sans reverse proxy) pour tests de pentest

Un reverse proxy Nginx gère les accès vers les applications Node.js et Flask, tandis que l’application statique est exposée directement.

---

## Structure du projet

Devsecops/
│
├── app1-node-stripe/
│ └── index.js
│ └── Dockerfile
│
├── app2-flask/
│ └── app.py
│ └── Dockerfile
│
├── app3-express/
│ └── index.js
│ └── Dockerfile
│
├── static-app/
│ └── index.html
│ └── Dockerfile
│
├── reverse-proxy/
│ └── nginx.conf
│
└── docker-compose.yml

---

## Contenu principal des fichiers

- **index.js (app1-node-stripe)** : API Node.js utilisant Stripe pour créer un Payment Intent.
- **app.py (app2-flask)** : Serveur Flask minimaliste.
- **index.js (app3-express)** : Serveur Express simple avec une page d’accueil améliorée.
- **index.html (static-app)** : Page HTML statique d’accueil.
- **nginx.conf (reverse-proxy)** : Configuration Nginx pour router les requêtes vers les apps Node.js/Flask.

---

## Prérequis

- Docker Desktop installé et fonctionnel
- Docker Compose (intégré dans Docker Desktop)
- Compte Stripe (pour récupérer une clé secrète Stripe)
- Clé Stripe définie dans la variable d’environnement `STRIPE_SECRET_KEY`

---

## Commandes pour lancer le projet



git clone <url_du_depot>
cd Devsecops

Construire les images Docker :


docker compose build
Démarrer les conteneurs en arrière-plan :


docker compose up -d
Vérifier que tout tourne bien :


docker ps
Tester dans un navigateur :

Reverse proxy (accès apps 1, 2 et 3) :

http://localhost/app1/

http://localhost/app2/

http://localhost/app3/

Application statique (accès direct) :

http://localhost:8081/

