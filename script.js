/* ── Mobile nav toggle ── */
const toggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
    });
});

/* ── Typewriter effect for hero name ── */
const nameEl = document.querySelector('.hero-name');
if (nameEl) {
    const fullText = nameEl.textContent.trim();
    nameEl.textContent = '';

    let i = 0;
    const type = () => {
        if (i < fullText.length) {
            nameEl.textContent += fullText[i++];
            setTimeout(type, 55 + Math.random() * 30);
        } else {
            setTimeout(() => nameEl.classList.add('done'), 900);
        }
    };
    setTimeout(type, 350);
}

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle(
                    'active',
                    link.getAttribute('href') === `#${entry.target.id}`
                );
            });
        }
    });
}, { rootMargin: '-35% 0px -65% 0px' });

sections.forEach(s => sectionObserver.observe(s));
