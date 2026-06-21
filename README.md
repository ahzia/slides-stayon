# StayOn Pitch Deck

5-slide MEGATHON Startup Track finals deck.

**Live:** connect this repo to [Vercel](https://vercel.com) — no build step required.

## Slides

1. **Problem** — AI wait time breaks developer focus (video proof)
2. **Solution** — Earn while waiting for your agent
3. **Execution** — Friday idea → Sunday live product
4. **Proof** — Real money, real ledger, open it now
5. **Business** — Task supply, revenue, GTM, vision

## Run locally

```bash
python3 -m http.server 8080
# or: npx serve .
```

Open [http://localhost:8080](http://localhost:8080).

## Present

| Key | Action |
|-----|--------|
| `→` / `Space` | Next slide |
| `←` | Previous slide |
| `F` | Fullscreen |
| `#3` in URL | Jump to slide 3 |

## Deploy to Vercel

### Option A — Vercel dashboard

1. Import [github.com/ahzia/slides-stayon](https://github.com/ahzia/slides-stayon)
2. Framework preset: **Other** (static)
3. Build command: leave empty
4. Output directory: `.`
5. Deploy

### Option B — CLI

```bash
npm i -g vercel
vercel --prod
```

No build step. `vercel.json` sets cache headers for video assets.

## Repo structure

```
index.html          # Deck
css/deck.css        # Styles
js/deck.js          # Navigation + live stats fetch
assets/             # Logo, videos, agent icons
vercel.json         # Vercel static config
```

## Live proof links (slide 4)

- [Open VSX install](https://open-vsx.org/extension/stayon/stayon)
- [stay-on-nu.vercel.app/try](https://stay-on-nu.vercel.app/try)
- [stay-on-nu.vercel.app/earnings](https://stay-on-nu.vercel.app/earnings)
