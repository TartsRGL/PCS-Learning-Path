# PCS-JS — Strategie výukového bloku

## Princip

PCS-JS neučí JavaScript jako sbírku syntaktických pravidel. Učí JavaScript jako **rozšíření živé HTML/CSS struktury** o chování, stav a interakci.

Každá lekce odpovídá na jednu konkrétní otázku:
> „Proč teď JavaScript? Co přidává, co HTML a CSS nedokáží?"

---

## Jedna rostoucí mini aplikace

PCS-JS staví od první do poslední lekce **jednu aplikaci** — projektový discovery průvodce. Uživatel v ní postupně pojmenovává a promýšlí svůj projekt.

Aplikace v L01 je prostý HTML formulář s připojeným JS souborem.  
Aplikace v L08 je plně interaktivní průvodce s asynchronní logikou a kompozicí komponent.

Každý commit je **samostatně funkční snapshot**. Ne rozbitý mezistav, ne prázdná kostra — vždy spustitelný celek.

---

## Pravidla commitů

- **Max. 6 commitů na lekci**
- Každý commit obsahuje HTML snapshot + JS snapshot
- Každý snapshot musí být **samostatně funkční** (lze otevřít v prohlížeči a aplikace dává smysl)
- Commit message popisuje, co bylo přidáno — ne jak
- Commit nesmí zanechat aplikaci v nefunkčním stavu

---

## Vztah JS k HTML

- **JS nesmí opravovat špatné HTML.** Pokud HTML potřebuje JavaScript, aby dávalo smysl, je HTML špatně navržené.
- **JS přidává pouze:**
  - chování (co se stane po akci uživatele)
  - stav (co si aplikace pamatuje)
  - interakci (jak aplikace reaguje na uživatele v čase)

---

## Lekce a jejich odpovědnost

| Lekce | Zodpovídá za                              |
|-------|-------------------------------------------|
| L01   | Bezpečný vstupní bod JS do HTML           |
| L02   | Výběr DOM elementů podle sémantiky        |
| L03   | Zachycení záměru uživatele přes eventy    |
| L04   | Uchování a změna stavu aplikace           |
| L05   | Validace vstupů a zpětná vazba uživateli  |
| L06   | Vykreslení dat do struktury               |
| L07   | Asynchronní logika a komunikace s API     |
| L08   | Složení celku z jednotlivých schopností   |

---

## Co PCS-JS není

- Není kurz Node.js, frameworků ani toolchainů
- Není seznam JS metod k zapamatování
- Není náhrada za špatně strukturované HTML
- Není sbírka izolovaných cvičení bez kontextu
