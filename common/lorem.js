class Lorem extends HTMLElement {
    connectedCallback() {
      this.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque, sint tempore molestias mollitia
            ipsum
            aperiam temporibus odit tempora, labore et quo, repudiandae asperiores quia eos iste rerum fugit rem?`
    }
  }

customElements.define('my-lorem', Lorem);