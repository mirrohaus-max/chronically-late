# Mirrohaus Landing Page

Static, single-page premium web experience for **mirrohaus.com**, designed for quick deployment on Vercel or any static host.

## Tech Stack

- Plain **HTML + CSS + vanilla JS**
- No build tools or frameworks required
- Mobile-responsive, dark luxury aesthetic

## File Structure

```text
mirrohaus-site/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    └── (place logo + background art here)
```

## How to Use / Deploy (Vercel)

1. Create a new folder on your computer and put these files inside (keep the same structure).
2. Create a new GitHub repository (public or private).
3. Upload all files and folders from `mirrohaus-site` into the repo (root level).
4. In Vercel:
   - Click **"Add New…" → "Project"**.
   - Import your GitHub repo.
   - Vercel will auto-detect this as a static site. No special settings necessary.
   - Click **Deploy**.

Your site will go live on a `*.vercel.app` URL which you can then connect to **mirrohaus.com**.

## Assets

- Replace `/assets/texture-noise.png` (optional) with your own subtle noise/texture if desired.
- You can also add:
  - `assets/mirrohaus-logo.png` for a real logo in the header/hero if a developer wants to wire it up.
  - `assets/theodore-ford.jpg` for a founder portrait (e.g. in the founder section).

The page is fully functional without images and is intentionally kept clean so a developer can enhance it easily (animations, CMS, etc.), but it already presents a premium, luxury-agency experience for visitors from your QR code and business cards.
