const adviceId = document.querySelector(".advice-id"),
  adviceText = document.querySelector(".advice-p");

const consumirApi = async () => {
    // Displaying loading animation until data is fetched
  document.querySelector(".loader").style.display = "block";
  document.querySelector(".advice-p").innerHTML = "";
  try {
    const res = await fetch("https://api.adviceslip.com/advice"),
      json = await res.json();
    console.log(json);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    adviceId.textContent = json.slip.id;
    adviceText.textContent = json.slip.advice;
    document.querySelector(".loader").style.display = "none";
  } catch (err) {
    const message = err.statusText || "Something went wrong";
    adviceText.textContent = message;
  }
};

document.addEventListener("DOMContentLoaded", consumirApi);
document.addEventListener("click", async (e) => {
  if (e.target.matches(".icon-circle")) await consumirApi();
});
