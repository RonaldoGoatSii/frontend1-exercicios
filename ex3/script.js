let formElement = document.querySelector("form");
let input = document.querySelector("input");

formElement.addEventListener("submit", (e) => { 
    e.preventDefault();
    let password = input.value;

    let passEncriptada = btoa(password); 

    localStorage.setItem("password", passEncriptada);

    console.log(passEncriptada);
});

let passGuardada = localStorage.getItem("password");
let decodedPassword = atob(passGuardada);

console.log("Password desicriptada:", decodedPassword);