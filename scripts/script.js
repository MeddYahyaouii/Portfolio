lucide.createIcons();

const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('active'));

window.addEventListener('scroll', () => {
    document.getElementById('scroll-progress').style.width = 
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 + '%';
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// FULL DESCRIPTIONS – EXACTLY AS YOU WROTE
const projectData = [
    {
        title: "Africa Cup Of Nations (Afcon) Insights Dashboard",
        company: "Mir Sport Football AGENCY (Freelance, 2022–2023)",
        description: `The dashboard covers 4 main areas: Afcon History, Afcon 2023 - 2024, the 2023 Best XI, and a detailed analysis of the last final between Ivory Coast and Nigeria.`,
        technologies: ["Power BI", "Python", "Excel"]
    },
    {
        title: "Mir Sport Football Players Catalogue",
        company: "Mir Sport Football AGENCY (Freelance, 2022–2023)",
        description: `Developed a Power BI dashboard for Mir Sport, using data from Transfermarkt.<br>
This innovative solution introduces a new way to sell players, combining data and KPIs to highlight each player’s market value and performance.<br>
The dashboard, shared directly with football clubs, allows them to explore, filter, and select players that fit their needs.<br>
It includes 4 interactive pages covering player insights, agency structure, analytics, and a 3D pitch view for top players.<br>
A modern data-driven approach that transforms football scouting and player sales.`,
        technologies: ["Power BI", "Python", "SQL Server"]
    },
    {
        title: "Industrial Cost Dashboard",
        company: "General Industrial Food Slama (CSM-GIAS) (2023–2024)",
        description: `The Industrial Cost Dashboard project focuses on analyzing the industrial cost of finished products (PF), calculated as the difference between the total cost and material costs (raw materials + packaging).<br>
The dashboard provides several KPIs to track and compare the industrial cost per product, including the contribution of semi-finished products (PFS) used in manufacturing.<br>
Another page allows for the analysis of industrial cost trends for products from 2002 to 2023, offering a comprehensive historical view of industrial performance.`,
        technologies: ["Power BI", "SQL Server", "SSIS", "DAX"]
    },
    {
        title: "HR Dashboard",
        company: "General Industrial Food Slama (CSM-GIAS) (2023–2024)",
        description: `The HR Dashboard provides a comprehensive view of workforce management across four companies.<br>
<strong>Page 1 – Overview:</strong> Displays the number of employees by gender, employment status (permanent, contractual, subsidized), and grade (executive, supervisory, operational). Includes tenure, average age, and age distribution by gender.<br>
<strong>Page 2 – Evolution:</strong> Tracks workforce evolution by company, grade, and gender, with filters by year and month.<br>
<strong>Page 3 – Social Fund:</strong> Allows employee lookup by ID to view administrative status, leave balance, social fund affiliation, fund balance, remaining payables, and ongoing loans.<br>
<strong>Page 4 – Recruitment:</strong> Shows recruitment numbers by gender, grade, contract type, and reason for recruitment (replacement or new position).<br>
The dashboard enables HR teams to analyze trends, monitor workforce distribution, and manage social fund data efficiently.`,
        technologies: ["Power BI", "SQL Server", "SSIS"]
    },
    {
        title: "Employee Device Management Dashboard",
        company: "General Industrial Food Slama (CSM-GIAS) (2023–2024)",
        description: `The Employee Device Management Dashboard helps the IT team manage company phone allocations. Each employee is eligible for a new phone every three years, and the dashboard tracks eligibility, remaining days until the next device, and the history of previous phones.<br>
It also assists in managing stock and planning new orders. The dashboard is dynamic and modern, visually displaying phone models and brands in an interactive format, making device management efficient and user-friendly.`,
        technologies: ["Power BI", "SQL Server"]
    },
    {
        title: "ETL JOBS Performance",
        company: "General Industrial Food Slama (CSM-GIAS) (2023–2024)",
        description: `The SSIS Jobs Monitoring Dashboard enables analysis of SSIS jobs across three servers. It tracks the number of failed jobs, identifies which jobs failed, and pinpoints the failure step along with execution times.<br>
The dashboard also provides daily success/failure ratios and a 30-day historical view, helping the IT team monitor performance, quickly detect issues, and optimize job reliability.`,
        technologies: ["Power BI", "SQL Server", "SSIS"]
    },
    {
        title: "SAGE X3 SQL VIEWS",
        company: "General Industrial Food Slama (CSM-GIAS) (2023–2024)",
        description: `The SQL Views Access Dashboard provides insight into database views linked to Sage X3. Each department has a user granted access to specific views, and the dashboard allows tracking and analysis of this access.<br>
<strong>Page 1 – View Lookup:</strong> Search for a specific view to see how many users have access, creation date, and last modification date.<br>
<strong>Page 2 – User-View Interaction:</strong> A dynamic pie chart visualizes the relationship between views and users.<br>
<strong>Page 3 – Column Search:</strong> Allows searching for a specific column and identifies all views containing that column.<br>
This dashboard helps teams monitor access, track modifications, and understand data distribution efficiently.`,
        technologies: ["Power BI", "SQL Server"]
    },
    {
        title: "On Time In Full (OTIF) Dashboard",
        company: "General Industrial Food Slama (CSM-GIAS) (2023–2024)",
        description: `The OTIF Dashboard is designed to provide a comprehensive analysis of delivery performance across the organization. It tracks the evolution of OTIF over time, by year and month, using 95% as the target benchmark for performance assessment.<br>
The dashboard allows detailed analysis across multiple dimensions:<br>
• <strong>By Brand:</strong> Shows OTIF percentages per brand, helping identify top and underperforming brands.<br>
• <strong>By Depot:</strong> Monitors OTIF for over 60 depots, comparing performance relative to the number of orders handled.<br>
• <strong>By Market:</strong> Breaks down performance between local and export markets.<br>
• <strong>By Product Family:</strong> Tracks OTIF for categories such as raw materials, packaging, and finished products, providing insights into delivery reliability for each segment.<br>
Key metrics include OTIF percentage, number of orders, and in-full delivery ratios, visualized using interactive tiles, charts, and trend lines. Users can apply filters by company, product family, and depot to drill down into specific performance areas.<br>
By consolidating this data, the dashboard enables operations and supply chain teams to identify bottlenecks, monitor delivery efficiency, and make informed decisions to improve overall OTIF performance.`,
        technologies: ["Power BI", "SQL Server", "SSIS"]
    },
    {
        title: "GLPI Tickets",
        company: "OZEOL Company (2025)",
        description: `The GLPI IT Tickets Dashboard provides a comprehensive view of IT service requests, enabling real-time monitoring and detailed analysis.<br>
• <strong>Page 1 – Ticket Overview:</strong> Displays new, assigned, pending, resolved, and total open tickets. Tracks the monthly and yearly evolution of ticket volumes. Shows daily ticket counts updated hourly in real time, a sunburst chart by ticket category, resolution time visualization (1–2 days, 2–3 days… more than 7 days), and a dynamic globe map showing ticket origins. Filters are available by period, category, and technician.<br>
• <strong>Page 2 – Technicians/Intervenants:</strong> Analyzes tickets handled by each technician, including single, double, triple, quadruple, and multiple assignments, with detailed lists of assigned tickets.<br>
• <strong>Page 3 – Ticket History:</strong> Provides a detailed log for each ticket, including opening date, acknowledgment, resolution date, TTR (Time to Resolve), closure date, SLA compliance, resolution delays, and closure delays. Includes lists of intervenants and requesters, and allows search by ticket title or GLPI ticket number.<br>
This dashboard enables IT teams to monitor workload, track performance, identify bottlenecks, and improve response and resolution times efficiently.`,
        technologies: ["Power BI", "SQL Server", "SSIS"]
    },
    {
        title: "GLPI Projects Analysis",
        company: "OZEOL Company (2025)",
        description: `The GLPI Projects Analysis Dashboard is a comprehensive Power BI solution that provides a global overview of company projects. It analyzes project progress rates, priorities, and deadline compliance, showing key metrics such as the number of projects, their completion percentage (0%–100%), and annual distribution. A dedicated section highlights delayed projects with detailed information.<br>
The dashboard also includes a search page allowing users to find specific projects by title, project code, or ID, displaying essential details such as creation date, priority, status, progress, supervisors, planned and actual start dates, and team members. Finally, a detailed view presents each project’s tasks, including task name, type, and status, providing full visibility into project execution and team performance.`,
        technologies: ["Power BI", "SQL Server"]
    },
    {
        title: "Quality Control – Supply Chain – Live Dashboard",
        company: "OZEOL Company (2025)",
        description: `The Quality Control – Supply Chain – Live Dashboard is a real-time Power BI solution designed for the quality control team within the supply chain. The dashboard refreshes every hour, enabling continuous monitoring of operational flows and supporting process optimization initiatives led by KEPLER, a strategic audit partner.<br>
It includes multiple pages, each focusing on a specific aspect of the quality control process, such as:<br>
• Orders Ready for QC Inspection<br>
• Orders Without QC Request (Ningbo Warehouse)<br>
• Orders With QC Requested But No Inspection Date<br>
• Orders With QC Requested and Inspections Scheduled (within 4 days)<br>
• Orders With Received But Untreated Inspection Reports<br>
• In-progress Inspections<br>
• Conformity Samples Follow-up<br>
• Non-mandatory Orders Without Approved Packaging<br>
• Orders With Loading Check Reports Received But Not Approved<br>
This dashboard provides a comprehensive and live view of inspection activities, ensuring better visibility, faster reaction, and improved supply chain efficiency.`,
        technologies: ["Power BI", "SQL Server", "SSIS"]
    },
    {
        title: "Order Placement Request – Supply Chain – Live Dashboard",
        company: "OZEOL Company (2025)",
        description: `The Order Placement Request – Supply Chain – Live Dashboard is a real-time Power BI solution designed for the quality control team within the supply chain. The dashboard refreshes every hour, enabling continuous monitoring of operational flows and supporting process optimization initiatives led by KEPLER, a strategic audit partner.<br>
It includes multiple pages, each focusing on a specific aspect of the quality control process, such as:<br>
• TDB 1 - Samples affair<br>
• TDB 2 - Samples offer<br>
• TDB 3 - Orders to manage<br>
• TDB 4 - PO to manage (send / recept)<br>
• TDB 5 - Unsent deposit (non normative)<br>
• TDB 6 - Deposit in stand by<br>
• TDB 7 - Delay for offers to be accepted<br>
• TDB 8 - Delay of offers from accepted to order status<br>
• TDB 9 - Delay of received PO`,
        technologies: ["Power BI", "SQL Server", "SSIS"]
    },
    {
        title: "NORMES – Supply Chain – Live Dashboard",
        company: "OZEOL Company (2025)",
        description: `The NORMES – Supply Chain – Live Dashboard is a real-time Power BI solution designed for the quality control team within the supply chain. The dashboard refreshes every hour, enabling continuous monitoring of operational flows and supporting process optimization initiatives led by KEPLER, a strategic audit partner.<br>
It includes multiple pages, each focusing on a specific aspect of the quality control process, such as:<br>
• TDB 01 - ORDERS IN PROGRESS<br>
• TDB 02 - PACKAGING IN PROGRESS<br>
• TDB 03 - ALERT TEST REPORT VALIDATION<br>
• TDB 04 - ALERT PACKAGING VALIDATED<br>
• TDB 05 - UNTREATED DEPOSIT<br>
• TDB 06 - UNDEFINED TEST REQUIREMENT`,
        technologies: ["Power BI", "SQL Server", "SSIS"]
    },
    {
        title: "FLOW DRIVE – Supply Chain – Live Dashboard",
        company: "OZEOL Company (2025)",
        description: `The FLOW DRIVE – Supply Chain – Live Dashboard is a real-time Power BI solution developed to enhance visibility and performance monitoring across the supply chain. Specifically designed for the quality control and logistics teams, the dashboard automatically refreshes every hour, ensuring that all stakeholders have up-to-date insights on ongoing operations.<br>
This project was initiated at the request of KEPLER, a strategic audit and consulting partner, with the goal of optimizing supply chain processes, reducing delays, and improving decision-making efficiency.<br>
The dashboard is structured around several pages, each addressing a specific area of operational flow:<br>
• 01 – Booking Request: Tracks and monitors all new booking requests.<br>
• 02 – Payment Term of Booked Orders: Analyzes payment terms and their impact on order processing.<br>
• 03 – Remind Booking: Highlights pending or delayed bookings requiring follow-up.<br>
• 04 – Orders to be Invoiced: Lists orders awaiting invoicing validation.<br>
• 05 – Remind Telex Release: Identifies shipments pending Telex release confirmation.<br>
• 06 – REALISATION / BDG: Compares realized versus budgeted performance metrics.<br>
• 07 – Invoiced Orders to be Sent: Displays invoiced orders pending dispatch.<br>
• 08 – Orders Missing Swift Date: Detects financial transactions missing Swift date updates.<br>
• 09 – Orders with Platform Inspection: Follows up on orders undergoing platform inspection procedures.<br>
By consolidating all these KPIs into a single interactive environment, the FLOW DRIVE Dashboard empowers the quality control and supply chain teams to track performance in real time, anticipate bottlenecks, and enhance overall operational efficiency.`,
        technologies: ["Power BI", "SQL Server", "SSIS", "DAX"]
    },
    {
        title: "Instance 4 – BUM SC & Team",
        company: "OZEOL Company (2025)",
        description: `The Instance 4 – Supply Chain Operational Dashboard is a Power BI solution designed for Business Unit Managers (BUMs) and their teams to monitor and improve supply chain performance through actionable insights.<br>
The dashboard delivers a comprehensive operational and financial overview, combining indicators from order management, logistics, transport, disputes, and turnover. It enables each BUM to track performance within their scope, identify process delays, and drive operational excellence based on reliable data refreshed regularly.<br>
The solution is organized into six main analytical modules:<br>
• P1 – CP / Transport: Compares revenue realization vs budget and evaluates transport invoiced vs transport budgeted.<br>
• P2 – Non-Normed Orders: Tracks lead times and workflow performance for non-standardized orders.<br>
• P3 – Normed Orders: Monitors standardized order processes, from validation to delivery.<br>
• P4 – Logistics: Analyzes booking and delivery cycles to optimize planning and transport efficiency.<br>
• P5 – Litigations: Summarizes dispute cases for better visibility and resolution follow-up.<br>
• P6 – Turnover: Measures supply chain turnover and performance across business units.<br>
A centralized homepage ensures smooth navigation and quick access to key KPIs. By combining financial, operational, and quality insights, the Instance 4 Dashboard empowers managers to monitor performance in real time, reduce inefficiencies, and align operational outcomes with strategic goals.`,
        technologies: ["Power BI", "SQL Server", "SSIS"]
    },
    {
        title: "Instance 5 – Job Referent & Team",
        company: "OZEOL Company (2025)",
        description: `The Instance 5 – Supply Chain Performance Dashboard is an advanced Power BI solution developed to monitor and analyze the efficiency of supply chain operations through detailed tracking of order processing flows. It covers three main categories — Normed Orders, Non-Normed Orders, and Logistic Orders — each governed by specific business rules to accurately calculate process delays at every stage, from order validation to delivery.<br>
In total, 17 operational delay indicators were designed with precise calculation logic, incorporating conditional rules between validation, packaging, inspection, and shipment steps. The results are visualized through dynamic bar charts, color-coded performance thresholds (green/red), and interactive matrices, ensuring a clear understanding of process timelines. Beyond operational tracking, the dashboard also integrates key business performance KPIs, including:<br>
• Booking & Billing Orders Rate – Ratio of booked to validated CQ orders.<br>
• Billing Target Achievement Rate – Comparison of actual vs budgeted revenue (CP & Transport).<br>
• Billing Error Rate – Canceled invoices relative to total processed invoices.<br>
• Litigation Rate – Dispute amount vs total delivered orders.<br>
• Annulation Rate – Canceled orders vs finalized orders.<br>
• Container Loading Rate (TRC) – Delivered volume vs total container capacity.`,
        technologies: ["Power BI", "SQL Server", "SSIS"]
    },
    {
        title: "Instance 6 – BUM SC & ZM SC",
        company: "OZEOL Company (2025)",
        description: `The Instance 6 – Supply Chain Operational Dashboard is a Power BI solution designed to empower Business Unit Managers (BUMs) and Zone Managers (ZMs) to monitor, analyze, and improve supply chain performance through actionable insights. The dashboard provides a comprehensive and interactive view of key operational and financial metrics, allowing management teams to identify bottlenecks, track KPIs, and make informed decisions.<br>
The dashboard is organized across multiple pages, each focused on specific aspects of supply chain operations:<br>
• P1 – Billing Achievement – Tracks revenue versus targets to evaluate financial performance.<br>
• P2 – Transport – Analyzes transport efficiency, delivery times, and associated costs.<br>
• P3 – Non-Normed Orders (CMD NON NORMEE) – Monitors orders that do not follow standard procedures.<br>
• P4 – Normed Orders (CMD NORMEE) – Monitors standard orders with defined processing rules.<br>
• P5 – Logistics – Tracks logistic operations, including bookings, shipments, and delivery timelines.<br>
• P6 – Container Loading Rate (TRC) – Measures container utilization and loading efficiency.<br>
• P7 – Litigation Rate – Monitors disputes and their financial impact.<br>
• P8 – Estimated Transport Rate vs Taquet Rate – Compares the estimated transport cost provided by the buyer in the Taquet sheet with the transport estimate from the logistician<br>
• P9 – Service Rate containing ETA date and more details`,
        technologies: ["Power BI", "SQL Server", "SSIS"]
    },
    {
        title: "Instance 7 – ZM Operations & ZM Supply Chain",
        company: "OZEOL Company (2025)",
        description: `The Instance 7 – ZM Operations & ZM Supply Chain Dashboard is a Power BI solution designed to provide Zone Managers (ZMs) with a comprehensive view of their operational and supply chain performance. This dashboard enables ZMs to monitor key KPIs, identify bottlenecks, and take proactive actions to improve efficiency across their zones.<br>
The dashboard is structured across multiple pages:<br>
• P1 – Billing Rate – Tracks the billing completion rate and revenue performance within each zone.<br>
• P2 – Booking Delays – Monitors delays in order bookings and identifies potential workflow issues.<br>
• P3 – Litigation Rate – Measures disputes and their impact on operations for each zone.<br>
• P4 – Annulation Rate – Tracks order cancellations and analyzes trends to support corrective measures.<br>
By consolidating operational and supply chain metrics into an interactive and role-specific dashboard, ZMs can quickly assess performance, monitor trends, and ensure alignment with business objectives.`,
        technologies: ["Power BI", "SQL Server"]
    },
    {
        title: "Instance 8 – BUM Supply Chain & BUM Operations",
        company: "OZEOL Company (2025)",
        description: `The Instance 8 – BUM Supply Chain & BUM Operations Dashboard is a Power BI solution designed to provide Business Unit Managers (BUMs) with a comprehensive and actionable view of their operational and supply chain performance. This dashboard enables BUMs to monitor key KPIs, track orders, and take corrective actions to improve efficiency across their business units.<br>
The dashboard is organized across multiple pages:<br>
• P1 – Billing Rate – Tracks billing performance and revenue achievement within the BUM.<br>
• P2 – Non-Normed Orders (CMD NON NORMEE) – Monitors orders that do not follow standard procedures and identifies delays.<br>
• P3 – Normed Orders (CMD NORMEE) – Monitors standard orders with defined processing rules.<br>
• P4 – Logistics – Tracks bookings, shipments, and delivery timelines for operational efficiency.<br>
• P5 – Litigation Rate – Measures disputes and their impact on operational performance.<br>
• P6 – Annulation Rate – Tracks canceled orders and analyzes trends to support corrective measures.<br>
• P7 – Booking Rate – Monitors the percentage of orders successfully booked and validated.<br>
With interactive visualizations, dynamic filters, and real-time insights, the Instance 8 Dashboard empowers BUMs to quickly assess operational performance, monitor KPIs, and ensure alignment with business objectives across the supply chain`,
        technologies: ["Power BI", "SQL Server", "SSIS"]
    },
    {
        title: "Finance Forecasting Dashboard",
        company: "OZEOL Company (2025)",
        description: `The Finance Forecasting Dashboard is a Power BI solution designed to help the finance team anticipate payment needs and allocate funds efficiently, minimizing risks of delayed payments. The dashboard calculates forecast dates using two approaches: the Deposit Approach and the Balance Approach, depending on the order type and status.<br>
It covers multiple scenarios, including:<br>
• Normed Orders (Deposit Approach)<br>
• Non-Normed Orders (Deposit Approach)<br>
• Orders with Last ETD Provided (Balance Approach)<br>
• Orders without ETD but with Booking Date (Balance Approach)<br>
• Orders with Validated CQ, Received CQ, or Scheduled CQ (Balance Approach)<br>
• Normed Orders with RT not validated or with RT missing info (Balance Approach)<br>
• Normed Orders with RT validated and conditions on SWIFT or SWIFT request dates (Balance Approach)<br>
The main objective of this dashboard is to predict the week in which a specific amount needs to be allocated by the finance team for each offer, ensuring payment deadlines are met and cash flow is properly managed. By consolidating these calculations into an interactive and dynamic view, finance managers can quickly identify urgent payments, plan weekly allocations, and prevent potential payment issues.`,
        technologies: ["Power BI", "SQL Server", "SSIS"]
    },
    {
        title: "Digital Transformation – Data Engineering & Power BI Implementation",
        company: "Amsons Group / Camel Cement (Freelance, 2025)",
        description: `As part of Amsons Group’s digital transformation initiative, I led the data engineering stream using SQL Server Integration Services (SSIS) to design and manage end-to-end data flows across the Staging, ODS, and Data Warehouse layers.<br>
This foundational work ensured reliable, clean, and structured data pipelines to support the group’s new Business Intelligence environment.<br>
In parallel, I supervised the Power BI project for Camel Cement, developing comprehensive dashboards that cover the company’s key operational domains:<br>
• Sales performance tracking<br>
• Purchase and supplier management<br>
• Production monitoring and performance metrics<br>
• Stock management and inventory optimization<br>
This project significantly improved data accessibility, enabled real-time decision-making, and unified multiple departments around a single source of truth.`,
        technologies: ["Power BI", "SQL Server", "SSIS", "Excel"]
    }
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
            modalDesc.innerHTML = `<p>${p.description.replace(/\n/g, '<br>')}</p>`;
            modalTech.innerHTML = p.technologies.map(t => `<span class="project-tech"><span>${t}</span></span>`).join('');
            modal.classList.add('active');
        }
    });
});

closeBtn.onclick = () => modal.classList.remove('active');
modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('active'); };
