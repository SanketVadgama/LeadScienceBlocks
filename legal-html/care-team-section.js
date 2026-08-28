/**
 * Care Team Section — vanilla JS
 * Scroll-triggered fade-up for each card (replaces motion/react whileInView)
 */
(function () {
  const cards = document.querySelectorAll(".care-team__card[data-animate]");

  if (!cards.length) return;

  // Stagger delays matching original (i * 0.08s)
  cards.forEach(function (card, i) {
    card.style.transitionDelay = i * 0.08 + "s";
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    cards.forEach(function (card) {
      observer.observe(card);
    });
  } else {
    // Fallback: show everything
    cards.forEach(function (card) {
      card.classList.add("is-visible");
    });
  }
})();
