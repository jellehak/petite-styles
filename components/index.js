/**
 * From:
        <v-icon start icon="mdi-label"></v-icon>
 * To:
        <v-icon class="mdi-label mdi v-icon"></v-icon>
 */
export class Icon extends HTMLElement {
    static get observedAttributes() {
        return ["icon"];
    }
    attributeChangedCallback(key = "", oldValue, newValue) {
        this.classList.remove(oldValue)
        this.classList.add(newValue)
    }
    connectedCallback() {
        this.classList.add('mdi')
        this.classList.add('v-icon')

        const icon = this.innerText.toLowerCase() || this.getAttribute('icon')
        if (this.innerText) {
            this.innerText = ''
        }
        if (!icon) {
            console.warn('Missing icon', this)
            return
        }
        this.classList.add(icon)
    }
}

export class Chip extends HTMLElement {
    connectedCallback() {
        const el = document.createElement('div')
        el.classList.add('v-chip__underlay')
        this.prepend(el)
    }
}

export class Sheet extends HTMLElement {
    connectedCallback() {
        const el = document.createElement('div')
        el.classList.add('v-chip__underlay')
        this.prepend(el)
    }
}

export class Card extends HTMLElement {
    connectedCallback() {
        const el = document.createElement('span')
        el.classList.add('v-card__underlay')
        this.append(el)
    }
}

export class Img extends HTMLElement {
    connectedCallback() {
        const el = document.createElement('img')
        el.src = this.getAttribute('src')
        this.append(el)
    }
}

export class Field extends HTMLElement {
    connectedCallback() { }
}

export class VSwitch extends HTMLElement {
    connectedCallback() {
        {
            const el = document.createElement('input')
            el.setAttribute('type', 'checkbox')
            this.append(el)
        }
        {
            const el = document.createElement('span')
            el.classList.add('slider')
            this.append(el)
        }
        {/* <span class="slider round"></span> */ }
    }
}

export class AppBarNavIcon extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<button variant="text" icon><v-icon icon="mdi-menu"></v-icon></button>`
    }
}

export class ListItem extends HTMLElement {
    static get observedAttributes() {
        return ["prepend-icon"];
    }
    attributeChangedCallback(key = "", oldValue, newValue) {}
    connectedCallback() {
        console.log('List')
        // <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox"></v-list-item>
        // TO:
        // <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox">
        //     <v-icon icon="mdi-email"></v-icon>
        //     <v-list-item-title>Inbox</v-list-item-title>
        // </v-list-item>
        if(this.getAttribute('prepend-icon')){
            const el = document.createElement('v-icon')
            el.setAttribute('icon', this.getAttribute('prepend-icon'))
            this.prepend(el)
        }
        {
            const el = document.createElement('v-list-item-title')
            el.innerText = this.getAttribute('title')
            this.append(el)
        }
    }
}


customElements.define('v-field', Field);

// Compatibility components for Vuetify
customElements.define('v-switch', VSwitch);
customElements.define('v-app-bar-nav-icon', AppBarNavIcon);
customElements.define('v-list-item', ListItem);
customElements.define('v-icon', Icon);
customElements.define('v-chip', Chip);
customElements.define('v-sheet', Sheet);
customElements.define('v-card', Card);
customElements.define('v-img', Img);
