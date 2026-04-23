let form = document.querySelector("form");
let input = document.querySelector("input");


form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let valueInput = input.value;
    localStorage.setItem("tasks", valueInput);

    let tasksList = localStorage.getItem("tasks");
    console.log(tasksList);
   
});



