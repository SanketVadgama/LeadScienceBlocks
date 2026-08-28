(function () {
  var data = [
    { num: "001", name: "Cascade Logistics Hub", loc: "Tacoma, WA", scope: "Distribution · 480,000 sq ft", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80" },
    { num: "002", name: "Northshore Civic Center", loc: "Bellevue, WA", scope: "Civic · 22 months", img: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=80" },
    { num: "003", name: "Foundry Lofts", loc: "Portland, OR", scope: "Mixed-use · 184 units", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" },
    { num: "004", name: "Pier 71 Marine Terminal", loc: "Seattle, WA", scope: "Civil · Maritime", img: "https://images.unsplash.com/photo-1590074072786-a66914d668f1?auto=format&fit=crop&w=1200&q=80" },
    { num: "005", name: "Cedar Heights Hospital", loc: "Spokane, WA", scope: "Healthcare · 320 beds", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80" }
  ];

  var mainImg = document.getElementById("project-main-img");
  var badge = document.getElementById("project-badge");
  var loc = document.getElementById("project-loc");
  var name = document.getElementById("project-name");
  var scope = document.getElementById("project-scope");
  var thumbs = document.getElementById("project-thumbs");
  var tabs = document.querySelectorAll(".projects__tab");
  var active = 0;

  function renderThumbs() {
    var html = "";
    data.forEach(function (p, i) {
      html += '<button class="projects__thumb' + (i === active ? " is-active" : "") + '" data-i="' + i + '">' +
        '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy" />' +
        '<div class="projects__thumb-grad"></div>' +
        '<div class="projects__thumb-info"><p class="projects__thumb-num">#' + p.num + '</p><p class="projects__thumb-name">' + p.name + '</p></div></button>';
    });
    html += '<div class="projects__archive"><div><p class="projects__archive-num">1,240+</p><p class="projects__archive-label">Delivered since 1972</p></div>' +
      '<a href="#contact" class="projects__archive-btn">View archive →</a></div>';
    thumbs.innerHTML = html;

    thumbs.querySelectorAll(".projects__thumb").forEach(function (btn) {
      btn.addEventListener("mouseenter", function () { setActive(+btn.getAttribute("data-i")); });
      btn.addEventListener("click", function () { setActive(+btn.getAttribute("data-i")); });
    });
  }

  function setActive(i) {
    active = i;
    var p = data[i];
    mainImg.classList.add("is-fading");
    setTimeout(function () {
      mainImg.src = p.img;
      mainImg.alt = p.name;
      badge.textContent = "#" + p.num;
      loc.textContent = p.loc;
      name.textContent = p.name;
      scope.textContent = p.scope;
      mainImg.classList.remove("is-fading");
    }, 250);

    tabs.forEach(function (t) { t.classList.toggle("is-active", +t.getAttribute("data-i") === i); });
    thumbs.querySelectorAll(".projects__thumb").forEach(function (t, idx) {
      t.classList.toggle("is-active", idx === i);
    });
  }

  tabs.forEach(function (t) {
    t.addEventListener("mouseenter", function () { setActive(+t.getAttribute("data-i")); });
    t.addEventListener("click", function () { setActive(+t.getAttribute("data-i")); });
  });

  renderThumbs();
})();
