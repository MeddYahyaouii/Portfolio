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
menuBtn.addEventListener('click', () => menu.classList.toggle('active'));
document.querySelectorAll('.mobile-menu a').forEach(l => l.addEventListener('click', () => menu.classList.remove('active')));

// ==================== PROJECT DATA (NO IMAGE LISTS NEEDED) ====================
const projectData = [
    { title: "Flow Drive Dashboard", company: "OZEOL – Tunisia", description: "Real-time Power BI solution tracking booking, invoicing, and logistics KPIs across departments. Improved operational visibility and reduced delays.", technologies: ["Power BI", "SQL Server", "SSIS", "SAP", "Selligent"] },
    { title: "Instance 6 – BUM SC & ZM SC Dashboard", company: "OZEOL – Tunisia", description: "Provides Business Unit and Zone Managers with KPIs on billing, transport, and container rates.", technologies: ["Power BI", "SQL Server", "SSIS", "SAP"] },
    { title: "Instance 4 – BUM SC & Team Dashboard", company: "OZEOL – Tunisia", description: "Consolidates turnover, logistics, and disputes KPIs for supply chain managers, improving daily decision-making.", technologies: ["Power BI", "SQL Server", "SSIS", "SAP"] },
    { title: "Quality Control – Supply Chain Live Dashboard", company: "OZEOL – Tunisia", description: "Monitors QC processes, packaging validations, and inspection progress in real time to ensure product conformity.", technologies: ["Power BI", "SQL Server", "SSIS", "SAP"] },
    { title: "Finance Forecasting Dashboard", company: "OZEOL – Tunisia", description: "Predicts weekly payment needs and optimizes cash flow via automated Power BI forecasting models.", technologies: ["Power BI", "SQL Server", "SSIS", "Excel"] },
    { title: "SSIS ETL Jobs Monitoring Dashboard", company: "OZEOL – Tunisia", description: "Power BI dashboard tracking ETL job success/failure rates across servers, improving reliability.", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "Industrial Cost Dashboard", company: "CSM-GIAS – Tunisia", description: "Analyzes cost per product, material, and semi-finished component, helping optimize production efficiency.", technologies: ["Power BI", "SQL Server", "SSIS", "SSRS", "Sage X3"] },
    { title: "HR Dashboard", company: "CSM-GIAS – Tunisia", description: "Monitors workforce data (gender, seniority, contracts, social funds) across four entities.", technologies: ["Power BI", "SQL Server", "SSIS", "Sage X3"] },
    { title: "ETL Automation Jobs – SSIS Performance Dashboard", company: "CSM-GIAS – Tunisia", description: "Visualizes job durations and error frequencies to enhance SSIS performance.", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "Football Players Catalogue Dashboard", company: "MIRSPORT – Dubai", description: "Aggregates player data from Transfermarkt and Instat to visualize performance and market value for scouting.", technologies: ["Power BI", "Python", "SQL Server"] },
    { title: "AFCON Insights Dashboard", company: "MIRSPORT – Dubai", description: "Analyzes Africa Cup of Nations data — team performance, best XI, and match analytics.", technologies: ["Power BI", "Python", "Excel"] },
    { title: "Digital Transformation – BI Implementation", company: "Amsons Group / Camel Cement – Tanzania", description: "Led data modernization by building SSIS pipelines (Staging → ODS → DWH) and deploying Power BI dashboards for Sales, Purchasing, and Production.", technologies: ["Power BI", "SQL Server", "SSIS", "Excel"] }
];

// Modal Elements
const modal = document.getElementById('project-modal');
const closeBtn = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalCompany = document.getElementById('modal-company');
const modalDesc = document.getElementById('modal-description');
const modalTechs = document.getElementById('modal-technologies');
const mainImage = document.getElementById('modal-main-image');
const thumbnailsContainer = document.getElementById('modal-thumbnails');

// =============== AUTO-LOAD ALL IMAGES FROM project-N/ FOLDER ===============
document.querySelectorAll('.portfolio-card').forEach((card, index) => {
    card.addEventListener('click', async () => {
        const p = projectData[index];

        // Fill text content
        modalTitle.textContent = p.title;
        modalCompany.textContent = p.company;
        modalDesc.innerHTML = `<p>${p.description}</p>`;
        modalTechs.innerHTML = p.technologies.map(t => `<span class="project-tech"><span>${t}</span></span>`).join('');

        // Clear previous gallery
        thumbnailsContainer.innerHTML = '';
        mainImage.classList.remove('zoomed');
        mainImage.src = '';

        // Define folder
        const folder = `images/project-${index}/`;
        const knownImages = [
            "Capture d'écran 2025-10-14 105555.png",
            "Capture d'écran 2025-10-14 105628.png",
            "Capture d'écran 2025-10-14 105656.png",
            "Capture d'écran 2025-10-14 105718.png",
            "Capture d'écran 2025-10-14 105742.png",
            "Capture d'écran 2025-10-14 105804.png",
            "Capture d'écran 2025-10-14 105827.png",
            "Capture d'écran 2025-10-14 105848.png"
            // Add more known names here if needed
        ];

        let imagesToShow = [];

        // === CASE 1: Project 0 – use known list (your uploaded files) ===
        if (index === 0) {
            imagesToShow = knownImages;
        }
        // === CASE 2: Other projects – try to find any .png/.jpg ===
        else {
            // Try common patterns
            const extensions = ['png', 'jpg', 'jpeg'];
            const prefixes = ['screenshot', 'Capture', 'img', 'dashboard', 'file'];

            for (const prefix of prefixes) {
                for (let i = 1; i <= 20; i++) { // max 20 images
                    for (const ext of extensions) {
                        const filename = `${prefix}${i}.${ext}`;
                        const path = `${folder}${filename}`;
                        if (await imageExists(path)) {
                            imagesToShow.push(filename);
                        }
                    }
                }
            }
            // Fallback: try any .png/.jpg in folder (GitHub Pages doesn't allow directory listing, so we guess)
        }

        // === BUILD GALLERY ===
        if (imagesToShow.length > 0) {
            imagesToShow.forEach((filename, i) => {
                const path = `${folder}${filename}`;
                const thumb = document.createElement('img');
                thumb.src = path;
                thumb.alt = `Screenshot ${i + 1}`;
                thumb.className = 'thumbnail';
                if (i === 0) {
                    thumb.classList.add('active');
                    mainImage.src = path;
                }
                thumb.addEventListener('click', () => {
                    mainImage.src = path;
                    thumbnailsContainer.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                    mainImage.classList.remove('zoomed');
                });
                thumbnailsContainer.appendChild(thumb);
            });
        } else {
            // No images found → show placeholder
            const placeholder = 'https://via.placeholder.com/800x600/eeeeee/999999?text=No+Images+Yet';
            mainImage.src = placeholder;
            const thumb = document.createElement('img');
            thumb.src = placeholder;
            thumb.className = 'thumbnail active';
            thumb.style.opacity = '0.6';
            thumbnailsContainer.appendChild(thumb);
        }

        modal.classList.add('active');
    });
});

// Helper: check if image exists
async function imageExists(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url + '?t=' + Date.now(); // cache buster
    });
}

// Zoom on main image click
mainImage.addEventListener('click', () => {
    mainImage.classList.toggle('zoomed');
});

// Close modal
closeBtn.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('active');
});

// Contact Form
document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();
    if (!name || !email || !msg) return alert('Please fill all required fields.');
    alert('Message sent! (Demo mode)');
    e.target.reset();
});
