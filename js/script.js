// Inicijalizacija aktivne navigacijske stavke
document.addEventListener('DOMContentLoaded', function() {
    console.log('Stranica je učitana');
    initializeFilters();
    initializeNavigation();
});

// Filter funkcionalnost za meni
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Ukloniti active klasu sa svih dugmadi
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Dodati active klasu na kliknutom dugmetu
            this.classList.add('active');
            
            // Filtriranje stavki
            menuItems.forEach(item => {
                if (filterValue === 'svi') {
                    item.style.display = 'block';
                } else {
                    const categories = item.getAttribute('data-category').split(' ');
                    if (categories.includes(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
}

// Upravljanje navigacijom - označava aktivnu stranicu
function initializeNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

// Upravljanje rezervacijskom formom
const reservationForm = document.getElementById('reservationForm');
if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const ime = document.getElementById('rez-ime').value;
        const email = document.getElementById('rez-email').value;
        const telefon = document.getElementById('rez-telefon').value;
        const datum = document.getElementById('rez-datum').value;
        const vreme = document.getElementById('rez-vreme').value;
        const gosti = document.getElementById('rez-gosti').value;
        
        if (ime && email && telefon && datum && vreme && gosti) {
            console.log('Rezervacija poslata:');
            console.log('Ime:', ime);
            console.log('Email:', email);
            console.log('Telefon:', telefon);
            console.log('Datum:', datum);
            console.log('Vreme:', vreme);
            console.log('Broj gostiju:', gosti);
            
            alert('Hvala! Vaša rezervacija je primljena. Uskoro ćemo vas kontaktirati na unet broj.');
            reservationForm.reset();
        }
    });
}

// Upravljanje kontakt formom
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const ime = document.getElementById('ime').value;
        const email = document.getElementById('email').value;
        const tema = document.getElementById('tema').value;
        const poruka = document.getElementById('poruka').value;
        
        if (ime && email && tema && poruka) {
            console.log('Poruka poslata:');
            console.log('Ime:', ime);
            console.log('Email:', email);
            console.log('Tema:', tema);
            console.log('Poruka:', poruka);
            
            alert('Hvala! Vaša poruka je primljena. Odgovoriću vam u roku od 24 sata.');
            contactForm.reset();
        }
    });
}

// Smooth scrolling za navigacijske linkove
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Postavljanje minimalnog datuma na današnji dan
window.addEventListener('load', function() {
    const dateInput = document.getElementById('rez-datum');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});
