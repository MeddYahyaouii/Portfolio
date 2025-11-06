// Initialize Lucide icons
lucide.createIcons();

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll progress bar
const scrollProgress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Portfolio modal
const projectData = [
    {
        title: "Flow Drive Dashboard",
        company: "OZEOL – Tunisia",
        description: "Real-time Power BI solution tracking booking, invoicing, and logistics KPIs across departments. Improved operational visibility and reduced delays.",
        technologies: ["Power BI", "SQL Server", "SSIS", "SAP", "Selligent"],
        category: "Operations"
    },
    {
        title: "Instance 6 – BUM SC & ZM SC Dashboard",
        company: "OZEOL – Tunisia",
        description: "Provides Business Unit and Zone Managers with KPIs on billing, transport, and container rates.",
        technologies: ["Power BI", "SQL Server", "SSIS", "SAP"],
        category: "Management"
    },
    {
        title: "Instance 4 – BUM SC & Team Dashboard",
        company: "OZEOL – Tunisia",
        description: "Consolidates turnover, logistics, and disputes KPIs for supply chain managers, improving daily decision-making.",
        technologies: ["Power BI", "SQL Server", "SSIS", "SAP"],
        category: "Supply Chain"
    },
    {
        title: "Quality Control – Supply Chain Live Dashboard",
        company: "OZEOL – Tunisia",
        description: "Monitors QC processes, packaging validations, and inspection progress in real time to ensure product conformity.",
        technologies: ["Power BI", "SQL Server", "SSIS", "SAP"],
        category: "Quality"
    },
    {
        title: "Finance Forecasting Dashboard",
        company: "OZEOL – Tunisia",
        description: "Predicts weekly payment needs and optimizes cash flow via automated Power BI forecasting models.",
        technologies: ["Power BI", "SQL Server", "SSIS", "Excel"],
        category: "Finance"
    },
    {
        title: "SSIS ETL Jobs Monitoring Dashboard",
        company: "OZEOL – Tunisia",
        description: "Power BI dashboard tracking ETL job success/failure rates across servers, improving reliability.",
        technologies: ["Power BI", "SQL Server", "SSIS"],
        category: "Infrastructure"
    },
    {
        title: "Industrial Cost Dashboard",
        company: "CSM-GIAS – Tunisia",
        description: "Analyzes cost per product, material, and semi-finished component, helping optimize production efficiency.",
        technologies: ["Power BI", "SQL Server", "SSIS", "SSRS", "Sage X3"],
        category: "Manufacturing"
    },
    {
        title: "HR Dashboard",
        company: "CSM-GIAS – Tunisia",
        description: "Monitors workforce data (gender, seniority, contracts, social funds) across four entities.",
        technologies: ["Power BI", "SQL Server", "SSIS", "Sage X3"],
        category: "Human Resources"
    },
    {
        title: "ETL Automation Jobs – SSIS Performance Dashboard",
        company: "CSM-GIAS – Tunisia",
        description: "Visualizes job durations and error frequencies to enhance SSIS performance.",
        technologies: ["Power BI", "SQL Server", "SSIS"],
        category: "Infrastructure"
    },
    {
        title: "Football Players Catalogue Dashboard",
        company: "MIRSPORT – Dubai",
        description: "Aggregates player data from Transfermarkt and Instat to visualize performance and market value for scouting.",
        technologies: ["Power BI", "Python", "SQL Server"],
        category: "Sports Analytics"
    },
    {
        title: "AFCON Insights Dashboard",
        company: "MIRSPORT – Dubai",
        description: "Analyzes Africa Cup of Nations data — team performance, best XI, and match analytics.",
        technologies: ["Power BI", "Python", "Excel"],
        category: "Sports Analytics"
    },
    {
        title: "Digital Transformation – BI Implementation",
        company: "Amsons Group / Camel Cement – Tanzania",
        description: "Led data modernization by building SSIS pipelines (Staging → ODS → DWH) and deploying Power BI dashboards for Sales, Purchasing, and Production.",
        technologies: ["Power BI", "SQL Server", "SSIS", "Excel"],
        category: "Enterprise"
    }
];

const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalCompany = document.getElementById('modal-company');
const modalDescription = document.getElementById('modal-description');
const modalTechnologies = document.getElementById('modal-technologies');

document.querySelectorAll('.portfolio-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        const project = projectData[index];
        
        modalTitle.textContent = project.title;
        modalCompany.textContent = project.company;
        modalDescription.innerHTML = `<p>${project.description}</p>`;
        
        modalTechnologies.innerHTML = project.technologies
            .map(tech => `<span class="project-tech"><span>${tech}</span></span>`)
            .join('');
        
        modal.classList.add('active');
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // In real implementation, send to backend
    alert('Message sent! Thank you for reaching out. I\'ll get back to you soon.');
    contactForm.reset();
});

// Reinitialize icons after dynamic content loads
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});
