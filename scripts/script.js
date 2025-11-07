lucide.createIcons();

const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('active'));

window.addEventListener('scroll', () => {
    document.getElementById('scroll-progress').style.width = 
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 + '%';
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// PROJECT DATA – 21 PROJECTS (0 to 20)
const projectData = [
    { title: "Africa Cup Of Nations (Afcon) Insights Dashboard", company: "Mir Sport Football AGENCY (Freelance, 2022–2023)", description: "The dashboard covers 4 main areas: Afcon History, Afcon 2023-2024, the 2023 Best XI, and a detailed analysis of the last final between Ivory Coast and Nigeria.", technologies: ["Power BI", "Python", "Excel"] },
    { title: "Mir Sport Football Players Catalogue", company: "Mir Sport Football AGENCY (Freelance, 2022–2023)", description: "Developed a Power BI dashboard using data from Transfermarkt. Introduces a new way to sell players with KPIs on market value and performance. Includes 4 interactive pages: player insights, agency structure, analytics, and 3D pitch view.", technologies: ["Power BI", "Python", "SQL Server"] },
    { title: "Industrial Cost Dashboard", company: "General Industrial Food Slama (CSM-GIAS) (2023–2024)", description: "Analyzes industrial cost of finished products (PF) as total cost minus material costs. Tracks KPIs per product, including semi-finished products (PFS). Historical trends from 2002 to 2023.", technologies: ["Power BI", "SQL Server", "SSIS", "DAX"] },
    { title: "HR Dashboard", company: "General Industrial Food Slama (CSM-GIAS) (2023–2024)", description: "Comprehensive workforce view across 4 companies. Pages: Overview (gender, status, grade), Evolution (trends), Social Fund (employee lookup), Recruitment (by type/reason).", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "Employee Device Management Dashboard", company: "General Industrial Food Slama (CSM-GIAS) (2023–2024)", description: "Tracks phone eligibility (every 3 years), remaining days, device history, and stock planning. Interactive visualization of models and brands.", technologies: ["Power BI", "SQL Server"] },
    { title: "ETL JOBS Performance", company: "General Industrial Food Slama (CSM-GIAS) (2023–2024)", description: "Monitors SSIS jobs across 3 servers: failed jobs, failure steps, execution times, daily ratios, 30-day history.", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "SAGE X3 SQL VIEWS", company: "General Industrial Food Slama (CSM-GIAS) (2023–2024)", description: "Tracks access to Sage X3 views by department. Pages: View lookup, user-view interaction (pie chart), column search across views.", technologies: ["Power BI", "SQL Server"] },
    { title: "On Time In Full (OTIF) Dashboard", company: "General Industrial Food Slama (CSM-GIAS) (2023–2024)", description: "Analyzes delivery performance (95% target) by brand, depot (60+), market, product family. Tracks orders, in-full ratios, trends.", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "GLPI Tickets", company: "OZEOL Company (2025)", description: "Real-time IT tickets: new, assigned, resolved, hourly updates, globe map, resolution time, technician performance.", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "GLPI Projects Analysis", company: "OZEOL Company (2025)", description: "Global project overview: progress, priority, deadlines, delayed projects, search by ID/code, task details.", technologies: ["Power BI", "SQL Server"] },
    { title: "Quality Control – Supply Chain – Live Dashboard", company: "OZEOL Company (2025)", description: "Hourly refresh: orders ready for QC, untreated reports, in-progress inspections, non-mandatory packaging.", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "Order Placement Request – Supply Chain – Live Dashboard", company: "OZEOL Company (2025)", description: "Hourly: TDB 1-9 covering samples, POs, deposits, delays in offer acceptance and PO reception.", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "NORMES – Supply Chain – Live Dashboard", company: "OZEOL Company (2025)", description: "Hourly: TDB 01-06 on orders in progress, packaging, test reports, untreated deposits, undefined tests.", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "FLOW DRIVE – Supply Chain – Live Dashboard", company: "OZEOL Company (2025)", description: "Hourly: 09 pages from booking requests to platform inspection. Initiated by KEPLER for process optimization.", technologies: ["Power BI", "SQL Server", "SSIS", "DAX"] },
    { title: "Instance 4 – BUM SC & Team", company: "OZEOL Company (2025)", description: "6 modules: CP/Transport, Non-Normed/Normed Orders, Logistics, Litigations, Turnover. For BUMs and teams.", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "Instance 5 – Job Referent & Team", company: "OZEOL Company (2025)", description: "17 delay KPIs across Normed/Non-Normed/Logistic orders. Includes booking, billing, litigation, TRC rates.", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "Instance 6 – BUM SC & ZM SC", company: "OZEOL Company (2025)", description: "9 pages: Billing, Transport, Orders, Logistics, TRC, Litigation, Transport Rate vs Taquet, Service Rate.", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "Instance 7 – ZM Operations & ZM Supply Chain", company: "OZEOL Company (2025)", description: "4 pages: Billing Rate, Booking Delays, Litigation Rate, Annulation Rate. For Zone Managers.", technologies: ["Power BI", "SQL Server"] },
    { title: "Instance 8 – BUM Supply Chain & BUM Operations", company: "OZEOL Company (2025)", description: "7 pages: Billing, Non-Normed/Normed Orders, Logistics, Litigation, Annulation, Booking Rate.", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "Finance Forecasting Dashboard", company: "OZEOL Company (2025)", description: "Predicts weekly payment needs using Deposit and Balance approaches. Covers all order types and statuses.", technologies: ["Power BI", "SQL Server", "SSIS"] },
    { title: "Digital Transformation – Data Engineering & Power BI Implementation", company: "Amsons Group / Camel Cement (Freelance, 2025)", description: "Led SSIS data flows (Staging → ODS → DWH). Supervised Power BI for Sales, Purchasing, Production, Stock.", technologies: ["Power BI", "SQL Server", "SSIS", "Excel"] }
];

// MODAL
const modal = document.getElementById('project-modal');
const closeBtn = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalCompany = document.getElementById('modal-company');
const modalDesc = document.getElementById('modal-description');
const modalTech = document.getElementById('modal-technologies');

document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => {
        const i = parseInt(card.getAttribute('data-project'));
        if (i >= 0 && i < projectData.length) {
            const p = projectData[i];
            modalTitle.textContent = p.title;
            modalCompany.textContent = p.company;
            modalDesc.innerHTML = `<p>${p.description}</p>`;
            modalTech.innerHTML = p.technologies.map(t => `<span class="project-tech"><span>${t}</span></span>`).join('');
            modal.classList.add('active');
        }
    });
});

closeBtn.onclick = () => modal.classList.remove('active');
modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('active'); };
