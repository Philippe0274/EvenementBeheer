# Changelog

## 1.11.0
- UI/UX Sprint 4: Winkelgegevens vernieuwd naar compacte CRM-kaarten in dezelfde stijl als Vrijwilligers en Materiaal.
- Winkelkaarten tonen uitsluitend winkellogo, winkelnaam en BTW-nummer.
- Logo uploaden, vervangen, verwijderen en live preview toegevoegd via dezelfde vierkante compressietechniek als profielfoto's.
- Winkelgegevens is de enige bron van waarheid voor winkellogo's; Materiaal leest hetzelfde logo uit de bestaande winkeldata.
- Nieuwe winkels worden pas na opslaan toegevoegd; er wordt geen lege kaart vooraf aangemaakt.
- Dubbele winkelnamen worden geblokkeerd met de bestaande meldingsflow.
- Zoeken op winkelnaam en BTW-nummer markeert en scrollt naar de juiste kaart.
- Geen aparte logo-assets, geen extra logo-opslag en geen wijzigingen aan Winkelbestellingen-logica.

## 1.10.2
- UI/UX patch materiaalmodule: materiaalkaarten compacter gemaakt met automatische hoogte, minder lege ruimte en betere rij-uitlijning.
- Gegevenslayout in materiaalkaarten verfijnd naar een vaste tweekolomslayout zodat labels en waarden niet overlappen.
- Typografie aangescherpt: titel prominenter, labels subtieler en waarden beter leesbaar.
- Actiebalk van materiaalkaarten gelijkgetrokken met de compacte verticale stijl van de vrijwilligersmodule.
- Winkelgroepen binnen `Winkel_Magasin` tonen voortaan links in de groepstitel een bestaand winkellogo wanneer dat in de winkeldata aanwezig is.
- Wanneer geen bestaand winkellogo beschikbaar is, toont de winkelgroep een neutraal winkelicoon; individuele materiaalkaarten krijgen geen logo.
- Geen nieuwe logo-assets aangemaakt en geen wijzigingen aan datamodel, opslag, save-flow, import/export, backup/restore of Winkelbestellingen.

## 1.10.1
- UI/UX patch materiaalmodule: oorsprongsblokken krijgen voortaan een deterministische subtiele kleur uit een vast professioneel palet.
- Bekende oorsprongen houden expliciet dezelfde kleur: Vilvoorde lichtblauw, Grimbergen lichtgroen, Ben Addi lichtoranje, Winkel/Magasin lichtgeel en Zonder oorsprong lichtgrijs.
- Nieuwe oorsprongen krijgen automatisch de volgende beschikbare kleur uit hetzelfde vaste palet; na refresh, backup, restore, import en export blijft de kleurkeuze deterministisch.
- De kleur wordt alleen toegepast op oorsprongsblokken, titelbalken, blokbadges en subtiele accenten; materiaalkaarten blijven wit.
- Geen wijzigingen aan datamodel, opslag, save-flow, import/export, backup/restore of Winkelbestellingen.

## 1.10.0
- UI/UX Sprint 3: materiaalmodule vernieuwd naar een professionele kaartweergave zonder datamodel-, opslag-, sync-, backup-, restore-, import- of exportwijzigingen.
- Materiaal wordt automatisch gegroepeerd per oorsprong, met inklapbare blokken, subtiele blokkleuren en statistieken voor aantal materialen en totaal stuks.
- Winkelmateriaal wordt binnen het blok `Winkel / Magasin` aanvullend gegroepeerd per winkel.
- Materiaalkaarten zijn compact, hebben gelijke hoogte, tonen alleen ingevulde velden en hebben een verticale iconenbalk voor bekijken, bewerken en verwijderen.
- Klik op een kaart markeert/bekijkt het materiaal; dubbelklik opent het bestaande bewerkingsformulier in overlayvorm.
- Nieuwe materialen verschijnen pas na opslaan als kaart in de juiste groep; bestaande materialen verplaatsen na wijziging van oorsprong of winkel automatisch naar het juiste blok.
- Dubbele materialen worden geblokkeerd wanneer `Materiaal NL` identiek is binnen dezelfde oorsprong en, voor winkelmateriaal, dezelfde winkel.
- Zoeken opent automatisch de juiste groep, markeert het eerste resultaat en scrollt naar de kaart.
- Winkelbestellingen blijven gebaseerd op dezelfde bestaande materiaalvelden `oorsprong` en `winkelId`.

