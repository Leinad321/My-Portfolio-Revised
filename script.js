// ── Scroll to Top Button ──────────────────────────────────────
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 400);
});

// ── Active Nav Link Highlight ─────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}`
      ? 'var(--gold)' : '';
  });
});

// ── Recommendation Form ───────────────────────────────────────
function addRecommendation() {
  const rec = document.getElementById('new_recommendation');
  const name = document.getElementById('rec-name');
  if (!rec.value || rec.value.trim() === '') return;

  const card = document.createElement('div');
  card.className = 'rec-card';
  card.style.animation = 'fadeUp 0.5s forwards';

  const author = name.value.trim() ? `— ${name.value.trim()}` : '— Anonymous';
  card.innerHTML = `
    <div class="rec-quote">"</div>
    <p>${rec.value.trim()}</p>
    <div class="rec-author">${author}</div>
  `;

  document.getElementById('all_recommendations').appendChild(card);
  rec.value = '';
  name.value = '';
  showPopup(true);
}

function showPopup(bool) {
  document.getElementById('popup').classList.toggle('visible', bool);
}

// ── Skill bar animation on scroll ────────────────────────────
const skillFills = document.querySelectorAll('.skill-fill');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.style.width;
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => {
  const targetWidth = fill.style.width;
  fill.style.width = '0%';
  observer.observe(fill);
  setTimeout(() => { fill.style.width = targetWidth; }, 300);
});

// ── Navbar shadow on scroll ───────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow =
    window.scrollY > 10 ? '0 4px 30px rgba(0,0,0,0.4)' : 'none';
});