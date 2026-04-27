let form = document.querySelector("#addTask");
let input = document.querySelector(".list");
let listHTML = document.querySelector(".list-tasks");

let tasks = JSON.parse(localStorage.getItem("tasks_list")) || [];

console.log("Tasks list:", tasks);

function render() {
    listHTML.innerHTML = ""; 

    tasks.forEach((task, id) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <div class="task-data">
                <input type="checkbox" 
                    ${task.completed ? "checked" : ""} 
                    onchange="toggleTask(${id})">

                <strong style="text-decoration:${task.completed ? 'line-through' : 'none'}">
                    Task: ${task.text}
                </strong>

                <br><small>${task.date}</small>
            </div>

            <div class="task-actions">
                <button onclick="editTask(${id})">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button onclick="deleteTask(${id})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;

        listHTML.appendChild(li);
    });

    localStorage.setItem("tasks_list", JSON.stringify(tasks));

}

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
        
    if (input.value.trim() === "") return; 

    let newTask = {
        text: input.value,
        date: new Date().toLocaleString('pt-PT'),
        completed: false
    };

    tasks.push(newTask); 
    console.log("Task added:", newTask);

    input.value = "";   
    render();          
    
    Swal.fire({
        icon: 'success',
        title: 'Added!',
        timer: 1000,
        showConfirmButton: false
    });
});

function toggleTask(id) {
    tasks[id].completed = !tasks[id].completed;

    console.log(`Task ${id} adited:`, tasks[id]);

    render();
}

function deleteTask(id) {
    console.log("Pedido para apagar tarefa:", tasks[id]);

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            console.log("Deleted task:", tasks[id]);

            tasks.splice(id, 1);
            render();

            Swal.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "error"
            });
        }
    });
}

function editTask(id) {
    let newValue = prompt("Edit your task:", tasks[id].text);
    
    if (newValue && newValue.trim() !== "") {
        console.log("Antes da edição:", tasks[id]);

        tasks[id].text = newValue;

        console.log("Depois da edição:", tasks[id]);

        render();

        Swal.fire({
            icon: 'info',
            title: 'Updated!',
            timer: 1000,
            showConfirmButton: false
        });
    }
}

render();