## 1.9.2
- Regressieherstel vrijwilligersmodule: expliciete knop `Opslaan` toegevoegd aan de CRM-bewerkoverlay.
- Nieuwe en bestaande vrijwilligers gebruiken opnieuw de bestaande `updateVrijwilliger`-stateflow; er is geen nieuwe opslaglogica of datamodelwijziging toegevoegd.
- `Opslaan` sluit de overlay en toont onmiddellijk de bijgewerkte kaart en statistieken.
- Layout, kaarten, profielfoto, planning, zoeken, verwijderen en statistieken blijven ongewijzigd.

## 1.9.1
- UI/UX Sprint 2.1: vrijwilligerskaarten visueel verfijnd zonder functionele, opslag- of datamodelwijzigingen.
- Kaartgrid toont standaard maximaal drie kaarten per rij en schaalt responsief naar twee of één kolom.
- Acties staan nu als compacte verticale iconenbalk rechts op elke kaart met hover-tooltips.
- Kaarten gebruiken meer ruimte voor gegevens, kleinere avatar, compactere beschikbaarheidsbadge en subtielere labels.
- Lange waarden zoals e-mail blijven afgekapt in de kaart en tonen de volledige waarde via hover-title.
- Kaarten behouden dezelfde vaste hoogte in normale weergave; bewerkmodus blijft bewust uitbreidbaar.

## 1.9.0
- UI/UX Sprint 2: vrijwilligersmodule vernieuwd naar compacte CRM-kaarten zonder uitklapbare blokken in de zichtbare module.
- Iedere kaart toont profielfoto of initialen-avatar, naam, roepnaam, beschikbaarheidsbadge, contactgegevens, adres, gemeente en een compacte opmerking.
- Acties per vrijwilliger toegevoegd in de kaartweergave: bekijken, bewerken, planning en verwijderen.
- Optionele profielfoto toegevoegd aan het bestaande vrijwilligersformulier met kiezen, vervangen, verwijderen, live preview en automatische vierkante compressie naar ongeveer 300x300 pixels.
- Bovenaan de module staan compacte statistiekkaarten voor totaal, beschikbaar en niet beschikbaar op basis van bestaande vrijwilligersdata.
- Bestaande vrijwilligers zonder foto blijven backward compatible; opslag, import/export, backup/restore, filters en planning blijven ongewijzigd.

## 1.8.1
- Regressieherstel Business Continuity-invoer: bestaande artikelnummers tonen opnieuw de officiële snapshotreferentie.
- Snapshotartikelen worden altijd genormaliseerd, ook wanneer ze onder `priceListSnapshot.articles` bewaard zijn.
- Read-only referentiekaart toont nu artikelnummer, naam, categorie, officiële prijs en actief/inactief.
- Geen validatie, ledger-posting, rapportering, synchronisatie, import/export, OCR of financiële berekeningen toegevoegd.

## 1.8.0
- Fase 4B Business Continuity: slimme administratieve invoer toegevoegd zonder ledger-posting, validatie, rapportering of financiële berekeningen.
- Artikelnummerinvoer toont onmiddellijk officiële snapshotinformatie: naam, categorie, prijs en actief/inactief.
- Zoekfunctie toegevoegd op artikelnummer, naam en categorie; selectie vult automatisch het artikelnummer.
- Onbekende artikelen tonen direct een waarschuwing en kunnen administratief als nieuw artikel tijdens evenement worden geregistreerd met naam, categorie en prijs.
- Papierprijs kan administratief naast de officiële snapshotprijs worden genoteerd; afwijkingen tonen een aparte markering voor prijswijziging zonder financiële impact.
- Transacties met meerdere regels worden visueel gegroepeerd en de invoer ondersteunt snellere toetsenbordbediening met Enter en automatisch nieuwe regels.
- Afgewerkte administratieve invoer (`entry_completed`) kan opnieuw geopend worden zodat eerder ingevoerde regels onmiddellijk zichtbaar blijven.

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
