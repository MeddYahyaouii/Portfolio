// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Scroll Progress
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scroll-progress');
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / height) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Navbar Scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// PROJECT DATA
const projectData = [
    { title: "Flow Drive Dashboard", company: "OZEOL – Tunisia (2025)", description: "Real-time Power BI solution tracking booking, invoicing, logistics.", technologies: ["Power BI", "SQL Server", "SSIS", "DAX"] },
    { title: "Instance 6 – BUM SC & ZM SC", company: "OZEOL – Tunisia (2025)", description: "KPIs on billing, transport, container rates.", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "Instance 4 – BUM SC & Team", company: "OZEOL – Tunisia (2025)", description: "Turnover, logistics, disputes KPIs.", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "Quality Control Live Dashboard", company: "OZEOL – Tunisia (2025)", description: "QC processes, packaging, inspection progress.", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "Finance Forecasting Dashboard", company: "OZEOL – Tunisia (2025)", description: "Predicts weekly payment needs.", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "SSIS ETL Jobs Monitoring", company: "OZEOL – Tunisia (2025)", description: "Tracks ETL job success/failure.", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "Industrial Cost Dashboard", company: "CSM-GIAS – Tunisia (2023–2024)", description: "Analyzes cost per product, material.", technologies: ["Power BI", "SQL Server", "SSIS", "DAX"] },
    { title: "HR Dashboard", company: "CSM-GIAS – Tunisia (2023–2024)", description: "Monitors workforce data.", technologies_limits: ["Power BI", "SQL Server", "SSIS"] },
    { title: "ETL Automation Jobs – SSIS Performance", company: "CSM-GIAS – Tunisia (2023–2024)", description: "Visualizes job durations, errors.", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "Football Players Catalogue", company: "MIRSPORT – Dubai (Freelance, 2022–2023)", description: "Aggregates player data from Transfermarkt.", technologies: ["Power BI", "Python", "SQL Server"] },
    { title: "AFCON Insights Dashboard", company: "MIRSPORT – Dubai (Freelance, 2022–2023)", description: "Team performance, best XI, match analytics.", technologies: ["Power BI", "Python", "Excel"] },
    { title: "Digital Transformation – BI Implementation", company: "Amsons Group / Camel Cement – Tanzania (Freelance, 2025)", description: "SSIS pipelines + Power BI for Sales, Purchasing, Production.", technologies: ["Power BI", "SQL Server", "SSIS", "Excel"] }
];

// MODAL – 3 IMAGES CAROUSEL
const modal = document.getElementById('project-modal');
const closeBtn = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalCompany = document.getElementById('modal-company');
const modalDesc = document.getElementById('modal-description');
const modalTech = document.getElementById('modal-technologies');

let currentImages = [];
let currentIndex = 0;

document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => {
        const index = card.getAttribute('data-project');
        currentImages = JSON.parse(card.getAttribute('data-images'));
        currentIndex = 0;

        const p = projectData[index];
        modalTitle.textContent = p.title;
        modalCompany.textContent = p.company;

        modalDesc.innerHTML = `
            <div class="modal-images-container">
                <div class="modal-images" id="modal-images">
                    ${currentImages.map(src => `<img src="${src}" class="modal-image-item" alt="${p.title}">`).join('')}
                </div>
                <button class="modal-nav prev" id="prev-btn">❮</button>
                <button class="modal-nav next" id="next-btn">❯</button>
                <div class="modal-image-counter" id="image-counter">1 / ${currentImages.length}</div>
            </div>
            <p style="margin-top:1rem;">${p.description}</p>
        `;

        modalTech.innerHTML = p.technologies.map(t => 
            `<span class="project-tech"><span>${t}</span></span>`
        ).join('');

        modal.classList.add('active');
        updateImage();

        document.getElementById('prev-btn').onclick = () => {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            updateImage();
        };
        document.getElementById('next-btn').onclick = () => {
            currentIndex = (currentIndex + 1) % currentImages.length;
            updateImage();
        };
    });
});

function updateImage() {
    const slider = document.getElementById('modal-images');
    const counter = document.getElementById('image-counter');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    counter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
}

closeBtn.onclick = () => modal.classList.remove('active');
modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('active'); };
