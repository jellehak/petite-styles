# App

<v-preview v-scope="{}">
<v-app>
  <v-toolbar>
    <v-app-bar-nav-icon @click="alert('clicked')"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-toolbar>

  <v-main>
    main
  </v-main>

   <v-footer>
    footer
  </v-footer>
</v-app>
</v-preview>

```html
<v-app>
  <v-toolbar>
    <v-app-bar-nav-icon @click="alert('clicked')"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-toolbar>

  <v-main>
    main
  </v-main>

   <v-footer>
    footer
  </v-footer>
</v-app>
```

# Input
<style>
v-field input { z-index: 1;}
v-field v-overlay {
  opacity: 0;
}
v-field:has(input:focus) v-overlay {
  opacity: 1;
}
</style>

<v-preview v-scope="{form:{text: ''}}">
  <v-field>
    <label>text field</label>
    <input type=text v-model=form.text>
  </v-field>
  <v-field>
    <label>theme color</label>
    <select v-model="form.theme">
      <option v-for="value in ['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']" :value=value>{{value}}</option>
    </select>
  </v-field>
  <v-field>
    <label>color</label>
    <input type=color v-model=form.color>
  </v-field>
  <v-field>
    <label>date</label>
    <input type=date v-model=form.date>
  </v-field>
      <v-field>
    <label>number</label>
    <input type= number v-model=form.number>
  </v-field>
  <pre>{{form}}</pre>
</v-preview>
