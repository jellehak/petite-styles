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

        const icon = this.getAttribute('icon')
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
        // {
        //     const el = document.createElement('span')
        //     el.classList.add('v-btn__content')
        //     el.innerHTML = this.innerHTML
        //     this.innerText = ''
        //     this.append(el)
        // }
        {
            const el = document.createElement('span')
            el.classList.add('v-btn__overlay')
            this.prepend(el)
        }
        {
            const el = document.createElement('span')
            el.classList.add('v-btn__underlay')
            this.prepend(el)
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

class VExpandTransition extends HTMLElement {
    connectedCallback() {

    }
    toggle() {
        const el = this
        el.classList.toggle('expanded')
        el.classList.toggle('collapsed')
    }
}

customElements.define('v-expand-transition', VExpandTransition);
