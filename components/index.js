/**
 * From:
        <v-icon start icon="mdi-label"></v-icon>
 * To:
        <v-icon class="mdi-label mdi v-icon"></v-icon>
 */
class VIcon extends HTMLElement {
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

customElements.define('v-icon', VIcon);

class VChip extends HTMLElement {
    connectedCallback() {
        const el = document.createElement('div')
        el.classList.add('v-chip__underlay')
        this.prepend(el)
    }
}

customElements.define('v-chip', VChip);



class VSheet extends HTMLElement {
    connectedCallback() {
        const el = document.createElement('div')
        el.classList.add('v-chip__underlay')
        this.prepend(el)
    }
}

customElements.define('v-sheet', VSheet);

class VCard extends HTMLElement {
    connectedCallback() {
        const el = document.createElement('span')
        el.classList.add('v-card__underlay')
        this.append(el)
    }
}

customElements.define('v-card', VCard);

class VImg extends HTMLElement {
    connectedCallback() {
        const el = document.createElement('img')
        el.src = this.getAttribute('src')
        this.append(el)
    }
}

customElements.define('v-img', VImg);


customElements.define('v-field', class extends HTMLElement {
    connectedCallback() { }
});

customElements.define('v-switch', class extends HTMLElement {
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
});

// =====
// Compatibility components for Vuetify
customElements.define('v-app-bar-nav-icon', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<button variant="text" icon><v-icon icon="mdi-menu"></v-icon></button>`
    }
});


customElements.define('v-list-item', class extends HTMLElement {
    connectedCallback() {
        // <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox"></v-list-item>
        // TO:
        // <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox">
        //     <v-icon icon="mdi-email"></v-icon>
        //     <v-list-item-title>Inbox</v-list-item-title>
        // </v-list-item>

        {
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
});
