# VANDR na čtyřech kolech – plán vylepšení webu

Pracovní seznam úkolů pro web **vandrnactyrech.cz**. Procházíme ho postupně a odškrtáváme.

## Jak s tímto souborem pracovat (pro Michaela i pro Clauda)

- **Stav:** `[ ]` čeká · `[~]` rozpracováno · `[x]` hotovo · `[-]` zrušeno / nebudeme dělat
- **Kdo:** 🤖 Claude udělá sám · 🙋 potřebuju podklady nebo akci od Michaela · 🤝 společně
- **Priorita:** P1 = brzdí poptávky nebo hrozí problém · P2 = výrazně zlepší dojem · P3 = až bude čas
- U hotového bodu připsat datum, např. `[x] … (9. 11. 2026)`.
- Na začátku každé session: přečíst tento soubor, navrhnout další 3–5 bodů podle priority a podle toho, co Michael zrovna může dodat.

### Technické poznámky
- Repo: `misan-design/vandr-na-ctyrech-kolech`, větev `main` → Netlify projekt `vandr-na-ctyrech-kolech` → doména `vandrnactyrech.cz` (DNS u Webglobe).
- **Každý push na `main` = 1 nasazení = 15 kreditů Netlify** (zdarma 300 kreditů/měsíc, 1 GB přenosu = 20 kreditů). Změny sdružovat do jednoho pushe.
- Jazyky CZ/EN/SK/DE musí být **striktně oddělené** (žádné míchání). Výjimky: název značky, vlastní jména, stránka `#admin`.
- Poptávky: Netlify Forms (formulář `poptavka`) → e-mail na Seznam, odtud kopie do Gmailu.
- Obsazenost: soubor `obsazenost.json`, mění se přes `…/#admin` → „Zkopírovat pro GitHub“.
- Fotky na web vždy s rozmazanou SPZ. Nikdy nepublikovat techničák ani VIN.

---

## A · Rychlé opravy (bez podkladů)

- [x] A01 🤖 P1 – U formuláře opravit text „poptávku nám pošlete přes WhatsApp nebo e-mail“ – formulář už odesílá sám (4 jazyky). (10. 11. 2026)
- [x] A02 🤖 P1 – Upravit záložní texty pro případ, že se poptávka neuloží (aby dávaly smysl). (10. 11. 2026)
- [x] A03 🤖 P2 – V úvodní sekci odstranit zdvojený název značky pod logem, ponechat jen „Půjčovna obytných vozů · Ostrava“. (10. 11. 2026)
- [x] A04 🤖 P1 – Plovoucí lišta na mobilu (detail vozu): „Vybrat termín“ + „WhatsApp“. (10. 11. 2026)
- [-] A05 – ~~Galerie: přednačítat jen sousední fotku~~ – **zrušeno (10. 11. 2026):** Michael nechce, podobná úprava dříve způsobila sekání galerie. Přednačítání všech fotek zůstává.
- [ ] A06 🙋 P2 – Písma (Barlow Condensed, Source Sans 3) nahrát přímo na web místo Google Fonts (GDPR + rychlost). **Claude je odsud nestáhne (síť blokuje)** → Michael stáhne z fonts.google.com („Get font“ → „Download all“) oba balíčky ZIP a pošle je; Claude je zapracuje.
- [x] A07 🤖 P3 – Vlastní stránka 404. (10. 11. 2026)
- [x] A08 🤖 P2 – Větší klikací plocha odkazů v kontaktech (telefon, e-mail, WhatsApp, Instagram) – min. 44 px. (10. 11. 2026)
- [x] A09 🤖 P3 – Náhledy v galerii: popisky pro čtečky („Fotka 3 z 9“). (10. 11. 2026)
- [x] A10 🤖 P2 – Antispam: skryté pole (honeypot) i ve viditelném formuláři + kontrola formátu e-mailu a telefonu. (10. 11. 2026)
- [x] A11 🤖 P2 – Zabránit dvojímu odeslání poptávky, po odeslání formulář vyčistit. (10. 11. 2026)
- [x] A12 🤖 P3 – Kalendář na mobilu: tlačítko „Poptat tento termín“ držet stále na očích po výběru dat (řeší plovoucí lišta z A04). (10. 11. 2026)

