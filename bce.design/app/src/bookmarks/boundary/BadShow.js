import BElement from "../../BElement.js";
import { html } from "../../libs/lit-html.js";

class BadShow extends BElement {

    extractState({ bookmarks: { bookmark } }) {
        return bookmark;
        
    }

    view() {
        const { link } = this.state;
        return html`
            <h2>hello world ${link}</h2>
        `;
    }
    
}

customElements.define('bad-show',BadShow);