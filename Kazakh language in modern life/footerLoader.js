const footerContent = `   <footer class="bg-dark text-light text-center py-3">
<p>&copy; 2023 Kazakh modern App. All rights are reserved</p>
</footer>`;



class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = footerContent;
  }
}

customElements.define("footer-component", Footer);