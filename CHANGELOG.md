# Changelog

## 1.5.0
- Fase 2 Hoofdapp Stap 3: professionele PDF- en printgenerator voor Business Continuity kassabladen toegevoegd.
- Business Continuity sheetsets kunnen nu als volledige set bekeken, afgedrukt en als PDF gegenereerd worden.
- Individuele kassabladen kunnen apart als voorbeeld bekeken en als PDF gegenereerd worden.
- Officieel A4-liggend formulier toegevoegd met eventgegevens, EventId, SheetId, bladnummer, versie, verantwoordelijke, generatiedatum, QR-code, barcode, prijslijst-snapshot, incidentblok, wijzigingsblok, verkoopregistratie, paginacontrole en basiswerking.
- QR-code en barcode worden gerenderd op basis van de bestaande sheet-payload zonder statuswijziging, administratieve invoer, validatie of ledger-posting.

## 1.4.0
- Fase 2 Hoofdapp: Business Continuity Sheet Generator toegevoegd.
- Nieuw tabblad Business Continuity met overzicht van sheetsets en onderliggende kassabladen.
- Generator maakt minimaal 5 kassabladen per evenement met EventId, SheetId, bladnummer, QR/barcode-payload, prijslijst-snapshot en lege incident-, wijzigings- en verkoopregistraties.
- Statusbeheer toegevoegd voor generated, printed, used en archived zonder PDF, print, invoer of ledger-posting.

## 1.3.0
- Fase 2 Hoofdapp: fundament voor Business Continuity en immutable financial ledger toegevoegd.
- Datamodel uitgebreid met appMeta, businessContinuity, finance.ledgerTransactions, auditTrail en legacy.
- Normalisatie bewaart bestaande v4-data en vult de nieuwe architectuurvelden veilig aan zonder UI-gedrag te wijzigen.

## 1.2.0
- Stap 4B: definitief exportcontract voor uitwisseling tussen Kassa Tool en Hoofdapp.
- Export schemaVersion 1.0.0 met UUID-identifiers, masterData, transaction revisions en integrity-blok.
- Migratie: bestaande Date.now()-identifiers worden idempotent omgezet naar UUID's.
- Versieverhoging: nieuwe exportarchitectuur en PWA-update voor het definitieve contract.

## 1.1.2
- Stap 3: prijslijst is permanente masterdata van de Kassa Tool.
- Veiligheid: automatische backup en herstel van de prijslijst via localStorage.
- Bugfix: reset verwijdert de prijslijst niet meer.
- Versieverhoging: nieuwe prijslijst-architectuur moet via PWA-update worden opgehaald.

## 1.1.1
- Stap 2B: veilige transactiewijziging met behoud van het bestaande transactie-ID.
- Bugfix: originele transactie blijft behouden tot een wijziging succesvol wordt opgeslagen.

## 1.1.0
- Stap 2A: historische artikelgegevens in kassatransacties worden losgekoppeld van de actuele prijslijst.
- Versieverhoging: nieuwe functionele release voor historisch correcte transacties.

## 1.0.4
- Bugfix: service worker cachet bij installatie alleen bestaande productie-bestanden.
- Bugfix: vervangt de niet-bestaande index_kassa tool.html fallback door index.html voor GitHub Pages.

## 1.0.3
- Bugfix: service worker gebruikt nu altijd een expliciete GET-cachekey voor documentcaching.
- Bugfix: voorkomt dat POST-requests via cache.put() in de Cache API terechtkomen.
