export function CountryCard(props, index) {
  const { flags, name, population, region, capital, alpha3Code } = props;

  document.addEventListener("click", (e) => {
    if (!e.target.matches(".country-card a")) return false;
    localStorage.setItem("countryId", e.target.dataset.id);
  });

  return `
        <div class="country-card">
        <img src="${flags.png}" alt="Flag of ${name}" class="country-flag">
        <div class="country-info">
        <a href="#/${name}" data-id=${index}>${name} </a>
        <p class="population"><b>Population:</b> ${population}</p>
        <p class="region"><b>Region:</b> ${region}</p>
        <p class="capital"><b>Capital:</b> ${capital}</p>
        </div>
        </div>
    `;
}
