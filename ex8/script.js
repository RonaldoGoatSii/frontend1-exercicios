class NavbarComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .my-navbar {
          display: flex;
          justify-content: space-between;
          background: #222;
          padding: 1rem;
          color: white;
        }
        .my-navbar a { color: cyan; }
      </style>
      
      <nav class="my-navbar">
        <div class="logo">Sem Shadow</div>
        <ul>
          <li><a href="#">Home</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('app-navbar', NavbarComponent);
