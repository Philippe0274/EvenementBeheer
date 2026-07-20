# Changelog

## 1.25.12
- Eerste versie van `Eindrapport genereren` toegevoegd bij de read-only Eindafrekening in `Kostenbeheer`.
- Nieuwe PDF-generator gebruikt dezelfde `berekenEindafrekening()` cijfers als het scherm.
- Het Eindrapport toont eventnaam, datum, locatie, eindresultaat, inkomsten, kosten, betaalcontrole, budgetcontrole en ticketregistraties.
- De affiche wordt in het Eindrapport klein naast de titel geplaatst en niet als watermerk gebruikt.
- Bestaande Kostenbeheer-PDF en andere rapport-PDF's blijven ongewijzigd.
- De uitleg onder "Werking/Fonctionnement" en de affiche-helptekst zijn bijgewerkt in Nederlands en Frans.

## 1.25.11
- Read-only eindafrekening toegevoegd in `Kostenbeheer`.
- Nieuwe berekening `berekenEindafrekening()` combineert definitieve Kassa-ledger, correcties, voorverkoop, zelfinbreng, zaalhuur, winkelkosten en manuele kosten.
- Budgetcontrole wordt apart getoond: budget telt niet als werkelijke opbrengst in de eindafrekening.
- Betaalcontrole toont cash/kaart/payconiq tegenover netto kassa en markeert eventuele verschillen.
- ManiFiesta- en externe ticketregistraties worden informatief als aantallen getoond, zonder financiële impact.
- Bestaande PDF's, rapporten, ledger-posting, importflow en opslag blijven ongewijzigd.
- De uitleg onder "Werking/Fonctionnement" is bijgewerkt in Nederlands en Frans.

## 1.25.10
- Correctieboekingen toegevoegd aan `Kassa Bewegingen` voor definitief geboekte financiële Kassa-ledgerregels.
- Correcties worden append-only opgeslagen onder `finance.corrections` met bedrag, reden, optionele opmerking en bronverwijzing naar de originele ledgerregel.
- Originele `finance.ledgerTransactions` blijven immutable; auditregels kunnen bewust niet gecorrigeerd worden.
- De ledgerweergave toont correcties en nettobedrag per regel, plus correctietotalen in het overzicht.
- Audittrail registreert `kassa_ledger_correction_added`.
- De uitleg onder "Werking/Fonctionnement" is bijgewerkt in Nederlands en Frans.

## 1.25.9
- `Kassa Bewegingen` is compacter gemaakt: de standaardweergave toont alleen de belangrijkste ledgerinformatie.
- Technische broninformatie zoals source file, bron, immutable en audit-only staat nu achter een `Details`-knop per ledgerregel.
- Ledgerregel-labels worden nu dynamisch vertaald op basis van `type`, zodat bestaande geboekte regels correct Nederlands/Frans tonen zonder dat de opgeslagen auditdata wordt aangepast.
- Een dubbele oude `kb_intro`-vertaling is gecorrigeerd zodat het tabblad niet langer de oude Kostenbeheer-uitleg toont.
- De uitleg onder "Werking/Fonctionnement" is bijgewerkt in Nederlands en Frans.

## 1.25.8
- Het tabblad `Kassa Bewegingen` is vervangen door een read-only ledgercontrole op `finance.ledgerTransactions`.
- De controlepagina toont definitieve totalen voor verkopen, giften, cash, kaart, Payconiq, auditregels en aantal ledgerregels.
- Er is een batchfilter toegevoegd zodat geboekte Kassa-imports apart gecontroleerd kunnen worden.
- Elke ledgerregel toont bedrag, type, batch, bronbestand, boekingsdatum, bron en immutable/audit-only status.
- Bestaande rapporten blijven ongewijzigd; dit is uitsluitend een controleweergave op de nieuwe ledger.
- De uitleg onder "Werking/Fonctionnement" is bijgewerkt in Nederlands en Frans.

