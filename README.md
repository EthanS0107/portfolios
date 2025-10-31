# Portfolio - Ethan Serville# Portfolio

Portfolio personnel moderne et responsive développé avec **Next.js 14**, **TypeScript** et **Tailwind CSS**. Présente mes projets, compétences et parcours professionnel.

## FonctionnalitésInstall:

- **Mode sombre/clair** avec bascule automatique et logo adaptatif```powershell

- **Design responsive** avec burger menu pour mobilenpm install

- **Performance optimisée** avec Next.js 14 (App Router)```

- **Navigation intuitive** avec indicateurs visuels de page active

- **Animations fluides** avec Framer MotionDev:

- **Sections complètes** : Accueil, Projets, Compétences, Parcours, Contact

- **Styles organisés** : Toutes les classes Tailwind extraites dans des objets constants pour une personnalisation facile```powershell

## Démarrage rapide

```bash
npm run dev
```

### PrérequisBuild:

- Node.js 18+ ```powershell

- npm ou yarnnpm run build

### Installation

```bash
npm start
```

```bashRemarques:

# Cloner le dépôt

git clone https://iut-info.univ-reims.fr/gitlab/serv0039/portfolios.git- Les dépendances doivent être installées avant d'exécuter l'application.

- Le formulaire de contact est une simulation et doit être connecté à une API/SMTP pour être fonctionnel.

# Installer les dépendances
npm install
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Production

```bash
# Build de production
npm run build

# Démarrer le serveur de production
npm start
```

## Technologies utilisées

### Frontend

- **[Next.js 14](https://nextjs.org/)** - Framework React avec App Router
- **[React 18](https://react.dev/)** - Bibliothèque UI
- **[TypeScript 5](https://www.typescriptlang.org/)** - Typage statique
- **[Tailwind CSS 3](https://tailwindcss.com/)** - Framework CSS utilitaire

### UI/UX

- **[Framer Motion](https://www.framer.com/motion/)** - Animations et transitions
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Gestion du thème dark/light
- **[Lucide React](https://lucide.dev/)** - Icônes modernes
- **[Headless UI](https://headlessui.com/)** - Composants accessibles

### Outils de développement

- **ESLint** - Linter JavaScript/TypeScript
- **Prettier** - Formateur de code
- **PostCSS** - Transformation CSS

## Structure du projet

```
portfolios_v2/
├── app/                    # Pages Next.js (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── projects/          # Page Projets
│   ├── skills/            # Page Compétences
│   ├── experience/        # Page Parcours
│   ├── contact/           # Page Contact
│   └── about/             # Page À propos
├── components/            # Composants réutilisables
│   ├── Header.tsx         # Navigation avec burger menu
│   ├── Footer.tsx         # Pied de page
│   ├── ProjectCard.tsx    # Carte de projet
│   ├── TimelineItem.tsx   # Élément de parcours
│   ├── ContactForm.tsx    # Formulaire de contact
│   └── sections/          # Sections de la page d'accueil
├── public/                # Fichiers statiques
│   ├── logo.svg           # Logo mode clair
│   ├── logo-dark.svg      # Logo mode sombre
│   └── profile.jpg        # Photo de profil
└── styles/                # Styles globaux
```

## Personnalisation

Tous les styles sont organisés dans des objets constants en haut de chaque fichier :

```tsx
// Exemple dans un composant
const styles = {
  container: "max-w-7xl mx-auto px-4",
  title: "text-4xl font-bold text-brand-primary",
  // ... autres styles
};
```

### Couleurs principales

Les couleurs sont définies dans `tailwind.config.ts` :

- **brand-primary** : Couleur principale (teal/bleu-vert)
- **brand-surface** : Fond des surfaces
- **brand-text** : Couleur du texte

### Breakpoints responsive

- **sm** : 640px (petits téléphones)
- **md** : 768px (tablettes) ← Burger menu activé en dessous
- **lg** : 1024px (desktop)
- **xl** : 1280px (grands écrans)

## Pages disponibles

- **/** - Page d'accueil avec présentation
- **/projects** - Liste des projets réalisés
- **/skills** - Compétences techniques organisées par catégories
- **/experience** - Parcours professionnel et académique (timeline)
- **/contact** - Formulaire de contact et informations
- **/about** - À propos (détails supplémentaires)

## Configuration

### Variables d'environnement

Pour activer le formulaire de contact, créez un fichier `.env.local` :

```env
# Configuration email (à adapter selon votre service)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
```

## Scripts disponibles

```bash
npm run dev      # Développement (localhost:3000)
npm run build    # Build de production
npm start        # Serveur de production
npm run lint     # Vérification ESLint
npm run format   # Formatage avec Prettier
```

## Fonctionnalités à venir

- [ ] Connexion du formulaire de contact à une API
- [ ] Blog avec articles techniques
- [ ] Système de recherche de projets
- [ ] Animations de page plus avancées
- [ ] Support multilingue (FR/EN)

## Licence

Ce projet est un portfolio personnel. Libre d'utilisation pour inspiration, mais merci de ne pas copier intégralement.

## Auteur

**Ethan Serville**

- Email: [ethanserville@gmail.com](mailto:ethanserville@gmail.com)
- LinkedIn: [ethan-serville](https://fr.linkedin.com/in/ethan-serville)
- GitHub: [EthanS0107](https://github.com/EthanS0107)

---