## B · Ceník a podmínky pronájmu (největší brzda poptávek)

- [ ] B01 🙋 P1 – Ceník: cena za noc v sezóně a mimo sezónu, případně víkend, minimální počet nocí.
- [ ] B02 🙋 P1 – Kauce: výše, kdy a jak se vrací.
- [ ] B03 🙋 P1 – Ceny doplňků: stan pro dva, kánoe, paddleboard, párty stan (a jestli ho opravdu máš).
- [ ] B04 🙋 P1 – Další poplatky: závěrečný úklid, pes, plynové kartuše, chemie do WC, předání mimo běžnou dobu.
- [ ] B05 🙋 P1 – Kilometry: neomezeně, nebo limit na den a cena za km navíc.
- [ ] B06 🙋 P1 – Pojištění a spoluúčast – **ověřit písemně u pojišťovny**, že pokrývá pronájem cizím osobám.
- [ ] B07 🙋 P1 – Podmínky pro řidiče: minimální věk, praxe, potřebné doklady.
- [ ] B08 🙋 P1 – Storno podmínky (kolik vracíš při zrušení X dní předem).
- [ ] B09 🙋 P1 – Čas převzetí a vrácení, jak dlouho trvá předání.
- [ ] B10 🙋 P1 – Pravidla: zvířata, kouření, cesty do zahraničí (které země ano/ne), festivaly.
- [ ] B11 🙋 P1 – Co dělat při poruše nebo nehodě (kontakt, asistence).
- [ ] B12 🤖 P1 – Z bodů B01–B11 udělat stránku „Ceník a podmínky“ ve 4 jazycích + aktualizovat časté dotazy („Kolik pronájem stojí?“, „Můžu vzít psa?“, „Můžu do zahraničí?“). **10. 11. 2026: body B01–B11 poslány taťkovi e-mailem (j.tomicek@seznam.cz), čeká se na odpověď.**
- [ ] B13 🤖 P2 – Kalkulačka ceny u kalendáře (noci × cena + doplňky, zobrazit kauci).
- [ ] B14 🙋 P3 – Slevy: delší pronájem (7+ nocí), mimosezóna, opakovaný zákazník, studenti VŠB.
- [ ] B15 🤝 P3 – Dárkové poukazy (ideální na Vánoce) – stránka + jednoduchý PDF poukaz.

## C · Právní minimum (ověřit s účetní / právníkem – Claude není právník)

- [ ] C01 🙋 P1 – Ujasnit formu (živnost na pronájem movitých věcí?) a daně.
- [ ] C02 🤖 P1 – Identifikace provozovatele v patičce (jméno, IČO, sídlo) – až bude C01.
- [x] C03 🤖 P1 – Stránka „Ochrana osobních údajů“ (GDPR) ve 4 jazycích – co formulář sbírá, proč, jak dlouho, komu (Netlify). (10. 11. 2026)
- [x] C04 🤖 P1 – Pod tlačítkem formuláře krátká věta s odkazem na C03. (10. 11. 2026)
- [ ] C05 🤝 P1 – Vzor nájemní smlouvy (dát zkontrolovat odborníkovi).
- [ ] C06 🤝 P1 – Předávací protokol (stav, km, palivo, poškození) + fotodokumentace při předání.
- [ ] C07 🤖 P3 – Udržet web bez cookies; pokud přibude analytika s cookies, přidat lištu se souhlasem.
- [ ] C08 🙋 P2 – Kontrola ochranné známky „VANDR“ (ÚPV + TMview), případně později registrace.

