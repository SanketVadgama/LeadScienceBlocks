/**
 * Practice Areas Section — vanilla JS
 * Hover a list item → update the sticky preview image + label
 */
(function () {
  var items = document.querySelectorAll(".practice-areas__item");
  var img = document.getElementById("practice-preview-img");
  var label = document.getElementById("practice-preview-label");

  if (!items.length || !img || !label) return;

  items.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      // active state
      items.forEach(function (el) {
        el.classList.remove("is-active");
      });
      item.classList.add("is-active");

      var src = item.getAttribute("data-img");
      var name = item.getAttribute("data-name");
      if (!src) return;

      // fade out → swap → fade in
      img.classList.add("is-fading");

      setTimeout(function () {
        img.src = src;
        img.alt = name || "";
        label.textContent = name || "";
        img.classList.remove("is-fading");
      }, 280);
    });
  });
})();
