let input = document.getElementById("input");
let form = document.getElementById("form");
let img = document.getElementById("dogImg");
let erro = document.getElementById("erro");

form.addEventListener("submit", getPosts);

async function getPosts(event) {
  event.preventDefault();

  try {
    erro.textContent = "";
    img.src = "";

    let breed = input.value.toLowerCase().trim();

    let response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    let data = await response.json();

    if (data.status === "error") {
      throw new Error("Raça não encontrada");
    }

    img.src = data.message;

  } catch (e) {
    erro.textContent = e.message;
  }
}