## 1.25.7
- Kassa Import Engine stap 4 toegevoegd: een gecontroleerde ledger-preview kan nu eenmalig definitief geboekt worden.
- Definitieve boeking schrijft immutable regels naar `finance.ledgerTransactions` met bronverwijzingen naar importbatch, ledger-preview, exportId, source file en source entry.
- Dubbele posting wordt geblokkeerd op basis van `sourceBatchId` en batch `ledgerStatus`.
- Batch en ledger-preview krijgen na posting status `ledger_posted` / `posted`; de UI toont `Definitief geboekt`.
- Audittrail registreert `kassa_ledger_posted` met aantal ledgerregels.
- Rapportering blijft nog ongewijzigd; bestaande rapporten worden nog niet op de nieuwe ledger gebaseerd.
- De uitleg onder "Werking/Fonctionnement" is bijgewerkt in Nederlands en Frans.

## 1.25.6
- Kassa Import Engine stap 3 toegevoegd: vanuit uitgepakte importfeiten kan nu een read-only ledger-preview worden gemaakt.
- Nieuwe opslaglaag `kassaImports.ledgerPreviews` bewaart het boekingsvoorstel apart van de echte immutable ledger.
- De preview toont voorgestelde regels voor verkopen, giften, cash, kaart, Payconiq en auditinfo voor tickets/prijslijstmutaties.
- Er wordt nog niets geschreven naar `finance.ledgerTransactions`; de ledgerstatus blijft expliciet `not_posted`.
- Backward compatible: bestaande data zonder `ledgerPreviews` krijgt automatisch een lege previewlaag.
- De uitleg onder "Werking/Fonctionnement" is bijgewerkt in Nederlands en Frans.

## 1.25.5
- Kassa Import Engine stap 2 toegevoegd: gevalideerde importbatches kunnen nu worden uitgepakt naar een read-only feitenlaag onder `kassaImports.importedFacts`.
- De feitenlaag bewaart transacties, verkoopregels, betaalfeiten, ticketregistraties en prijslijstmutaties apart van de originele payload.
- De batchkaart toont nu de feitenstatus, een knop "Feiten uitpakken" en na extractie een read-only overzicht met aantallen.
- Ledger-status blijft expliciet `not_posted`; er wordt nog niets financieel geboekt of gerapporteerd.
- Backward compatible: bestaande data zonder `kassaImports.importedFacts` krijgt automatisch een lege feitenlaag.
- De uitleg onder "Werking/Fonctionnement" is bijgewerkt in Nederlands en Frans.

## 1.25.4
- Kassa Import Engine fase 1 afgerond: een geschikte Kassa-export kan veilig als immutable importbatch worden voorbereid zonder ledger-posting.
- De importbatch bewaart nu expliciet gebruiker, kassapunt, bronbestand, schema, eventinfo, exportId, aantallen transacties, ticketregistraties en prijslijstmutaties.
- De originele Kassa-exportpayload blijft read-only bewaard onder `kassaImports.files`, zodat latere validatie/verwerking altijd naar de oorspronkelijke feiten kan teruggrijpen.
- De Kassa Exports-interface toont op de batchkaart nu duidelijk bron, aantallen en `Ledger: Niet geboekt`.
- De uitleg onder "Werking/Fonctionnement" is bijgewerkt in Nederlands en Frans.

## 1.25.3
- Vrijwilligers kunnen nu expliciet aan een partner/gekoppelde persoon worden gekoppeld via `partnerId`.
- De vrijwilligerskaart toont bij gekoppelde personen een tweede mini-profielfoto bovenop de bestaande foto.
- Als een vrijwilliger geen eigen adres heeft maar de gekoppelde partner wel, gebruikt de kaart automatisch het partneradres voor weergave en Google Maps-link zonder de adresvelden te overschrijven.
- Partnerkoppeling wordt tweerichtings bijgehouden wanneer mogelijk en wordt opgeruimd bij verwijderen van een vrijwilliger.
- Backward compatible: bestaande vrijwilligers krijgen standaard geen partnerkoppeling; bestaande adressen en profielfoto's blijven ongewijzigd.
- De uitleg onder "Werking/Fonctionnement" is bijgewerkt in Nederlands en Frans.

