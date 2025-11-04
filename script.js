const btn = document.getElementById("telegramBtn");

if (btn) {
  btn.addEventListener("click", (e) => {
    console.log("telegramBtn clicked", { tag: btn.tagName });

    if (btn.tagName && btn.tagName.toLowerCase() === "a") {
      return;
    }

    window.location.href = "https://t.me/+fzyyyIPlGNswY2Jh";
  });
} else {
  console.warn("telegramBtn not found in DOM");
}

/* Simple carousel logic: auto-advance, prev/next controls, pause on hover */
(function () {
  const carousel = document.getElementById('carousel');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.slide'));
  if (slides.length === 0) return;

  let current = slides.findIndex(s => s.classList.contains('active'));
  if (current === -1) current = 0;

  const intervalMs = 4000;
  let timer = null;

  function show(idx) {
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    current = idx;
  }

  function next() { show((current + 1) % slides.length); }
  function prev() { show((current - 1 + slides.length) % slides.length); }

  // start autoplay
  timer = setInterval(next, intervalMs);

  // pause on hover/focus
  carousel.addEventListener('mouseover', () => clearInterval(timer));
  carousel.addEventListener('mouseleave', () => { clearInterval(timer); timer = setInterval(next, intervalMs); });

  const btnPrev = carousel.querySelector('.carousel-btn.prev');
  const btnNext = carousel.querySelector('.carousel-btn.next');
  if (btnPrev) btnPrev.addEventListener('click', () => { prev(); clearInterval(timer); timer = setInterval(next, intervalMs); });
  if (btnNext) btnNext.addEventListener('click', () => { next(); clearInterval(timer); timer = setInterval(next, intervalMs); });
})();

/* Lightbox: open clicked slide in full preview */
(function () {
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  if (!lightbox || !lbImg) return;

  // open when clicking the visible carousel image
  document.querySelectorAll('.carousel .slide').forEach(slide => {
    slide.addEventListener('click', (e) => {
      // use the event's currentTarget to ensure we get the element that the
      // listener was registered on (and that has pointer-events enabled)
      const el = e.currentTarget || slide;
      const src = (el && el.tagName && el.tagName.toLowerCase() === 'img') ? el.src : el.getAttribute('src');
      if (!src) return;
      lbImg.src = src;
      // set alt if present
      lbImg.alt = el.alt || 'Imagen ampliada';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  // close helpers
  const close = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lbImg.src = '';
    document.body.style.overflow = '';
  };

  // close button
  const closeBtn = lightbox.querySelector('.lightbox-close');
  if (closeBtn) closeBtn.addEventListener('click', close);

  // click backdrop to close
  const backdrop = lightbox.querySelector('.lightbox-backdrop');
  if (backdrop) backdrop.addEventListener('click', close);

  // ESC to close
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape' && lightbox.classList.contains('open')) close();
  });
})();

