# Configuration EmailJS pour le Formulaire de Contact

## Étapes pour configurer EmailJS:

### 1. Créer un compte EmailJS
- Va sur [https://www.emailjs.com/](https://www.emailjs.com/)
- Crée un compte gratuit (100 emails/mois gratuit)

### 2. Ajouter un service email
- Dans le dashboard, va dans **Email Services**
- Clique sur **Add New Service**
- Choisis ton fournisseur d'email (Gmail recommandé)
- Connecte ton compte Gmail
- Note le **Service ID** (ex: `service_abc123`)

### 3. Créer un template d'email
- Va dans **Email Templates**
- Clique sur **Create New Template**
- Utilise ce contenu:

```
Subject: [Portfolio Contact] {{subject}}

Nouveau message de: {{from_name}}
Email: {{from_email}}

Sujet: {{subject}}

Message:
{{message}}
```

- Note le **Template ID** (ex: `template_xyz789`)

### 4. Obtenir ta clé publique
- Va dans **Account** → **General**
- Note ta **Public Key** (ex: `AbCdEfGhIjKlMnOp`)

### 5. Configuration locale (.env.local)
Crée un fichier `.env.local` à la racine du projet:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
```

### 6. Configuration GitHub (pour le déploiement)
Pour que ça fonctionne sur GitHub Pages:

1. Va dans **Settings** → **Secrets and variables** → **Actions**
2. Ajoute ces 3 secrets:
   - `EMAILJS_SERVICE_ID`: ton Service ID
   - `EMAILJS_TEMPLATE_ID`: ton Template ID
   - `EMAILJS_PUBLIC_KEY`: ta Public Key

3. Modifie `.github/workflows/nextjs.yml` pour ajouter les variables d'environnement:

```yaml
- name: Build with Next.js
  run: npm run build
  env:
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: ${{ secrets.EMAILJS_SERVICE_ID }}
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: ${{ secrets.EMAILJS_TEMPLATE_ID }}
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: ${{ secrets.EMAILJS_PUBLIC_KEY }}
```

### 7. Tester
- Lance `npm run dev`
- Va sur la section Contact
- Envoie un message de test
- Vérifie ta boîte mail!

## Dépannage

Si ça ne marche pas:
1. Vérifie que les IDs/clés sont corrects dans `.env.local`
2. Vérifie que le template EmailJS a les bons champs: `from_name`, `from_email`, `subject`, `message`
3. Vérifie la console du navigateur pour les erreurs
4. Assure-toi que ton compte EmailJS n'a pas dépassé la limite gratuite (100/mois)