## 1.25.2
- Het hulpvenster "Werking/Fonctionnement" volledig geactualiseerd volgens de huidige Hoofdapp en Kassa Tool-architectuur.
- De uitleg beschrijft nu voorbereiding, eventbeheer, vrijwilligers, materiaal, officiële beginprijslijst, Business Continuity, Google Drive/EventToolSync, Kassa-export ophalen, import voorbereiden en importvalidatie.
- Expliciet vermeld dat validatie nog geen ledger-posting, financiële verwerking of definitieve rapportering uitvoert.
- Tekst bijgewerkt in Nederlands en Frans.
- Geen wijziging aan data, opslag, importlogica, Google Drive-logica, Kassa-contract of rapportering.

## 1.25.1
- Regressieherstel Kassa-importvalidatie: verkoopregels uit de Kassa Tool worden nu correct gematcht op `officialArticleId`/`articleId` en pas daarna op artikelnummer.
- De validator meldt niet langer foutief "Verkoopregel zonder artikelnummer" wanneer de exportregel wel een geldige artikelreferentie bevat.
- Artikelmatch blijft backward compatible met exports die wel `articleNumber` bevatten.
- Geen wijziging aan Kassa-exportcontract, importbatches, ledger, rapportering of financiële verwerking.

## 1.25.0
- Kassa Exports uitgebreid met validatie van voorbereide importbatches.
- Voorbereide batches krijgen nu een knop "Valideer import" en een read-only validatierapport.
- Validatie controleert schemaVersion 1.0.0, eventmatch, dubbele imports/exportIds, kassa-afsluiting, transactiestructuur, transactionId-dubbels, artikelmatch met de officiële Hoofdapp-prijslijst, prijsverschillen, nieuwe/onbekende artikelen en ticketregistraties.
- De originele Kassa Tool-exportpayload blijft immutable bewaard onder `kassaImports.files`.
- Validatie schrijft alleen status en validatierapport op de importbatch plus audittrail; er gebeurt nog geen ledger-posting, rapportering of financiële verwerking.
- Business Continuity, vrijwilligers, materiaal, prijslijstexport, Google Drive-monitor en bestaande imports blijven ongewijzigd.

## 1.24.3
- Vrijwilligerskaarten tonen nu automatisch een standaardicoon wanneer er geen echte profielfoto is.
- Bij geslacht `M` wordt het man-icoon getoond, bij `V` het vrouw-icoon en bij ontbrekend/onbekend geslacht het vraagteken-icoon.
- Echte geüploade profielfoto's blijven altijd voorrang krijgen.
- De standaardiconen zijn als app-assets toegevoegd en worden offline mee gecachet.
- Geen wijziging aan vrijwilligersopslag, formulierlogica, filters, planning, backup/restore of andere modules.

## 1.24.2
- Kassa Exports toont standaard alleen nog de meest recente export per event/kassa.
- Oude exports blijven opgehaald en beschikbaar via de nieuwe knop "Oude exports tonen".
- Oude exports worden bij zichtbaar maken duidelijk gemarkeerd als "Oudere export".
- Deze wijziging is uitsluitend een UI-filter; Google Drive-data, importbatches, ledger, rapportering en actieve eventdata blijven ongewijzigd.

## 1.24.1
- Regressieherstel Kassa Exports: `Import voorbereiden` is nu actief bij exports met waarschuwingen.
- Alleen exports met rode pre-import fouten blijven geblokkeerd.
- Waarschuwingen zoals onbekende gebruiker of afwijkende maar herkenbare eventId blokkeren de voorbereidende importbatch niet meer.
- Geen wijziging aan ledger, rapportering, financiële verwerking of actieve eventdata.

## 1.24.0
- Kassa Exports uitgebreid met een veilige voorbereidende importbatch-stap.
- Een geschikte export kan nu als immutable batch worden vastgelegd onder `kassaImports.batches` en `kassaImports.files`.
- De originele Kassa Tool-exportpayload wordt gekloond bewaard voor audit en latere validatie.
- Duplicaatbescherming toegevoegd op import-sleutel en exportId; dezelfde export kan niet opnieuw voorbereid worden.
- Voorbereide batches worden read-only zichtbaar in het tabblad Kassa Exports.
- Geen ledger-posting, rapportering, financiële verwerking, transactiemutatie of actieve eventdata-overschrijving toegevoegd.

