let obj = {
    nome: "Ronaldo", 
    idade: 25, 
    email: "ronaldo@gmail.com"
};

// converter para JSON (string)
let json = JSON.stringify(obj);

// mostrar na consola
console.log(json);

// converter para JavaScript (Objeto)
let js = JSON.parse(json)

// mostrar uma das propriedades desse objeto
console.log(js.nome)


// dar import do ficheiro JSON 
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("nacionalidade")
    })