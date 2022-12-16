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
        console.log(key, newValue)
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

class VBtn extends HTMLElement {
    connectedCallback() {
        const childs = [...this.childNodes]
        const button = document.createElement('button')
        this.append(button)
        button.append(...childs)

        if (this.getAttribute('icon') === "") {
            this.setAttribute('variant', 'text')
        }
        {
            const el = document.createElement('span')
            el.classList.add('v-btn__overlay')
            button.prepend(el)
        }
        {
            const el = document.createElement('span')
            el.classList.add('v-btn__underlay')
            button.prepend(el)
        }

    }
}

customElements.define('v-btn', VBtn);

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

customElements.define('v-app-bar-nav-icon', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<v-btn variant="text"><v-icon icon="mdi-menu"></v-icon></v-btn>`
    }
});

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

