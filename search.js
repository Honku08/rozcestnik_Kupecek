const input = document.getElementById('searchInput'); 

// Načítá všechny ména h2
const items = Array.from(document.querySelectorAll('.timeline-box')).map(box => {
  const h2 = box.querySelector('h2');
  const title = h2 ? h2.innerText.trim() : '';
  return { title, normalized: stripDiacritics(title.toLowerCase()), element: box };
});

// scroll
function selectSuggestion(match) {
  input.value = match.title;
  match.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  input.blur();
}