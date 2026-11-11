# VANDR na čtyřech kolech

Web půjčovny obytné dodávky Ford Transit (Ostrava-Poruba, u VŠB).
Web zveřejňuje **Netlify**. Každá změna uložená sem na GitHub se na webu objeví do 1–2 minut.

## Soubory
- `src/app.html` – **zdroj celého webu** (všechny texty, 4 jazyky: CZ, EN, SK, DE) – úpravy dělat tady
- `tools/build.mjs` – z `src/app.html` vygeneruje hotové stránky do `site/` (kvůli Googlu)
- `site/` – **zveřejňovaná složka** (Netlify publikuje jen ji): vygenerované stránky, `img/`, `obsazenost.json`, `404.html`, `sitemap.xml`
- `netlify.toml` – nastavení pro Netlify

## Adresy stránek
| | CZ | EN | SK | DE |
|---|---|---|---|---|
| Úvod | `/` | `/en/` | `/sk/` | `/de/` |
| Vůz | `/ford-transit/` | `/en/ford-transit/` | `/sk/ford-transit/` | `/de/ford-transit/` |
| Soukromí | `/ochrana-osobnich-udaju/` | `/en/privacy/` | `/sk/ochrana-osobnych-udajov/` | `/de/datenschutz/` |

Staré adresy s `#` (např. `/#vuz-transit`) samy přesměrují na nové.

## Jak upravit web
1. Upravit `src/app.html`.
2. Spustit `node tools/build.mjs` (vygeneruje `site/**/index.html` a `site/sitemap.xml`).
3. Commit + push → Netlify nasadí.

## Jak změnit obsazenost
1. Otevři na webu adresu `vandrnactyrech.cz/#admin`.
2. Klikáním označ obsazené dny (další klik den uvolní).
3. Klikni na **Zkopírovat pro GitHub** – otevře se soubor `site/obsazenost.json` na GitHubu.
4. Smaž celý jeho obsah, vlož nový (Ctrl+V) a dej **Commit changes**.

## Poptávky (Netlify Forms)
Každá odeslaná poptávka se uloží v Netlify (Forms → formulář `poptavka`).
Upozornění e-mailem: Netlify → Project configuration → Notifications → Emails and webhooks → Form submission notifications.
