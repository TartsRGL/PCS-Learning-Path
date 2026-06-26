# L03 — Events & User Intent

## Cíl lekce
Rozpoznat záměr uživatele (user intent) zachycením a zpracováním browser událostí. Lekce se zaměřuje na zachycení odeslání formuláře (submit intent) a sledování změn v polích formuláře (input intent) s využitím delegace událostí a sémantických data-js značek.

---

## Proč delegace událostí (Event Delegation)
Místo navěšování posluchačů na každé jednotlivé pole formuláře registrujeme jeden společný posluchač na kořenovém elementu `<form>`.
- **Méně listenerů:** Jeden listener na formuláři obsluhuje události ze všech discovery polí.
- **Jednodušší správa:** Jeden bod pro zachycení událostí z více souvisejících elementů.
- **Stabilní vazba:** Využíváme vlastnosti `event.target` k bezpečné identifikaci konkrétního prvku, který událost vyvolal.

---

## Plán commitů
| Commit | Co přibývá |
|--------|------------|
| C1     | Zachycení odeslání formuláře (submit) a zabránění reloadu stránky. |
| C2     | Delegovaný poslech na událost `input` nad celým formulářem a filtrace cílových discovery polí přes `isDiscoveryField`. |
| C3     | Identifikace konkrétního upravovaného discovery pole (`fieldIntent`) s pomocí pomocné funkce `getDiscoveryFieldIntent`. |
| C4     | Shrnutí a dokumentace pravidel pro zachycení uživatelského záměru. |

---

## Hranice lekce
Lekce L03 se striktně drží pouze zachycení záměru (intent) a explicitně neobsahuje:
- **Žádné čtení hodnot z polí (`field.value`)** – nezajímá nás aktuální text, pouze to, který typ pole uživatel upravuje.
- **Žádný stav aplikace (State)**.
- **Žádnou validaci obsahu formuláře**.
- **Žádné renderování výstupů či manipulaci s DOMem**.
- **Žádné logování do konzole (console.log)**.
- **Žádné stylování (CSS)**.

---

## Jak otevřít a otestovat L03_C4.html
1. Otevřete soubor `PCS-JS/L03_js_events_user_intent/L03_C4.html` přímo ve webovém prohlížeči.
2. Otevřete Vývojářské nástroje (F12) a přejděte na záložku **Sources / Zdroje**.
3. Najděte soubor `L03_C4.js` a vložte breakpoint dovnitř funkce `handleFormInput(event)` bezprostředně po přiřazení proměnné `fieldIntent`.
4. Pište do jednotlivých vstupních polí formuláře:
   - Ověřte, že se breakpoint aktivuje.
   - Ověřte, že se hodnota lokální proměnné `fieldIntent` mění podle upravovaného pole a odpovídá jeho `data-js` atributu (např. `"project-name"`, `"project-goal"`, atd.).
5. Klikněte na tlačítko "Uložit odpovědi" (odeslání formuláře):
   - Ověřte, že nedojde k reloadu stránky a zadané texty v polích zůstanou vyplněné.
   - Konzole prohlížeče musí zůstat čistá bez jakýchkoliv chyb.
