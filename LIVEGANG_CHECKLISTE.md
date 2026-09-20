# Livegang-Checkliste — ELCON LED GmbH

Stand: 20. September 2026

Diese Liste sammelt alles, was vor dem Livegang noch von Ihnen entschieden,
beschafft oder bestätigt werden muss. Sie ist bewusst ohne Fachjargon
geschrieben. Jeder Punkt nennt, **wer** etwas tun muss und **wo** die Angabe
anschließend eingetragen wird.

Die Website selbst zeigt keine dieser offenen Punkte an — Besucher sehen
keine Platzhalter und keine Hinweiskästen.

---

## 1. Fehlende Pflichtangaben für das Impressum

Das Impressum ist bis auf **einen** Punkt vollständig. Übernommen wurden aus
Ihrem bisherigen Auftritt: Firmierung, Anschrift mit Ortsteil, Geschäftsführer
Klaus-Jürgen Deiters, Amtsgericht Hildesheim, HRB 202878, Telefon, Telefax und
E-Mail.

| Offen | Was gebraucht wird | Wer |
| --- | --- | --- |
| Umsatzsteuer-Identifikationsnummer | Die Nummer im Format `DE` + neun Ziffern — oder die Bestätigung, dass die GmbH keine besitzt | Geschäftsführung / Steuerberatung |

**Wichtig zum Verständnis:** Die Angabe ist nach § 5 Abs. 1 Nr. 6 DDG nur
Pflicht, *wenn* das Unternehmen eine Umsatzsteuer-Identifikationsnummer hat.
Hat es keine, bleibt der Abschnitt einfach weg — das ist korrekt und kein
Mangel.

Auf Ihrem bisherigen Auftritt steht unter dieser Überschrift `15/7773289`.
Das ist dem Format nach **keine** Umsatzsteuer-Identifikationsnummer, sondern
eine Steuernummer; die alte Seite bezeichnet sie falsch. Auf der neuen Seite
steht sie jetzt korrekt unter der Überschrift „Steuernummer".

Eingetragen wird die Nummer in `src/config.ts`, Feld `vatId`.

---

## 2. Rechtlich noch zu prüfende Punkte

Ich gebe keine Rechtsberatung. Die folgenden Punkte sollten vor dem Livegang
von einer fachkundigen Stelle bestätigt werden.

- **Steuernummer im Impressum.** Sie ist keine Pflichtangabe. Manche Kanzleien
  raten von der Veröffentlichung ab, weil sie für Betrugsversuche missbraucht
  werden kann. Die Entscheidung, sie zu zeigen, haben Sie getroffen — bitte
  gegenprüfen lassen.
- **Kennzeichnung KI-generierter Bilder.** Umgesetzt nach Art. 50 EU AI Act
  (Transparenzpflicht seit 2. August 2026): Hinweis direkt unter dem Bild,
  dauerhaft sichtbar, zusätzlich ein Sammelnachweis im Impressum. Ob das im
  Einzelfall ausreicht, ist eine juristische Bewertung.
- **Hero-Motiv der Startseite ohne Kennzeichnung.** Auf Ihre Entscheidung hin
  trägt das Gebäudemotiv im Einstieg der Startseite keinen Hinweis am Bild
  mehr. Es zeigt keine Personen und behauptet kein konkretes Projekt; der
  Sammelnachweis im Impressum deckt es ab. Alle übrigen KI-Motive — besonders
  die mit Personen — sind weiterhin am Bild gekennzeichnet. Bitte
  gegenprüfen lassen.
- **Referenzschreiben von Behörden und Abgeordneten.** Unter den 20 Schreiben
  sind Zuschriften aus dem Bundeskanzleramt, dem Deutschen Bundestag, dem
  Niedersächsischen Landtag und einem ausländischen Ministerium. Eine
  Zustimmung dieser Absender zur Veröffentlichung im Internet ist nicht
  dokumentiert.
- **Fremde Firmenlogos.** 31 Logos in der Laufschrift, 40 auf den
  Projektkacheln. Sie sind Marken der jeweiligen Rechteinhaber.
