# Portfolio — Attoisse Mohamed

Portfolio Next.js 14 (App Router) + TypeScript + Tailwind CSS pour Attoisse Mohamed,
Fondateur de Ksilog Academy, Data Engineer & Software Engineer.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (thème sombre, tokens personnalisés)
- **lucide-react** pour les icônes
- Polices **Space Grotesk** (titres), **Inter** (texte), **JetBrains Mono** (labels techniques), chargées via `next/font/google`

## Démarrer le projet

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:3000`.

> Le premier build nécessite un accès internet pour télécharger les polices Google Fonts
> (`next/font` les met ensuite en cache localement, aucun appel réseau côté visiteur).

## Build de production

```bash
npm run build
npm run start
```

## Modifier le contenu

Toutes les données (profil, expériences, formations, compétences, projets) sont centralisées
dans `data/portfolio.ts`. Modifiez ce fichier pour mettre à jour le contenu du site sans toucher
aux composants React.

Les projets de la section `Projets` sont des exemples représentatifs basés sur les compétences
d'Attoisse — remplacez-les par de vrais projets (avec lien `href`) dès qu'ils sont prêts.

## Structure

```
app/            Layout racine (metadata SEO, polices), page d'accueil, styles globaux
components/     Un composant par section (Navbar, Hero, About, Experience, Education,
                Skills, Projects, Contact, Footer)
data/           portfolio.ts — source unique de contenu
public/assets/  Images, CV, favicon
```

## SEO

Les métadonnées (title, description, Open Graph, Twitter Card, mots-clés) sont définies dans
`app/layout.tsx`. Pensez à :
- Remplacer `siteUrl` par le nom de domaine réel une fois déployé.
- Ajouter une image Open Graph dans `public/assets/` et la référencer dans `openGraph.images`.
- Ajouter un fichier `public/assets/favicon.ico`.
