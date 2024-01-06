import { ajax } from "../helpers/ajax.js";
import { CountryCard } from "./CountryCard.js";
import { CountryDetail } from "./CountryDetail.js";

export async function Router() {
  const { hash } = location;

  if (!hash || hash === "#/") {
    await ajax({
      url: "app/assets/data.json",
      cbSuccess: (countries) => {
        let html = "";
        countries.forEach(
          (country, index) => (html += CountryCard(country, index)),
        );
        document.getElementById("main").innerHTML = html;
      },
    });
  } else if (hash.includes("#/search")) {
    document.getElementById("main").innerHTML = `Seccion del buscador`;
  } else {
    await ajax({
      url: "app/assets/data.json",
      cbSuccess: (countries) => {
        const countryId = localStorage.getItem("countryId");
        const html = CountryDetail(countries[countryId]);
        document.getElementById("main").innerHTML = html;
      },
    });
  }
  document.querySelector(".loader").style.display = "none";
}
