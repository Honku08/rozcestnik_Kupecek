const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    let query = this.value.toLowerCase().trim();
    let target = null;

    // najdeme box podle názvu (h3 text)
    document.querySelectorAll(".timeline-box").forEach(box => {
      let title = box.querySelector("h2")?.innerText.toLowerCase();
      if (title && title.includes(query) && !target) {
        target = box;
      }
    });

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    } else {
      alert("Projekt nenalezen. Zkontrolujte, zda je název správně napsaný ");
    }
  }
});