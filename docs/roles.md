---
id: roles
title: Roller
---

## Innledning

Eiendomsappen har tre forskjellige roller en bruker kan være: _Utleier_, _Leietaker_ og _Leverandør_. Hver av disse rollene har ulik tilgang til ulik informasjon i systemet, og kan utføre forskjellige handlinger.

En bruker kan også ha taggene _Superbruker_ og _Driftsansvarlig_ som gir dem enda flere muligheter. Se beskrivelsen av de under.

### Utleier
Utleiere er brukere som administrerer eiendommene og alle brukerne på eiendommene. Når man oppretter en eiendom blir man automatisk satt som en utleier.

### Leietaker
Leietakere er brukere som en utleier har invitert til en leietaker-enhet på en eiendom. Leietakere får ikke tilgang til informasjon om andre leietaker-enheter på en eiendom.

### Leverandør
Leverandører er brukere som er medlemmer av en leverandørgruppe. Leverandører får kun tilgang til den grunnleggende eiendomsinformasjonen til eiendommene som en utleier har gitt dem tilgang til, men har også mulighet til å rapportere avvik. En leverandør får også tilgang til avvik som en utleier har delegert til en av leverandørgruppene deres.

> Roller er unike for hver eiendom, som betyr at samme bruker kan være utleier i en eiendom og leietaker/leverandør i en annen



---


## Tagger
Brukere kan også bli tildelt taggene _Superbruker_ og _Driftsansvarlig_, uansett om de er utleiere, leietakere eller leverandører. Disse taggene er unike for hver eiendom brukeren er medlem av, som betyr at man for eksempel kan være superbruker på Eiendom A, men ikke Eiendom B.

> Det er kun utleiere som er superbrukere som kan tildele tagger til brukere.<br>
  Sjekk ut [Administrere brukere](landlord_properties#administrere-brukere) for å se hvordan man tildeler tagger.


### Superbruker
Når man oppretter en eiendom blir man automatisk tildelt taggen superbruker. En superbruker får tilgang til mer [eiendomsinformasjon](property_information) og [handlinger](property_actions) enn vanlige brukere.

### Driftsansvarlig
Driftsansvarlige får tilgang til alle avvik på eiendommene brukeren har blitt tildelt taggen, og kan også delegere disse avvikene til leverandørgrupper.
