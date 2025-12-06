import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const ageGate = document.getElementById('age-gate');
  const btnEnter = document.getElementById('btn-enter');
  const btnLeave = document.getElementById('btn-leave');
  const header = document.getElementById('main-header');

  // AGE GATE LOGIC
  const isVerified = localStorage.getItem('hemp_headz_age_verified');

  if (isVerified === 'true') {
    ageGate.classList.add('hidden');
    document.body.style.overflow = 'auto'; // allow scroll
  } else {
    document.body.style.overflow = 'hidden'; // prevent scroll behind modal
  }

  btnEnter.addEventListener('click', () => {
    localStorage.setItem('hemp_headz_age_verified', 'true');
    ageGate.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });

  btnLeave.addEventListener('click', () => {
    window.location.href = 'https://www.google.com';
  });

  // HEADER SCROLL EFFECT
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // PARALLAX EFFECT HERO
  const hero = document.getElementById('hero');
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if (scroll < 800) {
      // Move background slightly
      document.body.style.backgroundPositionY = `${scroll * 0.5}px`;
    }
  });
});
