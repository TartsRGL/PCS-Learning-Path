# Plán migrace PCS projektů do monorepo struktury

## Cílová struktura
Nové monorepo `PCS-Learning-Path` bude mít následující strukturu adresářů:

```text
PCS-Learning-Path/
  ├── PCS-HTML/
  ├── PCS-CSS/
  ├── PCS-JS/
  ├── PCS-APP/
  ├── PCS-FAPP/
  ├── context/
  │   └── pcs-monorepo-migration-plan.md
  └── README.md
```

## Důvod použití git subtree
`git subtree` se používá namísto běžného copy/paste nebo `git submodule` proto, že:
1. **Zachování historie:** Přenáší kompletní historii commitů ze zdrojových repozitářů přímo do nového repozitáře. To usnadňuje sledování toho, kdo, kdy a proč dělal jaké změny.
2. **Jednoduchost pro vývojáře:** Na rozdíl od submodulů se zdrojový kód stává pevnou součástí nového repozitáře. Vývojáři si nemusí pamatovat speciální příkazy pro inicializaci a aktualizaci submodulů po naklonování repozitáře.
3. **Izolace importů:** Každý projekt je importován do vlastního podadresáře jedním slučovacím (merge) commitem bez porušení ostatních souborů.

## Seznam zdrojových repozitářů
- `https://github.com/TartsRGL/PCS-HTML.git`
- `https://github.com/TartsRGL/PCS-CSS.git`
- `https://github.com/TartsRGL/PCS-JS.git`
- `https://github.com/TartsRGL/PCS-APP.git`
- `https://github.com/TartsRGL/PCS-FAPP.git`

## Doporučené pořadí importu
Import by měl probíhat v chronologickém a logickém pořadí, v jakém na sebe kurzy navazují. Tím bude zachována logická posloupnost i v git logu nového repozitáře:
1. PCS-HTML
2. PCS-CSS
3. PCS-JS
4. PCS-APP
5. PCS-FAPP

## Přesné příkazy pro migraci

### 1. Inicializace monorepo (pokud ještě neexistuje)
Pro přidání subtree je nezbytné mít v repozitáři alespoň jeden commit.

```powershell
# Vytvoření adresáře a inicializace git repozitáře
mkdir PCS-Learning-Path
cd PCS-Learning-Path
git init

# Vytvoření výchozího README a složky context
mkdir context
echo "# PCS Learning Path" > README.md

# (Předpokládá se, že v tuto chvíli zde existuje i tento plán v context/pcs-monorepo-migration-plan.md)
git add .
git commit -m "docs: plan PCS monorepo migration with subtree history"
```

### 2. Přidání vzdálených repozitářů (remotes)
```powershell
git remote add pcs-html https://github.com/TartsRGL/PCS-HTML.git
git remote add pcs-css https://github.com/TartsRGL/PCS-CSS.git
git remote add pcs-js https://github.com/TartsRGL/PCS-JS.git
git remote add pcs-app https://github.com/TartsRGL/PCS-APP.git
git remote add pcs-fapp https://github.com/TartsRGL/PCS-FAPP.git

# Stažení metadat a historie ze všech repozitářů najednou
git fetch --all
```

### 3. Import projektů pomocí git subtree
Postupně spusťte následující příkazy. Každý příkaz vytvoří nový adresář a vloží do něj obsah příslušného repozitáře i s jeho historií.

*(Poznámka: Pokud některý z repozitářů používá jako hlavní větev `master` namísto `main`, nahraďte slovo `main` za `master` v příslušném příkazu)*

```powershell
# 1. HTML
git subtree add --prefix=PCS-HTML pcs-html main

# 2. CSS
git subtree add --prefix=PCS-CSS pcs-css main

# 3. JS
git subtree add --prefix=PCS-JS pcs-js main

# 4. APP
git subtree add --prefix=PCS-APP pcs-app main

# 5. FAPP
git subtree add --prefix=PCS-FAPP pcs-fapp main
```

## Kontrolní příkazy po každém importu
Po každém z výše uvedených `git subtree add` příkazů zkontrolujte, zda byla operace úspěšná:

```powershell
# Kontrola existence a obsahu adresáře (např. PCS-HTML)
Get-ChildItem 

# Kontrola historie commitů - ověření, že se přidala historie a vytvořil merge commit
git log --oneline --graph -n 10

# Kontrola stavu pracovního adresáře (měl by být čistý, nic k commitnutí)
git status
```

## Rizika migrace
- **Konflikty při slučování:** Ačkoliv je kód v izolovaném podadresáři, v případě specifické git historie na straně zdrojových repozitářů může `subtree add` narazit na konflikt (např. s nekompatibilními merge stavy).
- **Zvětšení velikosti repozitáře:** Monorepo naroste na velikosti, jelikož se do něj zkopíruje kompletní historie z 5 různých repozitářů, včetně případných velkých souborů vložených v minulosti.
- **Rozbité relativní cesty:** Pokud projekty uvnitř zdrojových kódů (např. v HTML, JS nebo CSS) odkazovaly absolutně (od kořene `/`) místo relativně, tyto cesty přestanou po přesunutí do podadresáře (např. `/PCS-HTML/`) fungovat a budou vyžadovat refaktoring.
- **Názvy hlavních větví:** Jak bylo zmíněno, častou chybou je předpoklad větve `main`, zatímco starší repozitáře mohou mít `master`.

## Rollback postup
Vzhledem k tomu, že se zdrojové repozitáře nemodifikují, nedochází k nevratnému poškození původních dat. Pokud import konkrétního repozitáře selže v novém monorepu:

1. Zjistěte hash commitu před provedením chybného kroku:
```powershell
git log --oneline
```
2. Proveďte reset aktuální větve zpět na tento bezpečný stav:
```powershell
# VAROVÁNÍ: Zahodí všechny neuložené změny v pracovním adresáři
git reset --hard <commit_hash>
```
3. Zjistěte důvod selhání (např. špatný název větve), upravte příkaz a opakujte `git subtree add`.

Pokud se monorepo dostane do zcela nefunkčního stavu, stačí celou složku `PCS-Learning-Path` smazat a začít od začátku krokem 1. Původní repozitáře TartsRGL nebudou jakkoliv ovlivněny.
