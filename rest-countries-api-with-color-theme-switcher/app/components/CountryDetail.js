export function CountryDetail(props) {
  const {
    flags,
    name,
    population,
    subregion,
    topLevelDomain,
    currencies,
    languages,
    nativeName,
    borders,
    region,
    capital,
  } = props;

  let currenciesList = "",
    languagesList = "",
    bordersList = "";
  currencies.forEach((el) => {
    currenciesList += el.code + ", ";
  });
  languages.forEach((el) => {
    languagesList += el.name + ", ";
  });

  if (typeof borders !== "undefined") {
    borders.forEach((el) => (bordersList += ` <button class="border">${el}</button>`));
  } else {
    bordersList = `${name} has no borders`;
  }

  currenciesList = currenciesList.slice(0, -2);
  languagesList = languagesList.slice(0, -2);

  return `
    <article class="country-detail">
        <a href="#/" class="back">Back</a>
        <br>
        
        <img class="country-flag" src="${flags.png}" alt="">
        <h2 class="name">${name}</h2>
        <br>
        <p class="native-name">Native Name: ${nativeName}</p>
        <p class="population">Population: ${population}</p>
        <p class="region">Region: ${region}</p>
        <p class="subregion">Subregion: ${subregion}</p>
        <p class="capital">Capital: ${capital}</p>
        <br>
        <p class="tld">Top level domain: ${topLevelDomain[0]}</p>
        <p class="currencies">Currencies: ${currenciesList}</p>
        <p class="languages">Languages: ${languagesList}</p>
        <br> <br>
        <p class="border-countries"> Borders: </p>
        <div class="border-list">

    ${bordersList}
        </div>
    </article>
    `;
}
