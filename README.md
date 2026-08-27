# Zajedno se čujemo

Moderan, responzivan informativni web sajt zasnovan na dostavljenom projektnom sadržaju o pravima, jednakim mogućnostima i aktivnom učešću Roma i Egipćana u Crnoj Gori.

## Struktura projekta

```text
zajedno-se-cujemo/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   └── og-visual.svg
│   └── icons/
│       └── favicon.svg
└── README.md
```

## Pokretanje lokalno

Najjednostavnije je otvoriti `index.html` direktno u browseru.

Za lokalni razvojni server možete koristiti, na primjer:

```bash
python3 -m http.server 8080
```

Zatim otvorite `http://localhost:8080`.

## Tehnologije

- HTML5 — semantička struktura i SEO osnove
- CSS3 — CSS variables, Grid, Flexbox, `clamp()`, responzivni dizajn i animacije
- JavaScript — mobilni meni, accordion teme, aktivna navigacija, reveal animacije i back-to-top
- SVG — lokalni favicon i Open Graph vizuelni placeholder

## Napomene

Sajt ne koristi eksterni JavaScript framework niti biblioteke. Sav sadržaj je organizovan iz dostavljenog dokumenta; nijesu dodavani partneri, lokacije, kontakti ili statistike koji u izvoru nijesu navedeni. Google Fonts se učitava preko mreže; ako je potreban potpuno offline paket, fontovi se mogu zamijeniti sistemskim fontovima u `css/style.css`.
