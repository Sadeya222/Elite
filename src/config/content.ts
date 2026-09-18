/* ------------------------------------------------------------------
   ASSETS — replace these URLs with your own images / video.
   Keep the keys, only swap the url / poster / src values.
   ------------------------------------------------------------------ */
export const assets = {
  logoImage:
    "https://i.postimg.cc/9WRJ0XzR/Elite-Sport-Cars-Club-Logo-FINALE-schwarz.png",
  /** Hero background (wide photo of the car). e.g. /media/hero.jpg */
  heroImage:
    "https://images.pexels.com/photos/28559696/pexels-photo-28559696.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1800",
  videoPoster: "https://i.ytimg.com/vi/ry9gG6nqdAw/hqdefault.jpg",
  /** YouTube videos need an embed URL, not an HTML video source. */
  videoSrc: "https://www.youtube-nocookie.com/embed/ry9gG6nqdAw",
  videoLink: "https://www.youtube.com/shorts/ry9gG6nqdAw",
  /** Gift voucher photo (ELITE SPORT CARS CLUB / GUTSCHEIN / LAMBORGHINI FAHREN) */
  voucherImage:
    "https://i.postimg.cc/SsLGysy3/Chat-GPT-Image-18-Sept-2026-01-09-31.png",
  testimonialAvatars: [
    "https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",
    "https://images.pexels.com/photos/36287434/pexels-photo-36287434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",
    "https://images.pexels.com/photos/30269649/pexels-photo-30269649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",
  ],
};

