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

// Project Data with Custom Image Albums (Edit these arrays to add ALL your images per folder)
const projectData = [
    { title: "Flow Drive Dashboard", company: "OZEOL – Tunisia", description: "Real-time Power BI solution tracking booking, invoicing, and logistics KPIs across departments. Improved operational visibility and reduced delays.", technologies: ["Power BI", "SQL Server", "SSIS", "SAP", "Selligent"], images: ["project-0/overview.png", "project-0/kpi1.png", "project-0/chart2.png", "project-0/extra.png"] }, // Add more: "project-0/newimg.jpg"
    { title: "Instance 6 – BUM SC & ZM SC Dashboard", company: "OZEOL – Tunisia", description: "Provides Business Unit and Zone Managers with KPIs on billing, transport, and container rates.", technologies: ["Power BI", "SQL Server", "SSIS", "SAP"], images: ["project-1/main-dashboard.png", "project-1/detail.png"] }, // Add as many as you want
    { title: "Instance 4 – BUM SC & Team Dashboard", company: "OZEOL – Tunisia", description: "Consolidates turnover, logistics, and disputes KPIs for supply chain managers, improving daily decision-making.", technologies: ["Power BI", "SQL Server", "SSIS", "SAP"], images: ["project-2/img1.png", "project-2/img2.png", "project-2/img3.png"] },
    { title: "Quality Control – Supply Chain Live Dashboard", company: "OZEOL – Tunisia", description: "Monitors QC processes, packaging validations, and inspection progress in real time to ensure product conformity.", technologies: ["Power BI", "SQL Server", "SSIS", "SAP"], images: ["project-3/screenshot1.jpg", "project-3/screenshot2.jpg"] },
    { title: "Finance Forecasting Dashboard", company: "OZEOL – Tunisia", description: "Predicts weekly payment needs and optimizes cash flow via automated Power BI forecasting models.", technologies: ["Power BI", "SQL Server", "SSIS", "Excel"], images: ["project-4/forecast.png", "project-4/cashflow.png", "project-4/model.png", "project-4/extra1.png", "project-4/extra2.png"] }, // Example with 5+
    { title: "SSIS ETL Jobs Monitoring Dashboard", company: "OZEOL – Tunisia", description: "Power BI dashboard tracking ETL job success/failure rates across servers, improving reliability.", technologies: ["Power BI", "SQL Server", "SSIS"], images: ["project-5/monitor.png", "project-5/jobs.png"] },
    { title: "Industrial Cost Dashboard", company: "CSM-GIAS – Tunisia", description: "Analyzes cost per product, material, and semi-finished component, helping optimize production efficiency.", technologies: ["Power BI", "SQL Server", "SSIS", "SSRS", "Sage X3"], images: ["project-6/cost-analysis.png", "project-6/product.png"] },
    { title: "HR Dashboard", company: "CSM-GIAS – Tunisia", description: "Monitors workforce data (gender, seniority, contracts, social funds) across four entities.", technologies: ["Power BI", "SQL Server", "SSIS", "Sage X3"], images: ["project-7/hr-overview.png", "project-7/workforce.png", "project-7/contracts.png"] },
    { title: "ETL Automation Jobs – SSIS Performance Dashboard", company: "CSM-GIAS – Tunisia", description: "Visualizes job durations and error frequencies to enhance SSIS performance.", technologies: ["Power BI", "SQL Server", "SSIS"], images: ["project-8/performance.png", "project-8/errors.png"] },
    { title: "Football Players Catalogue Dashboard", company: "MIRSPORT – Dubai", description: "Aggregates player data from Transfermarkt and Instat to visualize performance and market value for scouting.", technologies: ["Power BI", "Python", "SQL Server"], images: ["project-9/players.png", "project-9/performance.png", "project-9/market.png"] },
    { title: "AFCON Insights Dashboard", company: "MIRSPORT – Dubai", description: "Analyzes Africa Cup of Nations data — team performance, best XI, and match analytics.", technologies: ["Power BI", "Python", "Excel"], images: ["project-10/afcon.png", "project-10/team.png"] },
    { title: "Digital Transformation – BI Implementation", company: "Amsons Group / Camel Cement – Tanzania", description: "Led data modernization by building SSIS pipelines (Staging → ODS → DWH) and deploying Power BI dashboards for Sales, Purchasing, and Production.", technologies: ["Power BI", "SQL Server", "SSIS", "Excel"], images: ["project-11/sales.png", "project-11/purchasing.png", "project-11/production.png"] }
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

// Open Modal + Build Gallery with ALL Images
document.querySelectorAll('.portfolio-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        const p = projectData[index];
        
        modalTitle.textContent = p.title;
        modalCompany.textContent = p.company;
        modalDesc.innerHTML = `<p>${p.description}</p>`;
        modalTechs.innerHTML = p.technologies.map(t => `<span class="project-tech"><span>${t}</span></span>`).join('');
        
        // Clear previous
        thumbnailsContainer.innerHTML = '';
        mainImage.classList.remove('zoomed');
        
        // Build gallery with ALL images from array
        p.images.forEach((imgPath, i) => {
            const thumb = document.createElement('img');
            thumb.src = `images/${imgPath}`; // Prefix with images/
            thumb.alt = `Screenshot ${i+1}`;
            thumb.className = 'thumbnail';
            if (i === 0) {
                thumb.classList.add('active');
                mainImage.src = `images/${imgPath}`;
            }
            thumb.addEventListener('click', () => {
                mainImage.src = `images/${imgPath}`;
                thumbnailsContainer.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                mainImage.classList.remove('zoomed'); // Reset zoom on switch
            });
            thumbnailsContainer.appendChild(thumb);
        });
        
        modal.classList.add('active');
    });
});

// Zoom on Main Image Click
mainImage.addEventListener('click', () => {
    mainImage.classList.toggle('zoomed');
});

// Close Modal
closeBtn.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });

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
