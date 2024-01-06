export async function ajax(props) {
  const { url, cbSuccess } = props;

  try {
    const res = await fetch(url),
      json = await res.json();
    cbSuccess(json);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
  } catch (err) {
    const message = err.statusText || "Something went wrong";
    document.getElementById("main").innerHTML = `
        <div class="error">
            <p>Error ${err.status}: ${message}</p>
        </div>
      `;
      document.querySelector(".loader").style.display = "none";
      console.log(err);
  }
}
