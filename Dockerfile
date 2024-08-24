# Utiliser une image Node.js officielle comme image de base
FROM node:20

# Installer les outils de build nécessaires
RUN apt-get update && apt-get install -y python3 make g++ gcc

# Définir le répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install --build-from-source

# Copier le reste du code de l'application
COPY . .

# Exposer le port sur lequel l'application sera disponible
EXPOSE 5000

# Définir la commande par défaut pour démarrer l'application
CMD ["node", "server.js"]
