(function () {
  var btn = document.getElementById("sort-fab");
  if (!btn) return;
  var tooltip = btn.querySelector(".sort-fab-tooltip");
  var isReversed = false;

  function reverseChildren(id) {
    var parent = document.getElementById(id);
    if (!parent) return;
    Array.from(parent.children)
      .reverse()
      .forEach(function (child) {
        parent.appendChild(child);
      });
  }

  btn.addEventListener("click", function () {
    reverseChildren("experience-body");
    reverseChildren("projects-body");
    isReversed = !isReversed;
    btn.classList.toggle("is-reversed", isReversed);
    tooltip.textContent = isReversed
      ? "Sort by timeline ASC"
      : "Sort by timeline DESC";
  });
})();
