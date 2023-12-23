const apiUrl = "https://api.adviceslip.com/advice";
const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-p");
const reAdvice = document.querySelector(".icon-circle");

function consumirApi() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error al obtener los datos. Código de estado: ${response.status}`,
        );
      }
      return response.json();
    })
    .then((data) => {
      adviceId.textContent = data.slip.id;
      adviceText.textContent = data.slip.advice;
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
    });
}

consumirApi();
reAdvice.addEventListener("click", consumirApi);
