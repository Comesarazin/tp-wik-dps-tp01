# Ping API

Une API simple en TypeScript qui retourne les headers de la requête en format JSON lorsqu'une requête HTTP GET est effectuée sur `/ping`.

## Fonctionnalités

- Renvoie les headers de la requête HTTP en format JSON sur `GET /ping`
- Retourne une réponse vide avec code 404 pour toute autre requête
- Port d'écoute configurable via la variable d'environnement `PING_LISTEN_PORT` (par défaut: 3000)

## Prérequis

- Node.js (v14 ou supérieur)
- npm

## Installation

1. Clonez ce dépôt :
   ```
   git clone <url-du-repo>
   cd ping-api
   ```

2. Installez les dépendances :
   ```
   npm install
   ```

## Configuration

Le serveur écoute par défaut sur le port 3000. Vous pouvez modifier ce port en définissant la variable d'environnement `PING_LISTEN_PORT`.

## Compilation

Compilez le code TypeScript en JavaScript :
```
npm run build
```

## Lancement de l'API

### Avec le port par défaut (3000)

```
npm start
```

### Avec un port personnalisé

```
PING_LISTEN_PORT=8080 npm start
```

Ou sous Windows (PowerShell) :
```
$env:PING_LISTEN_PORT=8080; npm start
```

## Utilisation

Une fois le serveur démarré, vous pouvez envoyer une requête GET à `/ping` :

```
curl http://localhost:3000/ping
```

Vous recevrez en réponse les headers de votre requête au format JSON.

## Développement

Pour compiler et exécuter l'application en une seule commande :
```
npm run dev
```

## Structure du projet

```
ping-api/
├── src/
│   └── server.ts      # Code source du serveur
├── dist/              # Code JavaScript compilé
├── package.json       # Configuration du projet
└── tsconfig.json      # Configuration TypeScript
```