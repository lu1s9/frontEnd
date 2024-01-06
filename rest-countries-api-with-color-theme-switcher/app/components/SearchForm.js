export function SearchForm() {
  const $form = document.createElement("form"),
    $input = document.createElement("input");

  $form.classList.add("search-form");
  $form.appendChild($input);
  $input.type = "search";
  $input.name = "search";
    $input.placeholder = "Search for a country...";
  return $form;
}
