let form = document.querySelector("form");
let input = document.querySelector("input");
let list = document.querySelector("ul");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let valueInput = input.value;
    if (valueInput == ""){
        return;
    }
    localStorage.setItem("tasks_list", valueInput);
    console.log(valueInput);

    let li = document.createElement("li")
    li.textContent = "Task:" + valueInput;
    list.appendChild(li)
   
    input.value = ""    
});



    