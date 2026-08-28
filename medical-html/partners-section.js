/**
 * The Partners Section — vanilla JS
 * Scroll-triggered fade-up for each partner card
 */
(function () {
  var cards = document.querySelectorAll(".partners__card[data-animate]");

  if (!cards.length) return;

  cards.forEach(function (card, i) {
    card.style.transitionDelay = i * 0.08 + "s";
  });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    cards.forEach(function (card) {
      observer.observe(card);
    });
  } else {
    cards.forEach(function (card) {
      card.classList.add("is-visible");
    });
  }
})();