## D · Google a nalezitelnost (SEO)

- [x] D00 Google Search Console – ověřeno, sitemap odeslána (9. 11. 2026)
- [ ] D01 🤖 P1 – Skutečné podstránky místo `#` adres (`/`, `/ford-transit/`, `/cenik-a-podminky/`, `/kontakt/`) – Google teď vidí jen úvodní stránku.
- [ ] D02 🤖 P1 – Jazykové verze na vlastních adresách `/en/`, `/de/`, `/sk/` + značky hreflang.
- [ ] D03 🤖 P1 – Vlastní titulek a popis pro každou stránku a jazyk.
- [ ] D04 🤖 P2 – Strukturovaná data (JSON-LD): místní firma / půjčovna, nabídka s cenou, časté dotazy.
- [ ] D05 🤖 P2 – Sitemap se všemi stránkami a jazyky (navazuje na D01, D02).
- [ ] D06 🤖 P1 – Obsah stránek přímo v HTML (předgenerovat), ne až po spuštění JavaScriptu.
- [ ] D07 🤖 P2 – Texty doplnit o hledané fráze: „půjčovna obytňáku Ostrava“, „pronájem obytné dodávky“, „campervan Ostrava“, „Wohnmobil mieten Ostrava“.
- [ ] D08 🙋 P1 – Google firemní profil: po ověření doplnit fotky a odkaz na web, přidávat příspěvky.
- [ ] D09 🙋 P2 – Zápis na **Firmy.cz** (Seznam – v Česku důležité) a kontrola na Mapy.cz.
- [ ] D10 🙋 P2 – Seznam Webmaster – přidat web (vyhledávání Seznam.cz).
- [ ] D11 🙋 P3 – Bing Webmaster Tools (import ze Search Console, 2 minuty).
- [ ] D12 🤝 P3 – Články/tipy (např. „Víkend v Beskydech s obytňákem“, „Kde legálně přespat v ČR“) – přivádějí lidi z vyhledávání.
- [x] D13 🤖 P2 – Obrázek pro sdílení 1200 × 630 s logem (náhled na WhatsAppu/Facebooku). (10. 11. 2026)
- [ ] D14 🤖 P3 – Popisné názvy souborů fotek a alt texty s klíčovými slovy.

## E · Obsah a důvěra

- [x] E01 🤖 P2 – Sekce „Proč VANDR“ (osobní přístup, kánoe a paddleboard k vozu, home office na cestách, start u Beskyd). (10. 11. 2026)
- [ ] E02 🙋 P2 – Sekce „O nás“: fotka + pár vět (kdo jsi, proč půjčuješ, že dodávku sám používáš).
- [ ] E03 🤝 P2 – Recenze: po prvních zákaznících sbírat Google recenze a citovat je na webu.
- [ ] E04 🙋 P3 – Fotky z výletů / ukázky z Instagramu.
- [ ] E05 🙋 P2 – Video prohlídka dodávky (30–60 s) – web + Instagram.
- [ ] E06 🙋 P2 – Home office: je ve voze zásuvka 230 V / USB? Mobilní internet / hotspot? → podle toho doplnit argument na web.
- [ ] E07 🙋 P1 – Změřit postele (délka × šířka) → odstranit text „přesné rozměry zatím nejsou změřené“.
- [ ] E08 🙋 P2 – Technika obytné části: kapacita baterie, výkon soláru, nádrž na vodu (litry), typ ledničky, spotřeba topení.
- [ ] E09 🙋 P2 – Podrobný seznam výbavy (nádobí, lůžkoviny/spacáky ano/ne, ručníky, kempingový stůl a židle?).
- [ ] E10 🙋 P3 – Lůžkoviny / spacáky jako placený doplněk?
- [ ] E11 🤝 P2 – Doplnit časté dotazy: zima, kempy vs. volné stání (pravidla ČR/SK/DE/AT), kde nechat vlastní auto během pronájmu, jak se platí, záloha.
- [ ] E12 🤖 P3 – „Kam vyrazíte“: fotky a odkazy na trasy/kempy v Mapy.cz.
- [ ] E13 🤝 P3 – Nabídka zimního vanlife / mimosezóny (topení to umožňuje).
- [ ] E14 🤝 P3 – Nabídka pro firmy / partu (7 míst k jízdě) – výjezdy, teambuildingy.
- [ ] E15 🤖 P3 – Stránka dárkového poukazu (navazuje na B15).