- **Datenschutzerklärung.** Sie beschreibt jetzt die tatsächliche Technik
  (siehe Abschnitt 12). Bei Änderungen am Formular muss sie nachgezogen
  werden.

---

## 3. Referenzen mit Status „pending"

**Derzeit keine.** Auf Ihre Entscheidung hin stehen alle 44 Projektreferenzen
auf `verified` und freigegeben, weil dieselben Inhalte bereits auf
www.elcon-led.com veröffentlicht sind.

Das ist eine Entscheidung des Auftraggebers und ersetzt keine
markenrechtliche Einzelprüfung — siehe Abschnitte 4 und 5.

Gepflegt wird der Status in `src/data/referenzen.ts`, Feld `status`. Einträge
mit `do-not-publish` erscheinen automatisch nirgends auf der Website.

---

## 4. Nicht freigegebene Logos

Alle Logos sind technisch freigegeben, eine schriftliche Nutzungserlaubnis
liegt aber für **keines** vor.

- **31 Logos** in der Laufschrift der Startseite
- **40 Logos** auf den Projektkacheln der Projektübersicht

Darunter Volkswagen, Porsche, Audi, Siemens, Continental, Benteler,
thyssenkrupp, Heineken, AB InBev, General Motors, Mitsubishi, Hilton, Hyatt,
BILLA, Selgros, HOCHTIEF, Hoffmann-La Roche, Johnson & Johnson, STREIF,
Philipp Holzmann, Bau Grund, Bautech, CARE International, SOS-Kinderdorf
International, OSZE, Auswärtiges Amt, Botschaft der Europäischen Union,
Schweizerische Eidgenossenschaft und Aeroflot-Bank.

**Zu tun:** Prüfen, für welche Marken eine Nutzungserlaubnis vorliegt oder
eingeholt werden kann. Ohne Erlaubnis ist der übliche Weg, das Logo wegzulassen
und nur den Namen zu nennen.

Eingetragen wird das in `src/data/referenzen.ts`, Feld `logoFreigabe`. Steht
dort `abgelehnt`, zeigt die Kachel automatisch eine Textfläche statt des Logos —
die Referenz verschwindet also nicht.

**Nord Stream und Nord Stream 2** wurden auf Ihren Wunsch aus der Laufschrift
der Startseite entfernt. Die Projekte selbst bleiben als historische
Referenzen bestehen.

---

## 5. Nicht freigegebene Referenzschreiben

Alle 20 Schreiben sind technisch freigegeben, eine Zustimmung der Absender ist
für **keines** dokumentiert. Besonders zu prüfen:

| Absender | Datum |
| --- | --- |
| Bundesrepublik Deutschland, Der Bundeskanzler | 5. Februar 2002 |
| Deutscher Bundestag · Dr.-Ing. D. Kansy MdB | 24. Januar 2002 |
| Niedersächsischer Landtag · M. Stolze MdL | 17. November 2001 |
| Niedersächsischer Landtag · L. von der Heide MdL | 4. Februar 2002 |
| Bundesamt für Bauwesen und Raumordnung | 3. Januar 2002 |
| Ministerul Energeticii al Republicii Moldova | 22. Januar 2002 und 2002 |

Die übrigen 14 stammen von Unternehmen. Gepflegt in `src/data/referenzen.ts`,
Feld `schreibenFreigabe`.

---

## 6. Unklare Projektrollen

Bei **30 von 44** Referenzen geht aus den übernommenen Texten nicht hervor, ob
ELCON Hauptauftragnehmer, Generalunternehmer, Nachunternehmer oder
ausführender Partner war. Sie sind deshalb neutral formuliert.

Geklärt sind bisher:

- **Generalunternehmer:** Villa Benilux (die Detailseite nennt ELCON LED
  ausdrücklich als Generalunternehmer)
