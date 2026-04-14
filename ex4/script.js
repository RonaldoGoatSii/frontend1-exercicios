let btn = document.querySelector('button');

btn.addEventListener('click', getPosts);

async function getPosts() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await response.json();

    let primeiros5 = posts.slice(0, 5);

    primeiros5.forEach(post => {
      console.log(post.title);
      document.getElementById("lista").innerHTML = "List" + primeiros5;
    });
  } catch (error) {
    console.error('Erro:', error);
  }
}