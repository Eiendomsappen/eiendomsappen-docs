---
id: integrations_unloc
title: Unloc
---

Unloc utvikler en programvare som kobler sammen ulike digitale låser og gir personer tilgang til å åpne disse låsene ved hjelp av digitale nøkler. Det betyr at du kan låse opp dører fra mobilen din, uten at du trenger å ta med fysiske nøkler.

Integrasjonen mellom Eiendomsappen og Unloc åpner opp for at man kan administrere hvilke leietakere som har tilgang til byggene man administrerer på Eiendomsappen, samt gir mulighet for å fjerne tilgang når de avslutter leieforholdet. I tillegg, kan man enkelt dele nøkler til leverandører som utfører arbeid på avvik.

Innhold på denne siden:
- [Bruke integrasjonen](#bruke-integrasjonen)
- [Sette opp integrasjonen](#sette-opp-integrasjonen)

---

## Bruke integrasjonen
For å kunne utføre handlingene beskrevet her i _Bruke integrasjonen_ tar vi utgangspunkt i at du allerede har satt den opp. Sjekk ut [Sette opp integrasjonen](#sette-opp-integrasjonen) for å lære hvordan du gjør det.


### Dele nøkler
Når du deler nøkler vil personen få nøkler i sin Unloc app. Dersom personen ikke har appen fra før av vil vedkommende få en melding som forteller hvordan man kommer i gang.

<!--DOCUSAURUS_CODE_TABS-->
<!--Web-->
1. Logg inn på [Eiendomsappen.com](https://eiendomsappen.com/dashboard) og velg **Låser** i sidemenyen
1. Trykk på Låsholderen som låsen tilhører i menyen øverst
1. Finn brukeren som du ønsker å gi en nøkkel til
1. Skriv inn et telefonnummer i **Telefonnummer**-kolonnen dersom personen ikke har et nummer
1. Trykk på **Gi tilgang** i **Handlinger**-kolonnen
<!--Mobil-->
Det er ikke mulig å dele nøkler fra mobil
<!--END_DOCUSAURUS_CODE_TABS-->



---

## Sette opp integrasjonen
Prosessen med å sette opp Unloc-integrasjonen er dokumentert i systemet, men under finner du en mer detaljert guide. Man kan kun sette opp integrasjonen fra Web.

> For å kunne sette opp dine låser, må du først ha montert disse og knyttet de til en Danalock-konto.<br>Om du ikke har tilgang til Danalock-kontoen, tar du kontakt med din installasjonspartner.

### Steg 1. Opprett en låseholder
En låseholder kobler alle låsene dine til et selskap. Det er derfor kun nødvendig med én låseholder, selv om låsene er montert på tvers av eiendommer.

<!--DOCUSAURUS_CODE_TABS-->
<!--Web-->
1. Logg inn på [Eiendomsappen.com](https://eiendomsappen.com/dashboard) og velg **Låser** i sidemenyen
1. Trykk på **Administrer** i menyen øverst
1. Under _1. Opprett en låseholder_, trykk på **Opprett en låseholder**
1. Fyll inn et navn, landskode, organisasjonsnummer og eventuelt org.nr. suffiks.<br>For en beskrivelse av hvert felt, les under.
1. Trykk på **Opprett** og vent på at låseholderen opprettes
<!--Mobil-->
Det er ikke mulig å sette opp denne integrasjonen fra mobil
<!--END_DOCUSAURUS_CODE_TABS-->

| Felt | Beskrivelse|
|------|------------|
| _Navn_ | Navnet på låseholderen. Vi anbefaler selskapssnavnet ditt siden dere vil ha samme låseholder på tvers av bygg. |
| _Landskode_	| [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) Landskode. Norge er NO. |
| _Organisasjonsnummer_ | Selskapets organisasjonsnummer. |
| _Org.nr. suffiks_ | Frivillig ID dersom du har flere låseholder for samme organisasjonsnummer. |


### Steg 2. Opprett en leverandørforbindelse
En leverandørforbindelse kobler låsene fra en av låsleverandørene våre (Danalock etc.) til din låseholder.

<!--DOCUSAURUS_CODE_TABS-->
<!--Web-->
1. Under _2. Opprett en leverandørforbindelse_, trykk på **Koble til Danalock**
1. Velg hvilken låseholder du ønsker å koble låsene til
1. Skriv inn e-posten og passordet til din Danalock-konto og trykk **Koble til**
<!--Mobil-->
Det er ikke mulig å sette opp denne integrasjonen fra mobil
<!--END_DOCUSAURUS_CODE_TABS-->

### Steg 3. Oppdater dine låser
Etter at du legger til nye låser på en av leverandørene sine plattformer, må disse låsene oppdateres i Eiendomsappen.

<!--DOCUSAURUS_CODE_TABS-->
<!--Web-->
1. Under _3. Oppdater dine låser_, trykk på **Oppdater låser**
<!--Mobil-->
Det er ikke mulig å sette opp denne integrasjonen fra mobil
<!--END_DOCUSAURUS_CODE_TABS-->

