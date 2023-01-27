free, light and open-source CSS framework.

with very little javascript.

Features: 
- Fast response very little javascript overhead 
- Developer friendly. Instead of relying on classes webcomponents and attributes are used as selectors.

# Usage
```html
<v-alert type=warning outlined shaped>Broken</v-alert>
<v-alert type=warning shaped>Broken</v-alert>

<v-card loading variant=tonal>
    <v-card-title>Card title</v-card-title>
    <v-card-subtitle>Subtitle</v-card-subtitle>
    <v-card-text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis
    est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero
    rerum unde voluptatem! </v-card-text>
    <v-card-actions>
        <button type=button size=small>Click me</button>
        <button variant=>Click me</button>
        <button variant=>Click me</button>
        <button variant=text>Click me</button>
    </v-card-actions>
</v-card>
```

# Thanks
- Naming convention is heavily inspired by vuetify. https://cdn.jsdelivr.net/npm/vuetify@3.0.3/dist/vuetify.css