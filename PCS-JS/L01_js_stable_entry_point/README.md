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

| Commit | Co přibývá                                                              |
|--------|-------------------------------------------------------------------------|
| C1     | Připojit JS soubor k HTML pomocí `defer`, definovat vstupní bod         |
| C2     | Strukturovat stabilní inicializační tok                                 |
| C3     | Přidat jednoduchý application root guard                                |
| C4     | Uzavřít lekci finálním entry-point snapshotem                           |

C2 ještě nevybírá konkrétní prvky z DOMu. Pouze zpřehledňuje start aplikace tak, aby bylo jasné, kde začíná inicializace a kde budou v dalších lekcích přibývat další vrstvy.

C3 přidává pouze kontrolu kořenového prvku aplikace. Nejde ještě o plnou DOM selection. JavaScript si pouze ověří, že stránka obsahuje aplikační root, a pokud ne, bezpečně se ukončí bez chyby.

DOM selection patří do L02.
Event listenery patří do L03.
State patří do L04.

---

## Poznámky

- Každý commit je samostatně funkční snapshot
- JS v L01 neprovádí žádné viditelné změny v UI
- Struktura JS je připravená pro rozšíření v L02+

---

## Výsledek L01

L01 končí ve chvíli, kdy JavaScript:
- je připojen pomocí `defer`
- čeká na připravený DOM
- má čitelný inicializační tok
- umí bezpečně ověřit kořen aplikace
- nepracuje ještě s konkrétními formulářovými poli
- neobsahuje event listenery, state ani rendering

---

## Další lekce

L02 naváže plnou DOM selection vrstvou. Teprve tam budou přidány `data-js` atributy a centrální mapa prvků, se kterými bude aplikace pracovat.
