# 📝 Gestion de Tâches

Application Angular moderne (Signals, `httpResource`, services) pour gérer une liste de tâches personnelle avec sauvegarde locale.

## Fonctionnalités
- Ajouter, cocher, supprimer des tâches
- Compteur de tâches restantes
- Persistance automatique (localStorage) — les données survivent au rafraîchissement
- Chargement initial simulé depuis un "serveur" JSON

## Stack technique
- Angular (dernière version), composants standalone
- Signals (`signal`, `computed`, `effect`) pour tout l'état
- `httpResource()` pour le chargement asynchrone
- `inject()` — pas de constructeur, pas de `ngOnInit`

## Lancer le projet
\`\`\`bash
npm install
ng serve -o
\`\`\`

## Démo
[Lien vers le déploiement Vercel — à ajouter après déploiement]