- **Technischer Generalunternehmer:** Schweizer Botschaft Kiew
- **Nachunternehmer** (die Detailseite nennt einen anderen Generalunternehmer):
  Deutsche Botschaft Kiew, Brauerei Almaty, Porsche-Zentrum Moskau, Schweizer
  Konsulat St. Petersburg, Schweizer Botschaft Moskau, VW-Werk Kaluga,
  Modernisierungsprojekt Moskau, Villa Rublowskoe Schosse, Bautech, HOCHTIEF
- **Ausführend:** Nord Stream 2011, Continental Kaluga

**Zu tun:** Für die übrigen 30 die Rolle benennen. Eingetragen in
`src/data/referenzen.ts`, Feld `rolle`.

---

## 7. Historische Projekte mit ungeklärten Zeitangaben

33 Referenzen sind als abgeschlossene Projekte der Unternehmenshistorie
eingeordnet und in der Projektübersicht unter einer eigenen Überschrift
zusammengefasst. Bei folgenden fehlt ein dokumentierter Ausführungszeitraum:

- Schweizer Botschaft, Republik Moldau
- Hilton / Ararat Park Hyatt Hotel, Moskau

Bereits korrigiert: Die Formulierungen „seit 2018", „seit 2012", „seit 2011"
und „laufende Wartung" sind auf den belegten Zeitraum begrenzt („ab 2018"
usw.), die Gegenwartsformen in den Nord-Stream-Texten stehen jetzt in der
Vergangenheit. Nach Ihrer Auskunft bestehen keine laufenden Projekte in oder
mit russischer Beteiligung mehr.

---

## 8. Aktuelle Projekte mit fehlenden Detailinformationen

11 Referenzen sind weder als historisch noch als aktuell einzuordnen, weil
kein Zeitraum dokumentiert ist. Es sind zugleich die Projekte, die eine
aktuelle Leistungsfähigkeit belegen könnten:

| Projekt | Land | Was fehlt |
| --- | --- | --- |
| Audi-Werk Ingolstadt, Umbau | Deutschland | Zeitraum, Leistungsumfang, Rolle, Bilder, Detailseite |
| VW-Werk Emden, Umbau Elektrofahrzeug | Deutschland | Zeitraum, Leistungsumfang, Rolle, Bilder, Detailseite |
| VW-Batteriewerk Salzgitter | Deutschland | Zeitraum, Leistungsumfang, Rolle, Bilder, Detailseite |
| VW-Werk, Crafter-Fertigung | Polen | Zeitraum, Standort, Leistungsumfang, Rolle, Detailseite |
| VW-Werk Poznań, Caddy-Fertigung | Polen | Zeitraum, Leistungsumfang, Rolle, Detailseite |
| SOS-Kinderdorf, Tansania | Tansania | Zeitraum, Leistungsumfang, Rolle |
| SOS-Kinderdorf, Äthiopien | Äthiopien | Zeitraum, Leistungsumfang, Rolle |
| Bautech, Gewerbebau | — | Land, Ort, Zeitraum, konkretes Projekt |
| HOCHTIEF, Gewerbebau | — | Land, Ort, Zeitraum, konkretes Projekt |
| CARE International, Reha-Zentrum | — | Land, Ort, Zeitraum |
| STREIF, Bauprojekt | — | Land, Ort, Zeitraum, konkretes Projekt |

**Das ist der wichtigste inhaltliche Punkt der Liste.** Solange für die
deutschen Projekte kein Zeitraum und kein Leistungsumfang vorliegt, lässt sich
auf der Startseite keine belastbare aktuelle Leistungsfähigkeit zeigen.

Für jedes Projekt gebraucht: Ausführungszeitraum, Auftraggeber, Rolle von
ELCON, Leistungsumfang in drei bis fünf Stichpunkten, Freigabe des
Auftraggebers zur Nennung.

Hinweis: Ihr bisheriger Auftritt enthält rund 60 Projektseiten, deutlich mehr
als die hier geführten 44. Die zusätzlichen betreffen überwiegend ältere
Projekte (1991–2003).

---

## 9. Ungeklärte Bildherkünfte

Von 27 erfassten Motiven ist die Herkunft bei **vier** nicht belegt. Keines
wurde gelöscht.

