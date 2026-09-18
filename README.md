# EliteSportCarsClub – Landingpage „Lamborghini Huracán EVO selbst fahren“

Umsetzung des beigefügten Sample-Designs (`Landingpage Sample Design KI.png`) als komplette,
responsive One-Page-Website – statisches HTML/CSS/JavaScript, ohne Build-Schritt und ohne Frameworks.
Alle Texte stammen aus `EliteSportCarsClub_Landingpage_Texte.docx`, alle Bilder, Icons und Logos aus
dem Ordner `static/`.

---

## Schnellstart

```bash
# im Projektordner
python3 -m http.server 8080 --bind 0.0.0.0
# danach im Browser öffnen: http://localhost:8080
```

Jeder beliebige Static-Server funktioniert ebenfalls (`npx serve`, `php -S`, nginx, …).

---

## Seitenstruktur (1:1 nach Sample-Design)

| # | Sektion | Inhalt |
|---|---------|--------|
| 1 | Header | Logo, Navigation (Alle Erlebnisse, So funktioniert's, Tour & Termine, Bewertungen, FAQ), Wunschliste, Mein Konto, Warenkorb |
| 2 | Hero | „DEUTSCHLANDTOUR 2026“, H1, 149 € → 19 €, 3 Trust-Punkte, roter CTA, Fußnote* |
| 3 | Partner | Groupon, mydays, Jochen Schweizer, erlebnisgeschenke.de |
| 4 | Das Erlebnis | Video-Player (YouTube-Short `ry9gG6nqdAw`), Checkliste, graue „Warum“-Box |
| 5 | Warum nur 19 €? | „Wo ist der Haken?“ + Promotion-Erklärung |
| 6 | Tour 2026 | 12 Städte-Karten mit Terminen + CTA |
| 7 | So einfach geht's | 4 Schritte mit Nummern-Icons |
| 8 | Auch als Geschenk | Gutschein-Motiv, 5 Anlässe (Geburtstag, Weihnachten, Jahrestag, Überraschung, Bucket List) |
| 9 | Bewertungen | 3 Fahrer-Stimmen mit 5-Sterne-Icon |
| 10 | Unser Versprechen | 6 Trust-Punkte (deutsches Unternehmen, Instruktoren, keine Kaution, …) |
| 11 | FAQ | 8 Fragen als Accordion in zwei Spalten |
| 12 | Bestellung | Gutschein-Formular mit Preis-Chip, Zahlungsart, AGB-Checkbox, rotem Bestell-Button |
| 13 | Finaler CTA | „ES GIBT AUTOS. UND ES GIBT LAMBORGHINI.“ inkl. Preis und CTA |
| 14 | Footer | Logo, Impressum/Datenschutz/AGB/Kontakt, Instagram, TikTok, PayPal, Kauf auf Rechnung, „Made in Germany“ |

### Zweite Seite: `rechtliches.html`

Impressum (§ 5 TMG), Datenschutzerklärung (Art. 13 DSGVO), AGB (Preise, 50 € Betriebskosten,
Gutschein-Einlösung, Teilnahmevoraussetzungen), Widerrufsbelehrung inkl. Muster-Widerrufsformular
sowie Kontaktkarten – mit Sticky-Inhaltsverzeichnis. Alle Firmen- und Registerangaben sind
**Platzhalter** und auf der Seite entsprechend gekennzeichnet.

---

## Interaktionen (Vanilla JS, `assets/js/main.js`)

* **Sticky Header** mit Schatten beim Scrollen, aktive Navigation je Sektion
* **Mobile Navigation** (Burger) inkl. Schließen per Klick/Escape
* **Video-Facade**: Poster mit Script-Claim „Press Play und spüre den Sound!“ und Play-Button;
  erst beim Klick wird der YouTube-Player (nocookie) geladen – Ton- und Vollbild-Button inklusive
* **FAQ-Accordion** mit `aria-expanded`
* **Städte-Auswahl**: Klick auf eine Stadt markiert sie, füllt das Bestellformular und scrollt dorthin
* **Wunschliste**: Herz-Buttons an den Städten, Zähler im Header, Drawer-Panel, Speicherung im `localStorage`
* **Bestellformular**: Feldvalidierung mit Fehlermeldungen, Mengen-Auswahl mit Live-Summe,
  Erfolgs-Panel mit Bestellnummer (Demo – keine echte Zahlung)
* **„Mein Konto“-Modal** mit Tabs Anmelden/Registrieren (Demo)
* **„Alle Fragen anzeigen“** öffnet alle FAQ-Antworten auf einmal
* **Mobile Sticky-CTA** mit Preis, **Toasts** für Feedback, **Scroll-Reveal** (`prefers-reduced-motion` beachtet)

---

## Projektstruktur

```
index.html                 Komplette Landingpage (sections + JSON-LD + Meta/OG-Tags)
rechtliches.html           Impressum, Datenschutz, AGB, Widerrufsbelehrung, Kontakt (mit Inhaltsnavigation)
assets/css/style.css       Design-System (Tokens, Komponenten, Responsive, Print)
assets/css/legal.css       Layout der Rechtsseite
assets/js/main.js          Interaktionen, ohne Abhängigkeiten
assets/img/                Hero, Video-Poster, Gutschein-Motiv, Logo (hell/dunkel), Favicon, ES-Mark
assets/icons/              Icons & Zahlungs-/Partner-Logos (aus static/ übernommen und benannt)
static/                    Original-Assets (unverändert, als Quelle erhalten)
```

### Aufbereitete Assets

* `hero.jpg` ← `static/images/Landingpage Startbild Cut.png`
* `video-poster.jpg` ← 9:16-Ausschnitt aus dem Startbild (Poster für das YouTube-Video)
* `gutschein.jpg` ← `static/images/ChatGPT Image 18. Sept. 2026, 01_09_31.png`
* `logo-dark.png` / `logo-light.png` ← `static/logo/EliteSportCarsClub Logo FINALE schwarz.png`
  (helle Variante für dunkle Flächen invertiert)
* `favicon.png`, `apple-touch-icon.png`, `icon-512.png` ← ES-Monogramm
* Icons wie `ticket.png`, `pin.png`, `stars.png`, `paypal.png`, `kauf-auf-rechnung.png` usw.
  wurden umbenannt und komprimiert, Inhalte unverändert.

---

## Hinweise

* **Bewertungs-Avatare**: Im Design sind Fotos abgebildet, im `static/`-Ordner liegen keine Portraits.
  Deshalb sind die Avatare als Initialen-Chips im Marken-Look umgesetzt – können bei Bedarf durch
  Fotos ersetzt werden.
* **Video**: `https://youtube.com/shorts/ry9gG6nqdAw` – wird erst nach Klick geladen
  (Daten und Performance).
* **Formular/Login**: reine Demo-Implementierung ohne Backend; Bestellungen lösen keine Zahlung aus.
* Der Hinweis „Kein echtes Fahrzeugangebot, Demo-Landingpage“ steht im Footer.