## 1.23.0
- Kassa Exports-detailweergave uitgebreid met een read-only Import Preview.
- De preview toont verwachte transacties, verkopen, giften, cash/kaart/payconiq/mix, ticketregistraties en prijslijstmutaties uit het bestaande Kassa Tool-exportcontract.
- Ruwe exportdata blijft beschikbaar onder een uitklapbare auditsectie.
- Geen import, ledger-posting, rapportering, opslagwijziging of datamodelwijziging toegevoegd.

## 1.22.5
- Gmail-compose voor terugbetalingsmails opent nu zonder vooraf ingevulde platte-tekst body.
- De Gmail-knop vult alleen ontvanger en onderwerp in, zodat de opgemaakte mail proper met `Ctrl+V` in het lege berichtvak geplakt kan worden.
- Platte-tekst kopiëren blijft beschikbaar als fallback.

## 1.22.4
- Terugbetalingsmails kregen een professionele opgemaakte HTML-versie met begroeting op basis van het actuele uur.
- Nieuwe knop "Opgemaakte mail kopiëren" kopieert vet, cursief, rood rekeningnummer, gemarkeerd totaalbedrag en nette ticketlijst naar het klembord.
- "Open in Gmail" blijft de compose openen via Edge `/u/1/`; de opgemaakte mail kan daarna in Gmail geplakt worden.
- De platte tekstmail blijft beschikbaar als fallback.

## 1.22.3
- Gmail-compose voor terugbetalingsmails opent nu via `https://mail.google.com/mail/u/1/`.
- Deze accountpositie is ingesteld voor Edge op de vaste test-pc, waar `/u/1/` overeenkomt met `jflores2000@gmail.com`.
- Ontvangers blijven eventgebonden instelbaar; bijlagen blijven losse kasticketbestanden die manueel toegevoegd worden.

## 1.22.2
- Gmail-compose voor terugbetalingsmails opent nu via `https://mail.google.com/mail/u/2/`.
- Deze accountpositie is ingesteld voor de vaste test-pc/browser waar `/u/2/` overeenkomt met `jflores2000@gmail.com`.
- Ontvangers blijven eventgebonden instelbaar; bijlagen blijven losse kasticketbestanden die manueel toegevoegd worden.

## 1.22.1
- Terugbetalingsmail-ontvangers zijn nu eventgebonden instelbaar in het tabblad Event.
- Voor de test staat standaard alleen `philippe.demeersman1970@gmail.com` als ontvanger ingevuld.
- De knop voor terugbetalingsmails opent nu Gmail Compose in de browser in plaats van het standaard mailprogramma.
- De app toont een Gmail-controlehint; bijlagen blijven losse kasticketbestanden die manueel aan Gmail worden toegevoegd.

## 1.22.0
- Terugbetalingsmails toegevoegd aan Winkelbestellingen.
- Per aankoper/vrijwilliger wordt nu een mailtekst voorbereid met vaste ontvangers, onderwerp, kopergegevens, rekeningnummer uit de vrijwilligersopmerking, ticketbestandsnamen, bedragen en totaal.
- Kastickets worden niet gezipt: elk ticket blijft als los downloadbaar bestand beschikbaar om handmatig als bijlage toe te voegen.
- Nieuwe kasticketuploads bewaren voortaan ook de originele bestandsnaam; oude tickets krijgen automatisch een veilige fallbacknaam.
- Bestaande winkelbestellingen-PDF, WhatsApp-flow, kostenberekening en opslagstructuur blijven ongewijzigd.

## 1.21.1
- Woordenboek neemt nu ook Franse materiaalnamen automatisch over als vertaling.
- Als een materiaal `naamNl` en `naamFr` heeft, wordt dit toegevoegd als `naamNl -> naamFr`.
- Bestaande ingevulde woordenboekvertalingen blijven behouden; alleen lege vertalingen worden aangevuld.

