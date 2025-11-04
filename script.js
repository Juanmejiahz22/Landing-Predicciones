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

