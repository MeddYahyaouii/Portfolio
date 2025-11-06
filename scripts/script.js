// Lucide icons
lucide.createIcons();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll progress
const progress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
    const percent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    progress.style.width = percent + '%';
});

// Mobile menu
const menuBtn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => menu.classList.toggle('active'));
document.querySelectorAll('.mobile-menu a').forEach(l => {
    l.addEventListener('click', () => menu.classList.remove('active'));
});

// Portfolio modal
const projectData = [ /* <-- paste the whole array you already have --> */ ];

const modal = document.getElementById('project-modal');
const close = document.getElementById('modal-close');
const title = document.getElementById('modal-title');
const company = document.getElementById('modal-company');
const desc = document.getElementById('modal-description');
const techs = document.getElementById('modal-technologies');

document.querySelectorAll('.portfolio-card').forEach((c, i) => {
    c.addEventListener('click', () => {
        const p = projectData[i];
        title.textContent = p.title;
        company.textContent = p.company;
        desc.innerHTML = `<p>${p.description}</p>`;
        techs.innerHTML = p.technologies.map(t => `<span class="project-tech"><span>${t}</span></span>`).join('');
        modal.classList.add('active');
    });
});

close.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });

// Contact form (demo)
document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();
    if (!name || !email || !msg) return alert('Please fill all required fields.');
    alert('Message sent! (demo)');
    e.target.reset();
});