## 1.21.0
- Woordenboek groeit nu automatisch mee met de materiaallijst.
- Bestaande materiaalnamen worden bij het laden automatisch toegevoegd als Nederlandse woordenboekterm als ze nog ontbreken.
- Nieuwe en gewijzigde materialen voegen hun Nederlandse materiaalnaam automatisch toe aan het woordenboek.
- Bestaande woordenboekvertalingen worden niet overschreven en dubbele termen worden vermeden.

## 1.20.2
- Event-match in de Kassa-exportmonitor robuuster gemaakt voor gemengde Hoofdapp-eventstructuren.
- De controle vergelijkt nu actieve eventdata uit meerdere veilige bronnen: `data.event`, `data.events[]`, `eventInfo` en snapshots.
- Geschreven datums zoals `zondag 21 juni 2026` worden nu ook genormaliseerd voor vergelijking met `21-06-2026`.
- Wijziging blijft read-only: geen import, geen ledger-posting en geen verwerking toegevoegd.

## 1.20.1
- Event-match in de Kassa-exportmonitor verfijnd voor tablets die na een reset een ander eventId hebben.
- Als eventnaam en datum overeenkomen maar eventId verschilt, wordt dit nu een waarschuwing in plaats van een blokkering.
- Datums worden genormaliseerd zodat `21-06-2026` en `2026-06-21` als hetzelfde event kunnen worden herkend.
- Wijziging blijft read-only: geen import, geen ledger-posting en geen verwerking toegevoegd.

## 1.20.0
- Pre-import controlelaag toegevoegd aan de read-only Kassa-exportmonitor.
- Per export wordt nu gecontroleerd: schema, event-match, nieuwste export, kassa-status, gebruiker, kassapunt en aanwezigheid van transacties/tickets.
- Exportkaarten tonen nu een status: "Klaar voor latere import", "Waarschuwingen" of "Niet geschikt".
- Controle blijft volledig read-only: geen import batch, geen ledger-posting, geen rapportering en geen financiële verwerking.

## 1.19.1
- Kassa-exportmonitor markeert nu per event/tablet de meest recente export met een rode omlijning.
- Meest recente export wordt bepaald op basis van `exportedAt`, daarna timestamp in de bestandsnaam en als fallback Google Drive `modifiedTime`.
- Wijziging is uitsluitend visueel/read-only: geen import, geen ledger-posting en geen verwerking toegevoegd.

## 1.19.0
- Read-only Kassa-exportmonitor toegevoegd aan de Hoofdapp.
- Nieuwe tab "Kassa Exports" leest `kassa-export-*.json` uit de bestaande Google Drive-map EventToolSync.
- Exports worden als overzichtskaarten getoond met kassapunt, gebruiker, event, exporttijd, transacties en ticketregistraties.
- Detailweergave blijft strikt alleen-lezen: nog geen import, ledger-posting, rapportboeking of financiële verwerking.
- Bestaande Google Drive-koppeling en publicatie van de officiële beginprijslijst blijven ongewijzigd.

## 1.18.0
- Google Drive Sync fase 2A toegevoegd: de Hoofdapp kan de officiële beginprijslijst publiceren naar `EventToolSync`.
- Nieuwe knop in het tabblad Prijslijst: "Publiceer naar Google Drive".
- Publicatie gebruikt exact dezelfde gecontroleerde Kassa Tool-beginprijslijst als de bestaande JSON-export.
- Het vaste Drive-bestand is `kassa-tool-official-start-pricelist.json`, bedoeld als latere bron voor de Kassa Tool op tablet.
- Geen Kassa Tool-import, transactieverwerking, ledger-posting, rapportering, backup/restore-wijziging of datamodelwijziging toegevoegd.

## 1.17.1
- Google Drive-paneel verfijnd: Drive-map-ID en accountnaam worden niet meer zichtbaar getoond op het Dashboard.
- Verbinden/herverbinden volgt nu dezelfde UX als de Health app: bij een bewaarde koppeling wordt opnieuw verbinden zonder consent-scherm geprobeerd.
- Geen wijziging aan Drive-map, sync-testbestand, prijslijstdata, backup/restore, Kassa Tool-export, ledger of datamodel.

