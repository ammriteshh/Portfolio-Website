### Portfolio Website

Modern, performant personal portfolio built with Next.js (App Router), React, Tailwind CSS, and Framer Motion. Projects are sourced from a simple JSON file, enabling quick edits without touching component code.

#### Tech stack

- **Next.js**
- **React**
- **Tailwind CSS**
- **Framer Motion**
- **Font Awesome**

#### Key features

- **Sections**: Home, About, Projects, Project Detail, Projects Archive, 404
- **Data-driven projects** from `json/data.json`
- **Slug-based routing** for project details: `/projects/[slug]`
- **Simple category filter** on the projects list
- **Responsive images** with `next/image`
- **Sitemap script** (`generate-sitemap.js`)

---

### Getting started

Prerequisites: Node.js 18+ and a package manager (npm or pnpm).

1. Install dependencies

```bash
# with npm
npm install

# or with pnpm
pnpm install
```

2. Run the dev server

```bash
# npm
npm run dev

# pnpm
pnpm dev
```

3. Build and start (production)

```bash
# build
npm run build   # or: pnpm build

# start
npm run start   # or: pnpm start
```

4. Optional: generate a sitemap

```bash
npm run generate-sitemap   # or: pnpm generate-sitemap
```

---

### Project structure (high level)

```
app/
  (root)/
    layout.jsx, page.jsx, loading.jsx
  about/
    page.jsx, components/*
  projects/
    page.jsx            # list view (filters by category)
    [slug]/page.jsx     # detail view (loads by `slug`)
    archive/page.jsx
components/             # shared UI (Navbar, Footer, Button, etc.)
json/
  data.json             # project data source
public/                 # images and static assets
```

---

```

- `slug` (string): unique identifier used in the URL (`/projects/[slug]`). Required for the detail page and project links.
- `category` (number[]): numeric tags used for filtering on the projects list. You can define your own mapping (e.g., `1 = Web`, `2 = AI`, `9 = Other`). Ensure it stays consistent with any UI filters you implement.
- `show` (boolean): controls whether the project appears on the main projects page.

If you remove `slug` or `category`, update the components that use them:

- `slug` is read in `app/projects/[slug]/page.jsx` and used for links in `app/projects/components/ProjectCard.jsx`.
- `category` is checked in `app/projects/components/ProjectCard.jsx` for filtering.

---

### Routes

- `/` – Home
- `/about` – About
- `/projects` – Projects list
- `/projects/[slug]` – Project detail (by `slug`)
- `/projects/archive` – Archive list
- Custom `not-found` page for 404s

---

### Images & assets

- Store images under `public/image/...` and reference using absolute paths (e.g., `/image/projects/...`).
- Thumbnails and gallery images for each project are rendered with `next/image`.

---

### Deployment

- Optimized for **Vercel**. Push to a Git repository and import the repo on Vercel.
- Environment variables are not required for the core app in its current state.

---

### Scripts

- `dev` – start the development server
- `build` – production build
- `start` – start the production server
- `lint` – run Next.js ESLint
- `generate-sitemap` – write a gzipped sitemap under `public/`

---

### License

GPL-3.0 © 2025 Amritesh Singh. See `LICENSE` for details.
```
