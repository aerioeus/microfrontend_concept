import evalScripts from './Eval';

class EbsApp extends HTMLElement {
  shadowRoot;

  constructor() {
    super();

    this.shadowRoot = this.attachShadow({
      mode: 'open'
    });
  }

  connectedCallback() {
    const url = this.getAttribute('url');

    this.shadowRoot.innerHTML = `
      Loading ${url}
    `;

    this.renderApp(url);
  }

  async renderApp(url) {
    const response = await fetch(url);
    const content = await response.text();

    this.shadowRoot.innerHTML = content;

    // evalScripts(this.shadowRoot);

    // console.log(this.shadowRoot.querySelectorAll('script'));
  }
}

customElements.define('ebs-app', EbsApp);
