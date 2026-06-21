# StayOn Pitch Deck

5-slide MEGATHON Startup Track finals deck. Built from StayOn product docs.

## Slides

1. **Problem + why now** — AI wait time breaks developer focus
2. **Solution** — Earn money while your agent works
3. **Execution** — Friday idea → Sunday live product
4. **Proof** — Real money, real ledger, open it now
5. **Business + GTM** — Monetization layer for AI idle time

## Run locally

```bash
# Option A: Python
python3 -m http.server 8080

# Option B: npx
npx serve .
```

Open [http://localhost:8080](http://localhost:8080).

## Present

| Key | Action |
|-----|--------|
| `→` / `Space` | Next slide |
| `←` | Previous slide |
| `F` | Fullscreen |
| `#3` in URL | Jump to slide 3 |

## Deploy

Static files only — deploy to Vercel, Netlify, GitHub Pages, or Pitch.com export target.

```bash
# Vercel
vercel --prod

# GitHub Pages: push to gh-pages branch or enable Pages on main
```

## Live proof links (slide 4)

- Install: [open-vsx.org/extension/stayon/stayon](https://open-vsx.org/extension/stayon/stayon)
- Onboard: [stay-on-nu.vercel.app/try](https://stay-on-nu.vercel.app/try)
- Earnings: [stay-on-nu.vercel.app/earnings](https://stay-on-nu.vercel.app/earnings)

## Before finals

- [ ] Add real screenshots to slide 4 placeholders (`assets/screenshots/`)
- [ ] Verify live stats load on slide 3 (fetches `/api/stats/summary`)
- [ ] Rehearse ~2:30–3:00 timing (~30–40 sec per slide)

## Source

Content from StayOn `docs/24_pitch_deck_plan.md` and related product docs.
