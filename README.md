a# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/012fe231-c8de-447a-bd02-f703db97e305

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/012fe231-c8de-447a-bd02-f703db97e305) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploy to GitHub Pages

This project is configured for automatic deployment to GitHub Pages at:
**https://alrk855.github.io/org-ace/**

#### Automatic Deployment (Recommended)
Simply push to the main branch:
```bash
git push origin main
```
GitHub Actions will automatically build and deploy to the `gh-pages` branch.

#### Manual Deployment
```bash
npm install
npm run deploy
```

#### Setup GitHub Pages
1. Go to repository **Settings** → **Pages**
2. Set **Source:** `Deploy from a branch`
3. Set **Branch:** `gh-pages`
4. Set **Folder:** `/ (root)`
5. Click **Save**

The site will be live at https://alrk855.github.io/org-ace/ within 1-2 minutes.

#### Testing Locally
```bash
npm install
npm run dev
```

### Deploy via Lovable
Alternatively, open [Lovable](https://lovable.dev/projects/012fe231-c8de-447a-bd02-f703db97e305) and click on Share → Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
