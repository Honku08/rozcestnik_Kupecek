const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

// funkce na zobrazení návrhů
searchInput.addEventListener("input", function() {
  let query = this.value.toLowerCase().trim();
  suggestions.innerHTML = "";

  if (query.length === 0) {
    suggestions.style.display = "none";
    return;
  }

  let matches = [];
  document.querySelectorAll(".timeline-box h2").forEach(h2 => {
    let title = h2.innerText.toLowerCase();
    if (title.includes(query)) {
      matches.push({ title: h2.innerText, element: h2.closest(".timeline-box") });
    }
  });

  if (matches.length > 0) {
    suggestions.style.display = "block";
    matches.forEach(match => {
      let div = document.createElement("div");
      div.classList.add("suggestion-item");
      div.innerText = match.title;
      div.addEventListener("click", () => {
        match.element.scrollIntoView({ behavior: "smooth", block: "center" });
        suggestions.style.display = "none";
        searchInput.value = match.title; // vyplní vybraný text
      });
      suggestions.appendChild(div);
    });
  } else {
    suggestions.style.display = "none";
  }
});

// když zmáčkneš Enter → vezme první možnost
searchInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    let first = suggestions.querySelector(".suggestion-item");
    if (first) first.click();
  }
});