| Datei | Lage |
| --- | --- |
| `projekte/nord-stream-elcon-liefert-elt-te-08.jpg` | Gehört zur Nord-Stream-Bildserie, trägt als einziges keine Kameradaten. **Wird derzeit auf der Detailseite gezeigt.** |
| `offer/atrium.jpg` | Keine Kameradaten, derzeit nicht eingebunden |
| `offer/pv-dach.jpg` | Keine Kameradaten, derzeit nicht eingebunden |
| `unternehmen/tga-gebaeudetechnik.png` | Keine Kameradaten, derzeit nicht eingebunden |

**Zu tun:** Bestätigen, ob Bild 08 eine echte Aufnahme von der Nord-Stream-
Baustelle ist. Falls nicht, muss es aus der Galerie genommen oder
gekennzeichnet werden.

Als echte Aufnahmen belegt sind sieben Motive: die Nord-Stream-Fotos 01 bis 07
tragen Kameradaten (Canon PowerShot A520, Canon EOS-1D Mark III, Olympus
uD800) und Bearbeitungsspuren aus Photoshop CS3.

Geführt wird das in `src/data/bilder.ts`.

---

## 10. KI-Bilder, für die reale Ersatzbilder empfohlen werden

Zwölf Motive sind KI-generiert und als solche gekennzeichnet. Für die
folgenden wäre eine echte Aufnahme deutlich glaubwürdiger, weil sie Personen
oder konkrete Projektsituationen zeigen:

**Hohe Priorität** — zeigen Personen, die als ELCON-Mitarbeitende gelesen
werden könnten:

- `unternehmen/team-planung.jpg` (Unternehmensseite, großflächig)
- `leistungen/team-montage.jpg`
- `leistungen/planbesprechung-baustelle.jpg`
- `leistungen/beratung-anlage.jpg`
- `leistungen/baustelle-messung.jpg`
- `leistungen/thermografie.jpg`
- `leistungen/mittelspannung-schneider.jpg`
- `leistungen/msr-handheld.jpg`
- `leistungen/hebebuehne-verkabelung.jpg`
- `leistungen/kommunikationssysteme-rack.jpg`

**Mittlere Priorität:**

- `offer/technik-msr.jpg` — steht im Referenzbereich und könnte als
  Projektnachweis gelesen werden
- `hero-building.jpg` — Gebäudeansicht auf der Startseite

Zwei Alt-Texte behaupteten bisher „Zwei ELCON-Techniker …" für ein
KI-generiertes Motiv. Das ist korrigiert.

---

## 11. Fehlende Ansprechpartnerdaten

Hinterlegt und auf beiden Kontaktseiten sichtbar: **Klaus-Jürgen Deiters,
Geschäftsführer**, mit Telefonzentrale und info@elcon-led.com.

Offen:

- **Foto.** Liegt keines vor, zeigt die Seite die Initialen auf einer
  Farbfläche. Ein KI-erzeugtes Portrait kommt nicht in Frage — das wäre die
  Abbildung einer Person, die es nicht gibt.
- **Direktdurchwahl**, falls abweichend von der Zentrale.
- **Weitere Ansprechpartner** für einzelne Leistungsbereiche, falls gewünscht:
  Vorname, Nachname, Funktion, Verantwortungsbereich, Durchwahl, E-Mail,
  Sprachen — und die Zustimmung der Person zur Veröffentlichung.

Gepflegt in `src/config.ts`, Liste `ansprechpartner`. Ein Eintrag erscheint
erst, wenn `aktiv` und `veroeffentlichungsfreigabe` beide auf `true` stehen.

---

## 12. Erforderliche E-Mail- und Cloudflare-Konfiguration

**Auf Ihren Wunsch zurückgestellt.** Das Anfrageformular arbeitet vorerst
unverändert weiter:

- **Ohne Anhänge** öffnet sich das E-Mail-Programm des Besuchers mit einer
  vorbereiteten Nachricht.
- **Mit Anhängen** geht die Anfrage an die vorhandene Cloudflare-Function
  `functions/api/anfrage.js`.

