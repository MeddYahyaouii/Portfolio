// scripts/script.js
lucide.createIcons();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Navbar + Progress
const navbar = document.getElementById('navbar');
const progress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    const percent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    progress.style.width = percent + '%';
});

// Mobile menu
const menuBtn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => menu.classList.toggle('active'));
    document.querySelectorAll('.mobile-menu a').forEach(l => l.addEventListener('click', () => menu.classList.remove('active')));
}

/* -------------------------------------------------
   TAB GALLERY – PROJECT 0 ONLY
   ------------------------------------------------- */
const PROJECT_0_IMAGES = [
    "Capture d'écran 2025-10-14 105555.png",
    "Capture d'écran 2025-10-14 105628.png",
    "Capture d'écran 2025-10-14 105656.png",
    "Capture d'écran 2025-10-14 105718.png",
    "Capture d'écran 2025-10-14 105742.png",
    "Capture d'écran 2025-10-14 105804.png",
    "Capture d'écran 2025-10-14 105827.png",
    "Capture d'écran 2025-10-14 105848.png"
];

function openTabGallery() {
    const gallery = document.getElementById('tab-gallery-0');
    const row = document.getElementById('gallery-row-0');
    const card = document.querySelector('.portfolio-card[data-project="0"]');

    row.innerHTML = '';
    PROJECT_0_IMAGES.forEach(src => {
        const col = document.createElement('div');
        col.className = 'column';
        const img = document.createElement('img');
        img.src = `images/project-0/${src}`;
        img.alt = src.split('.')[0].replace(/Capture d'écran /g, '');
        img.onclick = () => expandImage(0, img);
        col.appendChild(img);
        row.appendChild(col);
    });

    card.querySelector('.project-image').style.display = 'none';
    card.querySelector('.project-category').style.display = 'none';
    card.querySelector('h3').style.display = 'none';
    card.querySelector('.project-company').style.display = 'none';
    card.querySelector('.project-description').style.display = 'none';
    card.querySelector('.project-tech').style.display = 'none';
    gallery.style.display = 'block';
}

function expandImage(idx, thumb) {
    const container = document.getElementById(`expanded-container-${idx}`);
    const expanded = document.getElementById(`expandedImg-${idx}`);
    const txt = document.getElementById(`imgtext-${idx}`);
    expanded.src = thumb.src;
    txt.innerHTML = thumb.alt;
    container.style.display = 'flex';
}

function closeExpanded(idx) {
    document.getElementById(`expanded-container-${idx}`).style.display = 'none';
}

// Open Tab Gallery on Project 0 click
document.querySelector('.portfolio-card[data-project="0"]').addEventListener('click', e => {
    e.stopPropagation();
    openTabGallery();
});

// Close expanded on outside click
document.querySelectorAll('.container').forEach(c => {
    c.addEventListener('click', ev => {
        if (ev.target === c) closeExpanded(0);
    });
});

// Contact Form
document.getElementById('contact-form')?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Message sent! (Demo mode)');
    e.target.reset();
});
