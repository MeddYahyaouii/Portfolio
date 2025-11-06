// script.js — defensive + smooth scroll + mobile nav + contact demo

(function(){
  // helper: safe query
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  // smooth scroll for internal links
  document.addEventListener('click', function(e){
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (href === '#' || href === '#!' ) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Mobile nav toggle (if you add a button with id 'navToggle')
  const navToggle = $('#navToggle'); // optional
  const navLinks = $('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // Contact form: fallback to mailto (safe & works without backend)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(ev){
      ev.preventDefault();
      const fm = new FormData(contactForm);
      const name = (fm.get('name') || fm.get('Name') || '').trim();
      const email = (fm.get('email') || fm.get('Email') || '').trim();
      const subject = (fm.get('subject') || fm.get('Subject') || 'Portfolio Contact').trim();
      const message = (fm.get('message') || fm.get('Message') || '').trim();

      // minimal validation
      if (!email || !message) {
        alert('Please provide at least an email and a message.');
        return;
      }

      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      const mailto = `mailto:meddyahyaouii@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      // open mail client
      window.location.href = mailto;
    });
  }

  // Console-friendly message
  console.info('script.js loaded — smooth scroll active. If UI elements missing, verify selectors.');

})();
