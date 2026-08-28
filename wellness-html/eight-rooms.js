(function () {
  var items = document.querySelectorAll(".sanctuary__item");
  var img = document.getElementById("space-img");
  var tag = document.getElementById("space-tag");
  var name = document.getElementById("space-name");
  var desc = document.getElementById("space-desc");

  if (!items.length || !img) return;

  function activate(item) {
    items.forEach(function (el) { el.classList.remove("is-active"); });
    item.classList.add("is-active");

    var src = item.getAttribute("data-img");
    var n = item.getAttribute("data-name");
    var t = item.getAttribute("data-tag");
    var d = item.getAttribute("data-desc");

    img.classList.add("is-fading");
    setTimeout(function () {
      img.src = src;
      img.alt = n || "";
      if (tag) tag.textContent = t || "";
      if (name) name.textContent = n || "";
      if (desc) desc.textContent = d || "";
      img.classList.remove("is-fading");
    }, 280);
  }

  items.forEach(function (item) {
    item.addEventListener("mouseenter", function () { activate(item); });
    item.addEventListener("focus", function () { activate(item); });
    item.addEventListener("click", function () { activate(item); });
  });
})();
