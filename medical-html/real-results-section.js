/**
 * Real Results Section — vanilla JS
 * Before/After comparison slider
 */
(function () {
  var range = document.getElementById("ba-range");
  var beforeWrap = document.getElementById("ba-before-wrap");
  var beforeImg = document.getElementById("ba-before-img");
  var divider = document.getElementById("ba-divider");

  if (!range || !beforeWrap || !beforeImg || !divider) return;

  function update(pos) {
    // pos is 0–100
    beforeWrap.style.width = pos + "%";
    divider.style.left = pos + "%";

    // Keep before image at full visual width of the slider
    // so it doesn't squash as the clip narrows
    if (pos > 0) {
      beforeImg.style.width = 100 / (pos / 100) + "%";
    } else {
      beforeImg.style.width = "10000%"; // effectively hide
    }
  }

  // Initial state
  update(Number(range.value));

  range.addEventListener("input", function () {
    update(Number(range.value));
  });

  // Also support mouse/touch drag on the whole area via the range input
  // (already covered by the full-size transparent range)
})();