export const nav = [
  { label: "Alle Erlebnisse", href: "#erlebnis" },
  { label: "So funktioniert's", href: "#steps" },
  { label: "Tour & Termine", href: "#tour" },
  { label: "Bewertungen", href: "#bewertungen" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  kicker: "Deutschlandtour 2026",
  title: "Lamborghini Huracán EVO selbst fahren.",
  subtitle: "15 unvergessliche Minuten.",
  oldPrice: "149 €",
  newPrice: "19 €",
  badges: [
    { icon: "crown", label: "König-Klasse" },
    { icon: "pin", label: "In 12 deutschen Städten" },
    { icon: "group", label: "Nur 30 Promo-Tickets pro Stadt" },
  ] as { icon: "crown" | "pin" | "group"; label: string }[],
  cta: "Jetzt Promo-Ticket sichern",
  footnote:
    "Bei der späten Terminbuchung fallen zusätzlich 59 € Buchhaltungs-/Fahrzeugbetrieb- und Vor-Ort-Service an.",
};

export const partners = ["GROUPON", "mydays", "JOCHEN SCHWEIZER", "erlebnisgeschenke.de"];

export const momentSection = {
  kicker: "Das ist keine Probefahrt.",
  title: "Das ist dein Lamborghini-Moment.",
  text: "Tür auf. Einsteigen. Startknopf drücken. Den V10 hinter dir hören. Und dann passiert das, wovon andere nur träumen: Du fährst.",
  checklist: [
    "Du sitzt selbst am Steuer",
    "Lamborghini Huracán EVO",
    "15 Minuten pure Fahrzeit",
    "Instruktor an deiner Seite",
  ],
  bannerItems: [
    { icon: "megaphone", text: "Promotion-Aktion statt klassischer Werbung" },
    { icon: "group", text: "Möglichst viele Menschen hinter dem Steuer" },
    { icon: "camera", text: "Videos, Reels und echte Erlebnisse" },
    { icon: "heart", text: "Eine Community, die unsere Leidenschaft teilt" },
  ] as { icon: "megaphone" | "group" | "camera" | "heart"; text: string }[],
  playerLabel: "Press Play and spend the Sound",
};

export const noCatch = {
  priceLine: "149 € → 19 €",
  title: "Wo ist der Haken?",
  lead: "Es gibt keinen. Es gibt einen Grund.",
  text: "Diese Deutschlandtour ist unsere große Promotion-Aktion. Statt unser Budget ausschließlich in klassische Werbung zu stecken, möchten wir möglichst viele Menschen tatsächlich hinter das Steuer bringen. Wir wollen volle Termine, echte Emotionen und viele Videos, Reels und TikToks. Deshalb zahlst du aktuell nur 19 € statt 149 € Ticketpreis.",
};

export const tour = {
  kicker: "Tour 2026",
  title: "12 Städte. Ein Traum.",
  text: "Wir sind nur für wenige Tage in deiner Stadt. Pro Stadt stehen nur 80 vergünstigte Promo-Tickets zur Verfügung.",
  cities: [
    { city: "Hamburg", dates: "16. – 17. Okt." },
    { city: "Bremen", dates: "23. – 24. Okt." },
    { city: "Hannover", dates: "30. – 31. Okt." },
    { city: "Dortmund", dates: "06. – 07. Nov." },
    { city: "Düsseldorf", dates: "13. – 14. Nov." },
    { city: "Köln", dates: "20. – 21. Nov." },
    { city: "Frankfurt", dates: "27. – 28. Nov." },
    { city: "Stuttgart", dates: "04. – 05. Dez." },
    { city: "München", dates: "11. – 12. Dez." },
    { city: "Leipzig", dates: "18. – 19. Dez." },
    { city: "Dresden", dates: "08. – 09. Jan." },
    { city: "Berlin", dates: "15. – 16. Jan." },
  ],
};

export const steps = {
  kicker: "So einfach gehts",
  title: "In 4 Schritten zu deinem Lamborghini-Moment.",
  items: [
    {
      title: "Promo-Ticket sichern",
      text: "Jetzt eines der limitierten Tickets für nur 19 €",
      icon: "ticket",
    },
    {
      title: "Termin buchen",
      text: "Gutschein einlösen und einen verfügbaren Termin wählen",
      icon: "calendar",
    },
    {
      title: "Einsteigen",
      text: "Führerschein zeigen, kurze Einweisung erhalten",
      icon: "user",
    },
    {
      title: "Traum erfüllen",
      text: "Motor starten, Gang rein. Und Lamborghini fahren.",
      icon: "flag",
    },
  ] as { title: string; text: string; icon: "ticket" | "calendar" | "user" | "flag" }[],
};

export const gift = {
  kicker: "Auch als Geschenk",
  title: "Du willst nicht selbst fahren?",
  lead: "Dann verschenke einen Lamborghini-Moment.",
  text: "Ob Geburtstag, Weihnachten, Jahrestag oder einfach nur so – dieses Erlebnis sorgt garantiert für leuchtende Augen.",
  occasions: [
    { icon: "gift", label: "Geburtstag" },
    { icon: "heart", label: "Weihnachten" },
    { icon: "wish", label: "Jahrestag" },
    { icon: "sparkle", label: "Überraschung" },
    { icon: "bucket", label: "Bucket List" },
  ] as { icon: "gift" | "heart" | "wish" | "sparkle" | "bucket"; label: string }[],
};

export const testimonials = {
  kicker: "Das sagen unsere Fahrer",
  title: "Echte Menschen. Echte Emotionen.",
  items: [
    {
      quote: "Ich kann es immer noch nicht glauben. Bester Tag überhaupt.",
      name: "Lukas, Köln",
    },
    { quote: "Adrenalin pur! Das muss jeder einmal erleben.", name: "Sarah, München" },
    {
      quote: "Das perfekte Geschenk! Er hatte Tränen in den Augen.",
      name: "Julia, Stuttgart",
    },
  ],
};

export const trust = {
  kicker: "Dein Erlebnis. Unser Versprechen.",
  items: [
    { icon: "shield", label: "Deutsches Unternehmen" },
    { icon: "instructor", label: "Professionelle Instruktoren" },
    { icon: "lock", label: "Keine Kaution für die Erlebnisart" },
    { icon: "calendarCheck", label: "Sicherer Buchungsprozess" },
    { icon: "headset", label: "Persönlicher Kundenservice" },
    { icon: "euro", label: "Transparente Kosten" },
  ] as { icon: "shield" | "instructor" | "lock" | "calendarCheck" | "headset" | "euro"; label: string }[],
};

export const faq = {
  kicker: "Häufige Fragen",
  title: "Hier findest du die wichtigsten Antworten.",
  items: [
    {
      q: "Fahre ich den Lamborghini wirklich selbst?",
      a: "Ja. Du sitzt selbst am Steuer des Lamborghini Huracán EVO. Ein Instruktor sitzt an deiner Seite und begleitet dich mit klaren Anweisungen.",
    },
    {
      q: "Warum kostet das Ticket nur 19 €?",
      a: "Weil diese Tour eine Promotion-Aktion ist. Wir verzichten auf klassische Werbung und investieren stattdessen in echte Fahrten, Videos und Reels.",
    },
    {
      q: "Kostet die Fahrt wirklich nur 19 €?",
      a: "Das Promo-Ticket kostet 19 € statt 149 €. Bei einer späten Terminbuchung kommen ggf. 59 € Buchhaltungs- und Vor-Ort-Service hinzu.",
    },
    {
      q: "Muss ich eine Kaution hinterlegen?",
      a: "Nein. Für diese Erlebnisart ist keine Kaution notwendig – transparent, ohne versteckte Kosten.",
    },
    {
      q: "Wie lange darf ich fahren?",
      a: "Deine Fahrzeit beträgt 15 Minuten pure Fahrt – inklusive Einweisung, Sitzposition und Fotos bist du rund 30 Minuten vor Ort.",
    },
    {
      q: "Brauche ich einen Führerschein?",
      a: "Ja, du benötigst eine gültige Fahrerlaubnis der Klasse B, die du beim Termin vorzeigst.",
    },
    {
      q: "Kann ich den Gutschein verschenken?",
      a: "Ja. Der Gutschein ist übertragbar und kann an jede Person weitergeschenkt werden – perfekt als Geburtstags- oder Weihnachtsgeschenk.",
    },
    {
      q: "Was passiert, wenn meine Stadt ausverkauft ist?",
      a: "Dann kannst du auf die nächste Station der Tour ausweichen oder dein Ticket vollständig erstatten lassen.",
    },
  ],
};

export const orderForm = {
  kicker: "Bestellung",
  title: "Gutschein bestellen",
  price: "10,00 €",
  paymentMethods: ["PayPal", "Kreditkarte", "Klarna", "SEPA-Überweisung"],
  agreement:
    "Ich stimme den AGB zu und habe die Datenschutzerklärung sowie die Widerrufsbelehrung gelesen.",
  cta: "Zahlungspflichtig bestellen",
};

export const footerLinks = ["Impressum", "Datenschutz", "AGB", "Kontakt"];

/* ---------------------------------- shop ---------------------------------- */
export const pricing = {
  ticket: 19,
  voucher: 19,
  /** on-site service fee mentioned in the hero footnote */
  serviceFee: 59,
};

/** Deterministic "remaining promo tickets" per city (max 30 per city). */
export const initialStock: Record<string, number> = tour.cities.reduce(
  (acc, c, i) => {
    acc[c.city] = 3 + ((i * 7 + 5) % 27);
    return acc;
  },
  {} as Record<string, number>,
);

export type LegalKey = "impressum" | "datenschutz" | "agb" | "kontakt";

export const legal: Record<LegalKey, { title: string; body: string[] }> = {
  impressum: {
    title: "Impressum",
    body: [
      "Angaben gemäß § 5 TMG",
      "Elite Sport Cars Club GmbH",
      "Musterstraße 12, 10115 Berlin, Deutschland",
      "Vertreten durch: Max Mustermann (Geschäftsführer)",
      "Kontakt: +49 30 1234567 · info@elitesportcarsclub.de",
      "Registergericht: Amtsgericht Berlin-Charlottenburg · HRB 123456 B",
      "Umsatzsteuer-ID: DE123456789",
      "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Max Mustermann, Anschrift wie oben.",
    ],
  },
  datenschutz: {
    title: "Datenschutzerklärung",
    body: [
      "Der Schutz deiner persönlichen Daten ist uns wichtig. Wir verarbeiten deine Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TDDDG).",
      "Erhebung von Daten: Wenn du ein Promo-Ticket oder einen Gutschein bestellst, erheben wir Vor- und Nachname, E-Mail-Adresse sowie die gewählte Zahlungsart, um deine Bestellung abzuwickeln.",
      "Zahlungsabwicklung: Zahlungsdaten werden verschlüsselt an unseren jeweiligen Zahlungsdienstleister übertragen und nicht auf unseren Servern gespeichert.",
      "Deine Rechte: Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner Daten. Wende dich dazu an datenschutz@elitesportcarsclub.de.",
      "Hinweis: Diese Demo-Seite speichert Bestellungen ausschließlich lokal in deinem Browser und überträgt keine Daten an einen Server.",
    ],
  },
  agb: {
    title: "Allgemeine Geschäftsbedingungen",
    body: [
      "1. Geltungsbereich – Diese AGB gelten für alle Bestellungen von Promo-Tickets und Gutscheinen über diese Website.",
      "2. Leistung – Das Promo-Ticket berechtigt zur Teilnahme an einer 15-minütigen Fahrt im Lamborghini Huracán EVO an der gewählten Tour-Station, vorbehaltlich Verfügbarkeit.",
      "3. Preise – Der Promo-Preis beträgt 19 € pro Ticket. Bei späterer Terminbuchung kann eine Vor-Ort-Servicepauschale von 59 € anfallen.",
      "4. Voraussetzungen – Fahrer benötigen eine gültige Fahrerlaubnis der Klasse B sowie ein Mindestalter von 18 Jahren.",
      "5. Widerruf – Verbraucher haben ein 14-tägiges Widerrufsrecht. Ungenutzte Gutscheine sind übertragbar.",
      "6. Haftung – Es gelten die gesetzlichen Haftungsregelungen. Die Teilnahme erfolgt unter Anleitung eines professionellen Instruktors.",
    ],
  },
  kontakt: {
    title: "Kontakt",
    body: [
      "Wir sind für dich da – bei Fragen zu Tickets, Terminen oder Gutscheinen.",
      "Telefon: +49 30 1234567 (Mo–Fr, 9–18 Uhr)",
      "E-Mail: info@elitesportcarsclub.de",
      "Adresse: Elite Sport Cars Club GmbH, Musterstraße 12, 10115 Berlin",
      "Nutze alternativ das Kontaktformular unten – wir melden uns in der Regel innerhalb eines Werktags.",
    ],
  },
};
