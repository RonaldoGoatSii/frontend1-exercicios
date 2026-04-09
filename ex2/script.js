let user = {
    Nome: ""
}

let formElement = document.querySelector("form");
let input = document.querySelector("input");

formElement.addEventListener("submit", function(event) { // "submite" é o tipo de evento que vai ocorrer quando o utilizador enviar a sua resposta
    event.preventDefault(); // prevenir o comportamento padrão do formulário, que seria recarregar a página após submeter a resposta

    user.Nome = input.value; // aceder ao ao texto que o utilizador inseriu no input

    localStorage.setItem("form", JSON.stringify(user)); // guardar o objeto (form) na localStorage, e o JSON.stringify para converter o objeto numa string 
});

let form1 = JSON.parse(localStorage.getItem("user")); // buscar a string guardada com a chave "form", e o JSON.parse para converter a string de volta para objeto

if (form1) {
    console.log(form1.Nome);
}


let button = document.getElementById("themeBtn");
        let texto = document.getElementById("temaTexto");

        // carregar tema guardado
        let temaGuardado = localStorage.getItem("tema");

        if (temaGuardado) {
            document.body.className = temaGuardado;
            texto.textContent = "Tema atual: " + temaGuardado;
        } else {
            document.body.className = "light";
            texto.textContent = "Tema atual: light";
        }

        button.addEventListener("click", function() {

            let temaAtual = document.body.classList.contains("light") ? "light" : "dark";
            let novoTema = temaAtual === "light" ? "dark" : "light";

            document.body.className = novoTema;

            // guardar no localStorage
            localStorage.setItem("tema", novoTema);

            // mostrar no ecrã
            texto.textContent = "Tema atual: " + novoTema;

            // (opcional) ver no console
            console.log("Tema guardado:", novoTema);
        });