<p align="center">
  <img src="src/resources/logo/logo-transparent-480x254.png" alt="Fly By Media" width="320" />
</p>

# Fly By Media

Website for **Fly By Media**, a drone photography company in Trøndelag, Norway. The company takes aerial photos and videos for real estate, inspections and marketing. The site itself is in Norwegian.

**Live demo:** [flybymedia.seterlab.no](https://flybymedia.seterlab.no)

## Pages

| Path | Page |
| --- | --- |
| `/hjem` | Home. Introduction, key numbers and links to the other pages |
| `/om-oss` | About us |
| `/kontakt-oss` | Contact information |
| `/tidligere-jobber` | Previous jobs |

`/` redirects to `/hjem`, and any unknown path shows a 404 page.

## Tech stack

- [React 19](https://react.dev/) with [React Router 7](https://reactrouter.com/)
- [Tailwind CSS 3](https://tailwindcss.com/) through PostCSS, alongside plain CSS for each component
- [Create React App](https://create-react-app.dev/) (`react-scripts`) for the dev server and production build
- [Font Awesome](https://fontawesome.com/) for the social icons in the footer
- [Podman](https://podman.io/) for the container. The site runs behind an nginx reverse proxy.

## Project structure

```
├── public/                 # index.html, favicon, app icons and manifest
├── src/
│   ├── components/
│   │   ├── App.jsx         # Routes and the shared layout (header, page, footer)
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Home/
│   │   ├── AboutUs/
│   │   ├── ContactUs/
│   │   ├── PreviousOrders/
│   │   └── PageNotFound/
│   ├── resources/logo/     # Logo files (PNG and SVG)
│   ├── index.css           # Tailwind directives and global styles
│   └── index.js            # Entry point
├── doc/                    # Planning notes
├── Containerfile           # Container build
├── tailwind.config.js
└── postcss.config.js
```

## Running locally

You need [Node.js](https://nodejs.org/) 18 or newer.

```bash
npm install
npm start
```

The site opens at [http://localhost:3000](http://localhost:3000) and reloads when you save a file.

To make a production build in `build/`:

```bash
npm run build
```

## Running with Podman

The `Containerfile` builds the site in a Node container and serves the result with [`serve`](https://github.com/vercel/serve) on port 3000. Any path the server doesn't recognise falls back to `index.html`, so React Router handles it.

```bash
podman build -t flybymedia .
podman run -d --name flybymedia -p 127.0.0.1:3000:3000 flybymedia
```

The site is then at [http://localhost:3000](http://localhost:3000).

### Behind a reverse proxy

In production the container publishes no ports. It shares a Podman network with an nginx container, and nginx forwards the subdomain to it:

```nginx
server {
    listen 443 ssl;
    server_name flybymedia.example.com;

    location = / {
        return 302 /hjem;
    }

    location / {
        proxy_pass http://flybymedia:3000;
    }
}
```

To deploy a new version, rebuild the image and restart the container:

```bash
podman build -t flybymedia .
systemctl --user restart flybymedia
```
