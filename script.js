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

// ==================== PROJECT DATA (ONLY PROJECT 0 HAS IMAGES) ====================
const projectData = [
    {
        title: "Flow Drive Dashboard",
        company: "OZEOL – Tunisia",
        description: "Real-time Power BI solution tracking booking, invoicing, and logistics KPIs across departments. Improved operational visibility and reduced delays.",
        technologies: ["Power BI", "SQL Server", "SSIS", "SAP", "Selligent"],
        images: [
            "project-0/Capture d'écran 2025-10-14 105555.png",
            "project-0/Capture d'écran 2025-10-14 105628.png",
            "project-0/Capture d'écran 2025-10-14 105656.png",
            "project-0/Capture d'écran 2025-10-14 105718.png",
            "project-0/Capture d'écran 2025-10-14 105742.png",
            "project-0/Capture d'écran 2025-10-14 105804.png",
            "project-0/Capture d'écran 2025-10-14 105827.png",
            "project-0/Capture d'écran 2025-10-14 105848.png"
        ]
    },
    // All other projects: empty images → safe
    ...Array(11).fill(null).map((_, i) => i + 1).map(i => ({
        title: `Project ${i + 1}`,
        company: "Company",
        description: "Description",
        technologies: ["Power BI"],
        images: []
    }))
];

// Modal Elements (with safety checks)
const modal = document.getElementById('project-modal');
const closeBtn = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalCompany = document.getElementById('modal-company');
const modalDesc = document.getElementById('modal-description');
const modalTechs = document.getElementById('modal-technologies');
const mainImage = document.getElementById('modal-main-image');
const thumbnailsContainer = document.getElementById('modal-thumbnails');

if (!modal || !closeBtn || !mainImage || !thumbnailsContainer) {
    console.error("Modal elements missing! Check HTML IDs.");
}

// =============== OPEN MODAL ON CARD CLICK ===============
document.querySelectorAll('.portfolio-card').forEach((card, index) => {
    if (index >= projectData.length) {
        console.warn(`Card ${index} has no data!`);
        return;
    }

    card.addEventListener('click', () => {
        console.log(`Opening modal for project ${index}`); // DEBUG

        const p = projectData[index];

        // Fill content
        if (modalTitle) modalTitle.textContent = p.title;
        if (modalCompany) modalCompany.textContent = p.company;
        if (modalDesc) modalDesc.innerHTML = `<p>${p.description}</p>`;
        if (modalTechs) modalTechs.innerHTML = p.technologies.map(t => `<span class="project-tech"><span>${t}</span></span>`).join('');

        // Clear gallery
        thumbnailsContainer.innerHTML = '';
        mainImage.classList.remove('zoomed');
        mainImage.src = 'https://via.placeholder.com/800x600/cccccc/666666?text=Loading...';

        // Build gallery
        if (p.images && p.images.length > 0) {
            p.images.forEach((imgPath, i) => {
                const fullPath = `images/${imgPath}`;
                const img = new Image();
                img.onload = () => {
                    const thumb = document.createElement('img');
                    thumb.src = fullPath;
                    thumb.alt = `Screenshot ${i + 1}`;
                    thumb.className = 'thumbnail';
                    if (i === 0) {
                        thumb.classList.add('active');
                        mainImage.src = fullPath;
                    }
                    thumb.addEventListener('click', () => {
                        mainImage.src = fullPath;
                        thumbnailsContainer.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                        thumb.classList.add('active');
                        mainImage.classList.remove('zoomed');
                    });
                    thumbnailsContainer.appendChild(thumb);
                };
                img.onerror = () => {
                    console.warn(`Image not found: ${fullPath}`);
                };
                img.src = fullPath;
            });
        } else {
            mainImage.src = 'https://via.placeholder.com/800x600/eeeeee/999999?text=No+Images+Yet';
            const thumb = document.createElement('img');
            thumb.src = mainImage.src;
            thumb.className = 'thumbnail active';
            thumbnailsContainer.appendChild(thumb);
        }

        modal.classList.add('active');
    });
});

// Zoom
mainImage.addEventListener('click', () => {
    mainImage.classList.toggle('zoomed');
});

// Close modal
closeBtn.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('active');
});

// Contact Form
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Message sent! (Demo mode)');
        form.reset();
    });
}
 
