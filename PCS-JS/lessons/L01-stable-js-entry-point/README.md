# L01 — Stable JavaScript Entry Point

## Cíl lekce

Bezpečně připojit JavaScript k HTML dokumentu.

V L01 JavaScript **ještě neřídí aplikaci**. Pouze se stabilně připojí — na správném místě, správným způsobem, ve správný čas. Cílem je zajistit, že JS vstoupí do dokumentu předvídatelně a bez vedlejších efektů.

---

## Proč začínáme tady

Mnoho výukových materiálů začíná JavaScriptem hned — `document.getElementById`, `alert`, `console.log`. Ale předtím, než JS cokoliv dělá, musí být správně připojený.

Špatně připojený JS je zdrojem chyb, které jsou těžko pochopitelné na začátku:
- skript běží před tím, než existuje DOM
- skript blokuje načítání stránky
- skript ovlivňuje výkon bez viditelného důvodu

L01 tyto problémy eliminuje hned na začátku.

---

## Plán commitů

| Commit | Co přibývá                                                                   |
|--------|------------------------------------------------------------------------------|
| C1     | Připojit JS soubor k HTML pomocí `defer`, definovat vstupní bod              |
| C2     | Přidat stabilní DOM reference map — pojmenovat prvky, se kterými JS pracuje  |

C2 ještě nepřidává žádné chování. Pouze definuje, které prvky JS rozpoznává — přes `data-js` atributy a centrální objekt `dom`. Bez tohoto kroku by každý budoucí commit pracoval se selektory rozptýlenými po celém kódu.

Další commity budou přidány v průběhu vývoje lekce.

---

## Poznámky

- Každý commit je samostatně funkční snapshot
- JS v L01 neprovádí žádné viditelné změny v UI
- Struktura JS je připravená pro rozšíření v L02+
