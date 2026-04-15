let btn = document.querySelector('button');
let listaElement = document.getElementById("lista");

btn.addEventListener('click', getPosts);

async function getPosts() {
  try {
    // limpar a lista antes de carregar novos
    listaElement.innerHTML = ""; 
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await response.json();

    // cortar para os primeiros 5
    let primeiros5 = posts.slice(0, 5);

    // criar os elementos e adicionar à página
    primeiros5.forEach(post => {
      console.log(post.title); 

      // criar um novo elemento <li> para cada título
      let li = document.createElement("li");
      li.textContent = post.title;

      // usar o appendChild para colocar o "li" dentro da lista <ul>
      listaElement.appendChild(li);
    });

  } catch (error) {
    console.error('Erro:', error);
  }
}