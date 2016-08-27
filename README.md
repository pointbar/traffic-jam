---
title: TP - Traffic Jam
description: Construire une application pour aider les urbanistes de l'atoll de PomPomGalli à gérer la circulation des véhicules et des piétons.
image_url: https://github.com/Amanda-Martinez/Friendly-Places/blob/master/fiches/img/kata.jpg?raw=true
---

# Traffic Jam

## Contexte
La ville de **Pluto** décide de s'équiper d'une application Web pour gérer ses feux tricolores. Le produit devrait permettre de limiter les embouteillages en optimisant la circulation des véhicules, et de favoriser le confort des piétons.

## Backlog

### User Story 4 - Voir le feux orange avant le passage au rouge

En tant que conducteur je souhaite être averti que le feux va passer au rouge afin de ne pas freiner trop brusquement.

- doit permettre d'ajouter un statut orange avant le passage au rouge
- doit rester 10" au orange avant de passer au rouge

Notes :
- Ajouter une **méthode changeToOrange()** dans la classe **Feux**
- Regarder l'utilisation de **setTimer()** et **setInterval()** pour résoudre le problème des 10"
- Appeler la nouvelle méthode dans **changeToRed()**
- Tester la méthode
- Notions : class, new, localStorage, .filter(), .map()



