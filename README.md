# 💌 Apology & Make-up App

Static site (HTML + CSS + vanilla JS). No build step, no dependencies.

```
.
├── index.html     # structure of all screens
├── style.css      # pastel theme, animations, responsive layout
├── script.js      # CONFIG (edit me!) + all the logic
└── assets/
    ├── couple-photo.jpg
    ├── jumpscare.jpg
    ├── jumpscare.mp3
    └── song.mp3
```

## ✏️ Customise
Open `script.js` and edit the `CONFIG` object at the top: names, questions
(`correct` is the 0-based index of the right option), poem, apology, taunts, file names.

## 🧪 Test locally
Just double-click `index.html`, or run a local server:
`npx serve .` or `python -m http.server 8000` → http://localhost:8000
Test on your phone too (same Wi-Fi: `http://<your-pc-ip>:8000`).

## 🚀 Deploy privately (Vercel or Netlify)

1. Create a **private** GitHub repo and push this folder:
   ```
   git init
   git add .
   git commit -m "for her"
   git branch -M main
   git remote add origin https://github.com/<you>/<private-repo>.git
   git push -u origin main
   ```
2. **Vercel**: vercel.com → *Add New → Project* → import the private repo (grant GitHub access)
   → Framework preset *Other* → leave build/output empty → *Deploy*.
   **Netlify**: app.netlify.com → *Add new site → Import from Git* → pick the repo
   → build command empty, publish directory `.` → *Deploy*.
3. Make the link hard to guess: rename the project to something random
   (Vercel: *Settings → Domains*; Netlify: *Site configuration → Change site name*),
   e.g. `xk7-for-my-queen-2910.vercel.app`. Send it only to her.
4. `noindex` is already set in `index.html`, so search engines are asked to skip it.

> GitHub Pages note: private-repo Pages needs a paid plan, which is why Vercel/Netlify are easier.
> For real access control: Vercel *Deployment Protection* (password) is paid; Netlify password protection is paid too.
> The secret URL is usually enough here.

## 📱 Tips
- Sound only works after a tap, so the "Start Journey" button unlocks audio for the whole session.
- Phones in silent mode (iPhone switch) mute the jumpscare, so tell her to turn sound on.
- Compress images (squoosh.app) so they load fast on mobile data.
