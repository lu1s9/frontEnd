export function SearchForm() {
  const $form = document.createElement("form"),
    $input = document.createElement("input");

  $form.classList.add("search-form");
  $form.appendChild($input);
  $input.type = "search";
  $input.name = "search";
  $input.placeholder = "Search for a country...";
  $input.classList.add("search-input");

  document.addEventListener("keyup", (e) => {
    if (!e.target.matches(".search-input")) return false;
    const searchInput = document.querySelector(".search-input");
    const filter = searchInput.value.toLowerCase();
    const listItems = document.querySelectorAll(".country-card");

    listItems.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(filter) ? "" : "none";
    });
  });
  return $form;
}
