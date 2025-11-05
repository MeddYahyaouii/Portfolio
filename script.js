/* script.js
  - auto-populates the 12 projects using data from the portfolio prompt
  - handles lightbox modal gallery and contact form (demo)
*/

const projects = [
  {
    id: "flow-drive",
    title: "Flow Drive Dashboard",
    company: "OZEOL – Tunisia",
    desc: "Real-time Power BI solution tracking booking, invoicing, and logistics KPIs across departments. Improved operational visibility and reduced delays.",
    tech: ["Power BI","SQL Server","SSIS","SAP","Selligent"],
    thumbs: ["assets/flow1.jpg","assets/flow2.jpg","assets/flow3.jpg","assets/flow4.jpg"]
  },
  {
    id: "instance-6",
    title: "Instance 6 – BUM SC & ZM SC Dashboard",
    company: "OZEOL – Tunisia",
    desc: "Provides Business Unit and Zone Managers with KPIs on billing, transport, and container rates.",
    tech: ["Power BI","SQL Server","SSIS","SAP"],
    thumbs: ["assets/inst6_1.jpg","assets/inst6_2.jpg","assets/inst6_3.jpg"]
  },
  {
    id: "instance-4",
    title: "Instance 4 – BUM SC & Team Dashboard",
    company: "OZEOL – Tunisia",
    desc: "Consolidates turnover, logistics, and disputes KPIs for supply chain managers.",
    tech: ["Power BI","SQL Server","SSIS","SAP"],
    thumbs: ["assets/inst4_1.jpg","assets/inst4_2.jpg"]
  },
  {
    id: "qc-supply",
    title: "Quality Control – Supply Chain Live Dashboard",
    company: "OZEOL",
    desc: "Monitors QC processes, packaging validations, and inspection progress in real time.",
    tech: ["Power BI","SQL Server","SSIS","SAP"],
    thumbs: ["assets/qc1.jpg","assets/qc2.jpg"]
  },
  {
    id: "finance-forecast",
    title: "Finance Forecasting Dashboard",
    company: "OZEOL",
    desc: "Predicts weekly payment needs and optimizes cash flow via automated Power BI forecasting models.",
    tech: ["Power BI","SQL Server","SSIS","Excel"],
    thumbs: ["assets/finance1.jpg","assets/finance2.jpg"]
  },
  {
    id: "ssis-monitor",
    title: "SSIS ETL Jobs Monitoring Dashboard",
    company: "OZEOL",
    desc: "Tracking ETL job success/failure rates across servers to improve reliability.",
    tech: ["Power BI","SQL Server","SSIS"],
    thumbs: ["assets/ssismon1.jpg","assets/ssismon2.jpg"]
  },
  {
    id: "industrial-cost",
    title: "Industrial Cost Dashboard",
    company: "CSM-GIAS (Groupe Slama)",
    desc: "Analyzes cost per product and material to optimize production efficiency.",
    tech: ["Power BI","SQL Server","SSIS","SSRS","Sage X3"],
    thumbs: ["assets/cost1.jpg","assets/cost2.jpg"]
  },
  {
    id: "hr-dashboard",
    title: "HR Dashboard",
    company: "CSM-GIAS",
    desc: "Monitors workforce data (gender, seniority, contracts, social funds) across entities.",
    tech: ["Power BI","SQL Server","SSIS","Sage X3"],
    thumbs: ["assets/hr1.jpg","assets/hr2.jpg"]
  },
  {
    id: "etl-performance",
    title: "ETL Automation Jobs – SSIS Performance",
    company: "CSM-GIAS",
    desc: "Visualizes job durations and error frequencies to enhance SSIS performance.",
    tech: ["Power BI","SQL Server","SSIS"],
    thumbs: ["assets/etlperf1.jpg","assets/etlperf2.jpg"]
  },
  {
    id: "players-catalogue",
    title: "Football Players Catalogue Dashboard",
    company: "MIRSPORT – Dubai",
    desc: "Aggregates player data for scouting using web-scraped sources and Power BI visualizations.",
    tech: ["Power BI","Python","SQL Server"],
    thumbs: ["assets/players1.jpg","assets/players2.jpg"]
  },
  {
    id: "afcon-insights",
    title: "AFCON Insights Dashboard",
    company: "MIRSPORT",
    desc: "Analyzes Cup of Nations data — team performance, best XI, and match analytics.",
    tech: ["Power BI","Python","Excel"],
    thumbs: ["assets/afcon1.jpg","assets/afcon2.jpg"]
  },
  {
    id: "amsons-digital",
    title: "Digital Transformation – BI Implementation",
    company: "Amsons Group / Camel Cement – Tanzania",
    desc: "Led data modernization with SSIS pipelines (Staging → ODS → DWH) and Power BI dashboards.",
    tech: ["Power BI","SQL Server","SSIS","Excel"],
    thumbs: ["assets/amsons1.jpg","assets/amsons2.jpg"]
  }
];

// Render project cards
const projectsGrid = document.getElementById('projectsGrid');

function createProjectCard(p){
  const card = document.createElement('article');
  card.className = 'project-card';
  card.innerHTML = `
    <img class="project-thumb" src="${p.thumbs[0]}" alt="${p.title} thumbnail" loading="lazy">
    <div class="project-body">
      <h4 class="project-title">${p.title}</h4>
      <div class="project-meta">${p.company}</div>
      <p>${p.desc}</p>
      <div class="project-tech">${p.tech.map(t => `<span>${t}</span>`).join(' • ')}</div>
      <div style="margin-top:10px">
        <button class="btn primary view-project" data-id="${p.id}">View Project</button>
      </div>
    </div>
  `;
  return card;
}

projects.forEach(p => {
  const el = createProjectCard(p);
  projectsGrid.appendChild(el);
});

// Modal / Lightbox
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

projectsGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('.view-project');
  if (!btn) return;
  const pid = btn.dataset.id;
  const p = projects.find(x => x.id === pid);
  openModal(p);
});

function openModal(project){
  modalBody.innerHTML = `<h3>${project.title} — <small>${project.company}</small></h3>
    <p>${project.desc}</p>
    <div class="gallery"></div>
    <p><strong>Technologies:</strong> ${project.tech.join(', ')}</p>
  `;
  const gallery = modalBody.querySelector('.gallery');
  project.thumbs.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `${project.title} image`;
    img.loading = 'lazy';
    gallery.appendChild(img);
  });
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

function closeModal(){
  modal.setAttribute('aria-hidden','true');
  modalBody.innerHTML = '';
  document.body.style.overflow = '';
}

// CONTACT FORM (demo behaviour: validates and opens mailto)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(contactForm);
  const name = fd.get('name').trim();
  const email = fd.get('email').trim();
  const subject = fd.get('subject').trim();
  const message = fd.get('message').trim();
  if (!name || !email || !subject || !message) {
    alert('Please complete all fields.');
    return;
  }
  // Create a mailto as a simple delivery mechanism for GitHub Pages (no backend)
  const mailto = `mailto:meddyahyaouii@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
  window.location.href = mailto;
});

// Smooth scroll for header links
document.querySelectorAll('.main-nav a, .hero-actions a').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({behavior:'smooth',block:'start'});
  });
});
