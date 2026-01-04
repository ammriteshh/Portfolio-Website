### Portfolio Website

Modern, performant personal portfolio built with Next.js (App Router), React, Tailwind CSS, and Framer Motion. Projects are sourced from a simple JSON file, enabling quick edits without touching component code.

#### Tech stack

- **Next.js**
- **React**
- **Tailwind CSS**
- **Framer Motion**

#### Key features

- **Sections**: Home, About, Projects, Project Detail, Projects Archive, 404
- **Data-driven projects** from `json/data.json`
- **Slug-based routing** for project details: `/projects/[slug]`
- **Simple category filter** on the projects list
- **Responsive images** with `next/image`
- **Sitemap script** (`generate-sitemap.js`)

---

### Project structure (high level)

```
Portfolio-Website/
├── app/
│   ├── (root)/           # pages
│   ├── about/
│   ├── projects/
│   └── …                 # Next.js app routes
├── components/           # React UI pieces
├── json/
│   └── data.json         # portfolio content
├── public/
│   ├── favicon.ico       # site icon
│   └── image/
│       ├── skills/       # only used images
│       └── projects/     # only used project images
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
├── next.config.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
```

---

### Routes

- `/` – Home
- `/about` – About
- `/projects` – Projects list
- `/projects/[slug]` – Project detail (by `slug`)
- `/projects/archive` – Archive list
- Custom `not-found` page for 404s

---

### Scripts

- `dev` – start the development server
- `build` – production build
- `start` – start the production server
- `lint` – run Next.js ESLint
- `generate-sitemap` – write a gzipped sitemap under `public/`