Damit der zweite Weg funktioniert, werden im Cloudflare-Dashboard unter
*Pages-Projekt → Settings → Environment variables* benötigt:

| Variable | Bedeutung |
| --- | --- |
| `RESEND_API_KEY` | Schlüssel des Versanddienstes resend.com |
| `ANFRAGE_AN` | Empfangspostfach, z. B. info@elcon-led.com |
| `ANFRAGE_VON` | Absenderadresse einer verifizierten Domain |

Fehlt der Schlüssel, antwortet der Endpunkt mit einem Fehler, und das Formular
weist den Besucher auf den Weg per E-Mail hin — es gehen also keine Anfragen
still verloren.

**Noch nicht umgesetzt** (aus Priorität A, Thema 3, auf Ihren Wunsch
zurückgestellt): vollständig serverseitiger Versand auch ohne Anhänge,
Honeypot-Feld, Zeitprüfung, serverseitige Längen- und Dateiprüfung,
Eingangsbestätigung an den Absender.

---

## 13. Erforderliche DNS-Einstellungen

Erst relevant, wenn der E-Mail-Versand eingerichtet wird (Abschnitt 12).

| Eintrag | Zweck |
| --- | --- |
| SPF (TXT) | Erlaubt dem Versanddienst, in Ihrem Namen zu senden |
| DKIM (CNAME oder TXT) | Signiert ausgehende Nachrichten |
| DMARC (TXT) | Legt fest, wie Empfänger mit nicht bestandener Prüfung umgehen |

Die konkreten Werte liefert der Versanddienst nach Anlage der Absenderdomain.

**Zusätzlich vor dem Livegang:** Die Domain `www.elcon-led.com` zeigt derzeit
auf den alten Auftritt, nicht auf das Cloudflare-Pages-Projekt. Die Umstellung
ist ein eigener Schritt.

---

## 14. Noch ausstehende reale Versandtests

Ein echter Versandtest war **nicht möglich**, weil keine Zugangsdaten
vorliegen. Das ist ausdrücklich kein bestandener Test.

Vor dem Livegang zu prüfen:

1. Anfrage **ohne** Anhang absenden — öffnet sich das E-Mail-Programm mit den
   richtigen Feldern?
2. Anfrage **mit** einem PDF absenden — kommt die E-Mail im Zielpostfach an?
3. Anfrage mit mehreren Dateien über 15 MB — wird sie sauber abgewiesen?
4. Antwort auf die eingegangene E-Mail — landet sie beim Absender?
5. Dasselbe auf der englischen Kontaktseite; die E-Mail vermerkt
   „Sprache der Anfrage: Englisch".

---

## 15. Verbleibende Blocker für den Livegang

In der Reihenfolge, in der sie anzugehen sind:

1. **Umsatzsteuer-Identifikationsnummer** oder die Bestätigung, dass keine
   existiert (Abschnitt 1).
2. **Logo- und Schreibenfreigaben** klären (Abschnitte 4 und 5).
3. **Angaben zu den deutschen Projekten** beschaffen (Abschnitt 8).
4. **E-Mail-Versand einrichten und testen** (Abschnitte 12 bis 14).
5. **Domain umstellen** auf das Cloudflare-Pages-Projekt (Abschnitt 13).

Nicht blockierend, aber empfohlen: echte Projektfotos (Abschnitt 10),
Ansprechpartnerfoto (Abschnitt 11), Herkunft von Bild 08 klären (Abschnitt 9).

---

## Wo was gepflegt wird — Kurzübersicht

| Was | Datei |
| --- | --- |
| Firmendaten, Impressumsangaben, Ansprechpartner | `src/config.ts` |
| Projektreferenzen, Logos, Referenzschreiben, Freigaben | `src/data/referenzen.ts` |
| Bildherkunft und KI-Kennzeichnung | `src/data/bilder.ts` |
| Projektdetailtexte | `src/data/projekte.ts` |
| Auswahl des Leistungsfinders | `src/data/finder.ts` |
| Texte der Navigation und wiederkehrender Bausteine | `src/i18n/ui.ts` |