## F · Design a fotky

- [ ] F01 🙋 P1 – **Nová úvodní fotka v přírodě** (západ slunce, otevřené dveře) – největší vizuální zlepšení.
- [ ] F02 🙋 P2 – Uklizený interiér večer: LED pásky, ustlané postele, hrnek na lince.
- [ ] F03 🙋 P2 – Fotky doplňků u auta (kánoe, paddleboard, stan).
- [ ] F04 🙋 P2 – Detaily: kuchyňka, úložné bedny, WC, ovládání topení, solár.
- [ ] F05 🙋 P2 – Odstranit / přelepit vybledlý nápis SKANSKA na voze (pak fotit).
- [ ] F06 🤖 P2 – Fotky ve více velikostech pro mobil a počítač (ostré a lehké).
- [x] F07 🤖 P3 – Ikona na plochu mobilu (apple-touch-icon, manifest). (10. 11. 2026)
- [ ] F08 🤖 P3 – Kontrola kontrastu barev (okrová na světlém pozadí).
- [ ] F09 🤖 P3 – Projít tmavý režim na všech stránkách.
- [ ] F10 🤖 P3 – Samolepka / polep auta s logem a webem (grafika k tisku).

## G · Výkon a technika

- [ ] G01 🤖 P2 – Obrázky v moderním formátu s rozumnou kvalitou (bez rozmazání!) a správné velikosti podle zařízení.
- [ ] G02 🤖 P2 – Načítat obrázky až když jsou potřeba (mimo obrazovku).
- [ ] G03 🤖 P2 – Přednačíst úvodní fotku (rychlejší první zobrazení).
- [ ] G04 🤖 P3 – Zmenšit HTML/CSS/JS (build krok).
- [ ] G05 🤖 P2 – Data vozů vyčlenit do samostatného souboru (snadné přidání dalšího auta).
- [ ] G06 🤖 P2 – Audit Lighthouse (výkon, SEO, přístupnost) – cíl 95+ všude.
- [ ] G07 🙋 P2 – Jednou měsíčně zkontrolovat kredity Netlify (Usage); plán B = GitHub Pages.
- [ ] G08 🤖 P3 – Bezpečnostní hlavičky v `netlify.toml`.
- [ ] G09 🙋 P3 – Ověřit přesměrování www → bez www a http → https.
- [ ] G10 🙋 P3 – Hlídání dostupnosti zdarma (UptimeRobot) – e-mail, kdyby web spadl.

## H · Přístupnost

- [ ] H01 🤖 P3 – Ovládání klávesnicí (kalendář, galerie, formulář).
- [ ] H02 🤖 P3 – Hlášky formuláře pro čtečky obrazovky.
- [ ] H03 🤖 P3 – Písmo ve formuláři min. 16 px (iPhone jinak přibližuje).

## I · Rezervace a provoz