## 1.17.0
- Google Drive-basislaag toegevoegd aan de Hoofdapp met zichtbaar dashboardpaneel voor EventToolSync.
- Nieuwe Drive-map ingesteld: `EventToolSync` met folder-ID `1annD2FEIq0uRSDtGAHQ4NiDSIUdN6gzi`.
- Toegevoegd: verbinden, herverbinden, ontkoppelen, Drive-map openen en sync-test via `eventtool-connection-test.json`.
- De basislaag gebruikt dezelfde Google Identity Services-aanpak als de Health app, maar met eigen `eventtool_gdrive_*` localStorage-sleutels.
- Nog geen prijslijst-publicatie, Kassa Tool-import, transactieverwerking, ledger-posting of datamodelwijziging toegevoegd.

## 1.16.1
- Kassa Tool-beginprijslijstexport technisch verfijnd en duidelijker vastgelegd als frozen contract.
- Exportbestand bevat nu genormaliseerde prijzen met bedrag, centen, valuta en displaywaarde.
- Categorieën krijgen stabiele categoryId's en artikelen krijgen een duidelijk exportmodel met categoryId, categoryName, articleId, articleNumber, active en sortOrder.
- Exportmetadata bevat nu contractStatus, exportedByAppVersion en totalen voor categorieën/artikelen.
- Prijslijststatus-tekst bijgewerkt: export bestaat nu, maar er is nog geen synchronisatie, import of ledger-logica.

## 1.16.0
- Woordenboek uitgebreid met echte boeknavigatie: maximaal 10 woorden per blad en vorige/volgende-pijlen.
- Nederlandse termen zijn nu ook rechtstreeks bewerkbaar; bij wijzigen wordt de term opnieuw alfabetisch gesorteerd.
- Dubbele of lege Nederlandse termen worden geblokkeerd om woordenboekdata correct te houden.
- Boekweergave visueel versterkt met paginanummers, subtiele bladanimatie en duidelijkere boekpagina's.
- Geen wijziging aan opslagstructuur, backup/restore, Event Lifecycle, Kassa Tool-export, affiche, Business Continuity of PDF-functionaliteit.

## 1.15.9
- Woordenboekweergave verfijnd: alfabetische scheidingsletters staan nu in een subtiele lichtgroene ovaal.
- Alleen de visuele boekweergave is aangepast; woordenboekdata, toevoegen, zoeken, aanpassen, verwijderen en standaardlijst herstellen blijven ongewijzigd.

## 1.15.8
- Prijslijst-tab uitgebreid met een gecontroleerde JSON-export "Export voor Kassa Tool".
- De export bevat uitsluitend de officiële beginprijslijst uit de Hoofdapp met eventgegevens, categorieën, artikelen, prijzen, actief/inactief-status en volgorde.
- De exportknop is alleen actief wanneer de Kassa Tool-voorbereidingscontrole geen aandachtspunten meldt.
- EventId en technische schema-informatie blijven intern in het exportbestand, maar worden niet meer zichtbaar als technische velden in de Prijslijst-tab.
- Geen import, synchronisatie, ledger-posting, opslagwijziging of datamodelwijziging toegevoegd.

## 1.15.7
- Prijslijst-tab uitgebreid met een read-only "Kassa Tool voorbereiding"-statuskaart.
- De statuskaart controleert EventId, categorieën, artikelen, actieve/inactieve artikelen, lege artikelnamen, ontbrekende categorieën, ontbrekende/ongeldige prijzen en dubbele artikelnummers.
- Officiële beginprijslijst-snapshot bevat nu ook eventId, eventnaam en eventdatum als voorbereiding op latere Kassa Tool-koppeling.
- Geen export, sync, import, ledger-posting of transactielogica toegevoegd; Hoofdapp blijft eigenaar van de officiële beginprijslijst.

