# L02 — DOM Selection & Meaning

## Cíl lekce
Bezpečně vybrat elementy z DOMu pomocí sémantických `data-js` atributů a zajistit jejich přítomnost (guarding) před spuštěním aplikace.

---

## Proč data-js
Pro výběr elementů v JavaScriptu nepoužíváme CSS třídy (vzhled) ani obecné tagy.
- **Separace zájmů:** CSS třídy určují design, `data-js` definuje kontrakt pro chování.
- **Bezpečný refaktoring:** Vzhled lze měnit bez obav z rozbití JavaScriptu.
- **Čitelnost:** Z HTML je ihned jasné, které prvky JavaScript ovládá.

---

## Plán commitů
| Commit | Co přibývá |
|--------|------------|
| C1     | HTML s `data-js` atributy |
| C2     | Výběr a mapa DOM referencí v JS |
| C3     | Bezpečnostní validity guard v JS |
| C4     | Dokumentace pravidel výběru prvků z DOMu |

---

## Hranice lekce
Lekce L02 explicitně neobsahuje:
- **Žádné interakční event listenery** (click, input, change, submit). Povolen je pouze bootstrapovací `DOMContentLoaded` z L01.
- **Žádný stav aplikace (State)**.
- **Žádnou validaci formulářů**.
- **Žádné dynamické vykreslování (Rendering)**.
- **Žádné asynchronní operace ani API**.

**Události a zachycení záměru uživatele (Events & User Intent) startují v lekci L03.**

---

## Výsledek
Na konci lekce má aplikace:
- Označené elementy v HTML přes `data-js`.
- Centralizované reference v JS přes `getDomReferences`.
- Bezpečnostní pojistku `isDomValid`, která zastaví inicializaci při chybějícím elementu.
