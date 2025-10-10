import { copyFileSync, mkdirSync } from "fs";

// Ensure dist directory exists
mkdirSync("dist", { recursive: true });

// Copy index.html to 404.html for SPA fallback routing
copyFileSync("dist/index.html", "dist/404.html");

console.log("✓ Created 404.html for GitHub Pages SPA routing");