## 1.15.6
- Winkelbestellingen-PDF toont nu per kasticket/aankoper ook de rekeninginfo van de vrijwilliger.
- De rekeninginfo wordt gelezen uit het bestaande vrijwilligersveld `opmerking`; er is geen datamodel- of opslagwijziging.
- Alleen de PDF-weergave van Winkelbestellingen is aangepast; kasticketfoto's, bedragen, kostenbeheer, Event Lifecycle, Kassa Tool-logica, affiche, weerfunctie, backup/restore en Business Continuity blijven ongewijzigd.

## 1.15.5
- PDF-export van Winkelbestellingen verbeterd: kasticketfoto's worden veel groter en gecentreerd weergegeven.
- Nieuwe kasticketfoto-uploads worden op hogere resolutie en met betere JPEG-kwaliteit bewaard.
- Alleen de kasticketfoto-weergave in de Winkelbestellingen-PDF is aangepast; bedragen, groepering, WhatsApp-tekst, kostenbeheer, Event Lifecycle, Kassa Tool-logica, affiche, weerfunctie, backup/restore en Business Continuity blijven ongewijzigd.

## 1.15.4
- Woordenboek-tab visueel omgezet naar een open-boekweergave met twee pagina's.
- Termen worden alfabetisch gegroepeerd op Nederlandse beginletter.
- Toevoegen, zoeken, inline aanpassen, verwijderen en standaardlijst herstellen blijven behouden.
- Oud ingebed auto-recover backup-script uitgeschakeld omdat dit de app-start kon blokkeren en nooit actieve data mag overschrijven.
- Geen wijzigingen aan woordenboekdata, Event Lifecycle, Kassa Tool-logica, weerscontrole, affiche, Excel, PDF, backup/restore of Business Continuity.

## 1.15.3
- Woordenboek-tab visueel vernieuwd naar een professionelere terminologiebeheerder.
- Titelkaart, termteller, zoekbalk, invoerkaart en compacte tabelweergave toegevoegd zonder datamodelwijziging.
- Bestaande woordenboekfuncties voor zoeken, toevoegen, bewerken, verwijderen en standaardlijst herstellen behouden.
- Geen wijzigingen aan Event Lifecycle, Kassa Tool-logica, weerscontrole, affiche, Excel, PDF, backup/restore of Business Continuity.

## 1.15.2
- Laptopheader visueel rustiger en meer gecentreerd gemaakt.
- Eventidentiteit, toolbar en tabnavigatie in subtiele aparte headerblokken geplaatst.
- Toolbar over de beschikbare laptopbreedte gegroepeerd zonder knoppen te dupliceren of te verwijderen.
- Actieve tab duidelijker vormgegeven als rustige badge/knop.
- Geen dataflow-, lifecycle-, weer-, affiche-, Business Continuity-, Excel-, PDF-, backup/restore- of Kassa Tool-wijzigingen.

## 1.15.1
- Laptopinterface visueel rustiger gemaakt zonder functionele of dataflow-wijzigingen.
- Header, toolbar, horizontale tabs, dashboardkaarten en meldingen subtiel verfijnd.
- Weerkaart visueel rustiger gemaakt; bestaande weerscontrole, weerdataflow en refreshgedrag behouden.
- Geen wijzigingen aan Event Lifecycle, Historiek / Archief, Business Continuity, Excel, PDF, backup/restore of Kassa Tool-logica.

## 1.15.0
- Historiek-tab uitgebreid naar read-only `Historiek / Archief`.
- Afgesloten events uit `events[]` en oude records uit `eventHistory` worden gecombineerd zonder eventselector of event-wissel.
- Snapshotdetails tonen alleen samenvattingen, kleine affichepreview en operationele aantallen.
- Geen wijzigingen aan Excel-structuur, ledger, import engine of bestaande eventgebonden modules.

## 1.14.3
- Regressiefix: Event Lifecycle-sync bewaart bestaande event-affiches, watermerken en bestandsnamen wanneer de compatibiliteitsmirror lege waarden bevat.
- Bewust verwijderen via de bestaande knop `Affiche verwijderen` blijft ondersteund.
- Extra controle toegevoegd op backward compatibility voor `data.event` en `events[].info`.

