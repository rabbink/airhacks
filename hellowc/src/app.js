class BadShow extends HTMLElement {

    constructor() {
        super();
        this.message = "web is great";
    }

    connectedCallback() {
        this.innerHTML = `
        ${this.message}
        <button>click me</button>
        `;

    }
    
}

customElements.define('bad-show',BadShow);



