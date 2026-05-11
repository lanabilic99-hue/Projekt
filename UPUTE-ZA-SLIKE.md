# 📸 Upute za Dodavanje Slika

## Struktura Folder-a

```
restoran web/
├── images/                    ← FOLDER ZA SLIKE
│   ├── restoran-glavna.jpg    ← Glavna fotografija restorana
│   ├── restoran-interijer.jpg ← Detalj interijera
│   ├── restoran-more.jpg      ← Pogled na more
│   ├── restoran-atmosfera.jpg ← Ambijent
│   ├── jelo-riblja.jpg        ← Riblja jela
│   ├── jelo-predjela.jpg      ← Predjela
│   ├── jelo-rizota.jpg        ← Rižota
│   └── jelo-specijalnost.jpg  ← Glavna specijalnost
├── css/
├── js/
├── index.html
├── meni.html
├── o-nama.html
└── kontakt.html
```

## 🖼️ Kako Ubaciti Slike

### Korak 1: Spremi Slike
1. Prosljeđi fotografije u `images/` folder
2. Preporučeni formati: `.jpg` ili `.png`
3. Preporučena veličina: minimalno 800px širine

### Korak 2: Zamijeni Placeholder HTML

**Za `index.html` - Naš Restoran (4 slike):**
```html
<!-- Glavna fotografija -->
<div class="gallery-item large">
    <img src="images/restoran-glavna.jpg" alt="Glavna fotografija restorana" class="gallery-image">
</div>

<!-- Detalj interijera -->
<div class="gallery-item">
    <img src="images/restoran-interijer.jpg" alt="Interijер restorana" class="gallery-image">
</div>

<!-- Pogled na more -->
<div class="gallery-item">
    <img src="images/restoran-more.jpg" alt="Pogled na more" class="gallery-image">
</div>

<!-- Atmosfera -->
<div class="gallery-item">
    <img src="images/restoran-atmosfera.jpg" alt="Atmosfera restorana" class="gallery-image">
</div>
```

**Za `index.html` - Naša Jela (4 slike):**
```html
<!-- Riblja jela -->
<div class="gallery-item">
    <img src="images/jelo-riblja.jpg" alt="Riblja jela" class="gallery-image">
</div>

<!-- Predjela -->
<div class="gallery-item">
    <img src="images/jelo-predjela.jpg" alt="Predjela" class="gallery-image">
</div>

<!-- Rižota i Tjestenina -->
<div class="gallery-item">
    <img src="images/jelo-rizota.jpg" alt="Rižota" class="gallery-image">
</div>

<!-- Specijalne Ponude -->
<div class="gallery-item">
    <img src="images/jelo-specijalnost.jpg" alt="Specijalne ponude" class="gallery-image">
</div>
```

**Za `meni.html` - Specijalnosti (4 slike):**
Koristi slike jela iz prethodnog

**Za `o-nama.html` - Restoran Kroz Vrijeme (4 slike):**
```html
<!-- Restoran 1976 -->
<div class="gallery-item">
    <img src="images/restoran-1976.jpg" alt="Restoran 1976" class="gallery-image">
</div>

<!-- Trenutni prostor -->
<div class="gallery-item">
    <img src="images/restoran-trenutno.jpg" alt="Trenutni prostor" class="gallery-image">
</div>

<!-- Tim restorana -->
<div class="gallery-item">
    <img src="images/restoran-tim.jpg" alt="Tim restorana" class="gallery-image">
</div>

<!-- Specijalni momenti -->
<div class="gallery-item">
    <img src="images/restoran-momenti.jpg" alt="Specijalni momenti" class="gallery-image">
</div>
```

## 🎨 Primjer Koda

Zamijeniti:
```html
<div class="gallery-placeholder" style="background: linear-gradient(...);">
    <p>Dodaj fotografiju</p>
</div>
```

Sa:
```html
<img src="images/restoran-glavna.jpg" alt="Opis slike" class="gallery-image">
```

## 📝 Napomene

- Alt tekst je važan za SEO i dostupnost - uvijek ga dodaj
- Isprobaj sa različitim veličinama slika - CSS će automatski prilagoditi
- Galerija ima hover efekt - slike će se malo povećati na hover

## Potrebne Slike (ukupno 12)

Za potpunu galeriju trebaš:

**index.html:**
1. restoran-glavna.jpg (750x500px)
2. restoran-interijer.jpg (400x300px)
3. restoran-more.jpg (400x300px)
4. restoran-atmosfera.jpg (400x300px)
5. jelo-riblja.jpg (400x300px)
6. jelo-predjela.jpg (400x300px)
7. jelo-rizota.jpg (400x300px)
8. jelo-specijalnost.jpg (400x300px)

**meni.html:**
- Koristi iste slike kao index (4 jela)

**o-nama.html:**
1. restoran-1976.jpg (400x300px)
2. restoran-trenutno.jpg (400x300px)
3. restoran-tim.jpg (400x300px)
4. restoran-momenti.jpg (400x300px)

---

**Trebanja li pomoć sa supstitucijom? Slobodno pitaj!**