## 1.14.2
- Versieweergave in de header extra zichtbaar gemaakt als duidelijke badge tussen de headerknoppen.

## 1.14.1
- Applicatieversie zichtbaar gemaakt in de header, zodat meteen gecontroleerd kan worden welke build actief geladen is.
- Service worker cacheversie mee verhoogd zodat de zichtbare versie betrouwbaar vernieuwt na publicatie.

## 1.14.0
- Event Lifecycle fase 2 voorbereid met een snapshot van het actieve event bij `Nieuw evenement`, vóór de werkruimte wordt gereset.
- Afgesloten events bewaren voortaan eventinfo, affichevelden, financiële samenvatting, taken-/materiaalstaat, winkelbestellingen, kastickets, kostenbeheer, voorverkoop, prijslijst en relevante Business Continuity-data in `events[].snapshot`.
- Nieuwe `eventHistory`-records worden gekoppeld aan `eventId` en bewaren extra samenvattingsvelden zoals voorverkoop, zelfinbreng en totale inkomsten.
- Er is geen eventselector, archief-UI of zichtbare workflowwijziging toegevoegd.

## 1.13.0
- Event Lifecycle basislaag voorbereid zonder zichtbare UI-wijzigingen.
- `events[]` en `activeEventId` worden compatibel toegevoegd via normalisatie.
- `data.event` blijft in deze fase de operationele compatibiliteitsmirror.
- Oude backups zonder event lifecycle en nieuwe backups met `events[]` worden veilig ondersteund.

## 1.12.2
- Veldnamen op vrijwilligerskaarten duidelijker gemaakt met donkerdere, zwaardere labeltypografie.
- Event-tabblad uitgebreid met een bewaarde affiche/flyer per evenement in het blok Basisinfo.
- Affiches worden bij upload verkleind en krijgen automatisch een zachte watermerkvariant voor rapport-PDF's.
- Dagoverzicht-, Winkelbestellingen- en Kostenbeheer-PDF's tonen de event-affiche voortaan als watermerk op elke pagina.
- Event-affichevelden zijn backward compatible toegevoegd aan normalisatie, nieuw evenement en Excel-template/export/import.

## 1.12.1
- `Zonder oorsprong` is voortaan een vaste systeem-oorsprong in Oorsprongsbeheer met uploadbaar logo.
- De systeem-oorsprong kan niet verwijderd of hernoemd worden; bestaande materialen zonder oorsprong blijven technisch leeg gekoppeld.
- Materiaalblokken zonder oorsprong gebruiken voortaan het logo van de systeem-oorsprong wanneer dat beschikbaar is.
- Alle app-kaarten gebruiken centraal dezelfde achtergrondkleur `#99AD7A` met een subtiele linkse band in `#DE3E3E`.
- Excel-template, export en import bewaren de systeemmarkering van oorsprongen zodat back-up en restore consistent blijven.

## 1.12.0
- Oorsprongsbeheer toegevoegd als nieuw centraal beheer-tabblad voor alle niet-winkel-oorsprongen.
- Bestaande oorsprongen uit de oude oorspronglijst worden automatisch als kaarten gemigreerd, zonder materiaalgegevens te wijzigen.
- Per oorsprong kan nu een logo worden opgeladen, vervangen of verwijderd via dezelfde compacte kaartlogica als Winkelgegevens.
- Materiaal blijft gekoppeld via het bestaande veld `oorsprong`, maar toont voortaan het logo uit Oorsprongsbeheer in de oorsprongsblokken.
- De oude optie om oorsprongen rechtstreeks vanuit Materiaal toe te voegen is verwijderd; oorsprongen worden voortaan centraal beheerd.
- Excel-export, materiaalexport, template en import ondersteunen de nieuwe `Oorsprongen`-sheet zodat logo's in back-ups en restores behouden blijven.
- `Winkel_Magasin` blijft gereserveerd voor winkelmateriaal en blijft de bestaande winkellogo's uit Winkelgegevens gebruiken.

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
