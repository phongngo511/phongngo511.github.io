# Phong Ngo — portfolio site

A plain static site (HTML, CSS, a little JavaScript). No build step.

Files: `index.html`, `styles.css`, `main.js`, plus `.nojekyll` so GitHub Pages serves the files as they are.

## Publish on GitHub Pages (about 5 minutes)

1. On GitHub, create a new **public** repository named exactly `phongngo511.github.io`.
2. Upload the files: on the empty repo page click **uploading an existing file**, drag in `index.html`, `styles.css`, `main.js` and `.nojekyll`, then **Commit changes**.
   (Or from Terminal: `git init`, `git add .`, `git commit -m "Portfolio site"`, `git branch -M main`, `git remote add origin https://github.com/phongngo511/phongngo511.github.io.git`, `git push -u origin main`.)
3. Go to **Settings → Pages**, set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute or two the site is live at **https://phongngo511.github.io**.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Editing

- All content is in `index.html`, one `<section>` per part of the page.
- Colours are defined at the top of `styles.css` (light and dark).
- The email address is put together in `main.js` when a visitor clicks "reveal", so it isn't in the page source as plain text.
- No phone number or street address is on the site on purpose.
