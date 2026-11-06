# VANDR na čtyřech kolech

Web půjčovny obytné dodávky Ford Transit (Ostrava-Poruba, u VŠB).
Web zveřejňuje **Netlify**. Každá změna uložená sem na GitHub se na webu objeví do 1–2 minut.

## Soubory
- `index.html` – celý web (4 jazyky: CZ, EN, SK, DE)
- `img/` – fotky vozu (SPZ jsou rozmazané)
- `obsazenost.json` – obsazené termíny v kalendáři
- `netlify.toml` – nastavení pro Netlify

## Jak změnit obsazenost
1. Otevři na webu adresu `…/#admin`.
2. Klikáním označ obsazené dny (další klik den uvolní).
3. Klikni na **Zkopírovat pro GitHub** – otevře se soubor `obsazenost.json` na GitHubu.
4. Smaž celý jeho obsah, vlož nový (Ctrl+V) a dej **Commit changes**.
