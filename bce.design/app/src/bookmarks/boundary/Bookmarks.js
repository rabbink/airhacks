import BElement from "../../BElement.js";
import { html } from "../../libs/lit-html.js";
import './Add.js';
import './Preview.js';
import './BadShow.js';

class Bookmarks extends BElement{
    
    view() {
        return html`
           <bad-show></bad-show>
           <b-preview></b-preview>
           <b-add></b-add>
        `;
    }

}

customElements.define('b-bookmarks',Bookmarks);