- [ ] I01 🤝 P2 – Pohodlnější správa obsazenosti: obsazenost z Google Kalendáře automaticky na web.
- [ ] I02 🤝 P3 – Synchronizace kalendáře s Campiri / Yescapa, pokud tam budeš.
- [ ] I03 🤝 P2 – Automatické potvrzení zákazníkovi e-mailem po odeslání poptávky.
- [ ] I04 🤝 P2 – Šablony odpovědí na poptávky (nabídka s cenou, potvrzení, pokyny k převzetí) – navázat na mailového asistenta.
- [ ] I05 🙋 P2 – Jak se platí: převod + QR platba, záloha při rezervaci.
- [ ] I06 🤝 P2 – Návod k vozu pro zákazníky (topení, solár, WC, voda) jako skrytá stránka + QR kód ve voze.
- [ ] I07 🤝 P2 – Po návratu e-mail s prosbou o recenzi na Google.
- [ ] I08 🤝 P2 – Evidence pronájmů (tabulka: termín, zákazník, km, kauce, platby).
- [ ] I09 🤝 P3 – Online rezervace s platbou – zvážit, až bude dost poptávek.

## J · Marketing a sociální sítě

- [x] J00 Instagram přejmenován na @vandrnactyrech, nové logo a bio, odkaz na webu (9. 11. 2026)
- [ ] J01 🙋 P2 – Instagram: zvýrazněné příběhy (Vůz, Ceník, Recenze, Výlety) + odkaz na web v bio (mobil).
- [ ] J02 🤝 P2 – Pravidelné reels z výletů (navázat na projekt popisků reels).
- [ ] J03 🙋 P3 – Facebook stránka + skupiny o karavaningu a vanlife.
- [ ] J04 🙋 P2 – Profil na Campiri / Yescapa jako další zdroj zákazníků.
- [ ] J05 🤝 P3 – Spolupráce: kempy, půjčovny lodí, VŠB (studentská sleva?).
- [ ] J06 🤖 P3 – Vizitky / letáček s QR kódem na web (grafika k tisku).
- [ ] J07 🤝 P3 – Jarní kampaň (Google Ads, malý rozpočet) – až bude ceník a pár recenzí.
- [ ] J08 🤝 P2 – E-mail info@vandrnactyrech.cz (přesměrování do Gmailu) a nahradit jím osobní e-mail na webu.

## K · Měření

- [ ] K01 🤖 P3 – Návštěvnost bez cookies (GoatCounter nebo Cloudflare Web Analytics).
- [ ] K02 🤖 P3 – Měřit odeslané poptávky a kliky na WhatsApp / telefon.
- [ ] K03 🙋 P3 – Jednou měsíčně projít Search Console (co lidé hledají, chyby).

## L · Další vozy

- [ ] L01 🤝 P3 – Přidat karavan jako druhý vůz (fotky, údaje, kalendář, ceník).
- [ ] L02 🤖 P3 – Porovnání vozů na stránce „Naše vozy“.
- [ ] L03 🤖 P3 – Filtr podle počtu osob a termínu (až bude víc vozů).

---

## Hotovo (historie)

- Web postaven (CZ/EN/SK/DE), kalendář, poptávkový formulář, galerie se šipkami, logo a značka VANDR na čtyřech kolech
- Hosting GitHub → Netlify, doména vandrnactyrech.cz, HTTPS, veřejný projekt
- Netlify Forms + e-mailová upozornění (Seznam → Gmail) (9. 11. 2026)
- Google Search Console + sitemap (9. 11. 2026)
- Google firemní profil založen, čeká na ověření (9. 11. 2026)
- Instagram @vandrnactyrech (9. 11. 2026)
- Rozměry vozu 5 981 × 2 059 × 2 775 mm, celková výška ~3,1 m (9. 11. 2026)

## Doporučené pořadí

1. ~~Balík rychlých oprav~~ – hotovo 10. 11. 2026 (zbývá A06 – čeká na soubory písem).
2. **Ceník a podmínky** – Michael pošle B01–B11 nahrubo, Claude udělá B12 + C03/C04.
3. **Právní minimum** – C01, C02, C05, C06.
4. **Fotky** – F01–F05 (stačí jedno odpoledne s dodávkou v přírodě).
5. **Velká SEO přestavba** – D01–D06 (jeden větší krok).
6. Postupně zbytek podle priority.
