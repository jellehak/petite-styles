/**
 * From:
        <v-icon start icon="mdi-label"></v-icon>
 * To:
        <v-icon class="mdi-label mdi v-icon"></v-icon>
 */
class VIcon extends HTMLElement {
    connectedCallback() {
        this.classList.add('mdi')
        this.classList.add('v-icon')
        if(!this.getAttribute('icon')) {
            console.warn('Missing icon attribute', this)
            return
        }
        this.classList.add(this.getAttribute('icon') || '')
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
        {
            const el = document.createElement('span')
            el.classList.add('v-btn__content')
            el.innerHTML = this.innerHTML
            this.innerText = ''
            this.append(el)
        }
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