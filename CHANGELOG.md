# Changelog

## 1.7.1
- Regressieherstel Business Continuity UI: bevestigd dat `Verwerk kassablad` naast `Bekijk blad`, `PDF blad` en `Afdrukken blad` wordt gerenderd voor elk kassablad.
- Cacheherstel: service-worker cacheversie verhoogd en oude `kassa-tool-*` app-shell caches worden opgeruimd, zodat de Hoofdapp niet langer een oude Business Continuity-interface kan tonen.
- Statusgedrag gecontroleerd: `generated` en `entry_completed` tonen de knop bewust uitgeschakeld; `printed`, `used` en `entry_in_progress` tonen de knop actief.

## 1.7.0
- Fase 4A Business Continuity: administratieve invoermodule voor gebruikte papieren kassabladen toegevoegd zonder ledger-posting, validatie, rapportering of financiële berekeningen.
- Per kassablad kan vanuit status `printed` of `used` een invoer gestart worden; de status wordt `entry_in_progress` en na opslaan `entry_completed`.
- Invoer ondersteunt transacties met meerdere opeenvolgende regels per TxNr, één betaalwijze per transactie, één giftbedrag per transactie en optionele opmerkingen.
- Onbekende artikelnummers uit de Business Continuity-snapshot worden alleen administratief gemarkeerd als nieuw artikel tijdens evenement.
- Genoteerde prijswijzigingen kunnen administratief worden geregistreerd zonder prijslijst- of bedragverwerking.

## 1.6.1
- Regressieherstel: `normalizeData()` bewaart de officiële event-prijslijst en prijslijstcategorieën opnieuw expliciet en backward compatible.
- Regressieherstel Business Continuity: sheetsets gebruiken opnieuw de officiële beginprijslijst nadat bestaande data geladen en genormaliseerd wordt.
- Regressieherstel Business Continuity-output: preview, PDF en printlayout gebruiken opnieuw de bestaande tweetalige taalstructuur voor vaste labels.
- Regressiecontrole sheetset-lifecycle: verwijderen blijft zichtbaar en is alleen toegestaan voor sheetsets met status `generated` of `archived`.

## 1.6.0
- Architectuurcorrectie Business Continuity: sheetsets gebruiken voortaan uitsluitend de officiële beginprijslijst uit het Hoofdapp-tabblad Prijslijst.
- Beginprijslijst wordt bij generatie vastgelegd als immutable snapshot met schemaName, schemaVersion, bron, categorieën en artikelen.
- Artikelsnapshot bewaart articleId, artikelnummer, categorie, naam, prijs, actief/inactief en volgorde.
- Print- en PDF-formulieren tonen de officiële beginprijslijst voortaan gegroepeerd per categorie.
- Prijslijst-artikelen ondersteunen nu actief/inactief voor de officiële beginprijslijst.
- Sheetset lifecycle uitgebreid met opnieuw openen en veilig verwijderen; verwijderen is alleen toegestaan voor generated en archived.
- Geen synchronisatie, import/export, administratieve invoer, ledger-posting of rapportering toegevoegd.

## 1.5.1
- Bugfix Business Continuity UI: sheetset-acties zijn nu expliciet zichtbaar als Bekijk volledige sheetset, PDF volledige sheetset en Afdrukken volledige sheetset.
- Bugfix Business Continuity UI: elk individueel kassablad toont nu direct de knoppen Bekijk blad, PDF blad en Afdrukken blad.
- Franse labels toegevoegd voor dezelfde zichtbare preview-, PDF- en printacties.
- Bestaande preview-, PDF- en printfuncties blijven hergebruikt; er is geen administratieve invoer, validatie of ledger-posting toegevoegd.

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
