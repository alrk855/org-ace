# @2 inc - Building Learning Through Play

A React + TypeScript + Vite web application for @2 inc NGO.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

## Build

```bash
# Build for production
npm run build
```

This creates an optimized build in the `dist/` folder.

## Preview

```bash
# Preview production build locally
npm run preview
```

## Technologies

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Component library
- **React Router** - Client-side routing

## SPA Hosting

Since this is a single-page application (SPA) using client-side routing, you'll need to configure your host to redirect all requests to `index.html`.

### Netlify

Create `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Nginx

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Apache

Create `.htaccess`:
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## License

All rights reserved © @2 inc
