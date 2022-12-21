<style>
  @import url(../style.css);
  @import url(https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css);
  @import url(../examples/style.css);

  /* section {
    margin-left: 20px;
  } */
</style>
      
# Styler

a lightweight UI Framework based on handy selectors and a sprinkle of JavaScript

Designed to be:

- lightweight, a small core bundle that is extensible.
- performant by using little javascript.
- user friendly suppling great dark/light color scheme.
- developer friendly due to clear markup.
- framework friendly can be used in many frameworks.
- cutting edge, web technologies like css variables and WebComponents.

# Introduction

Most CSS frameworks use a class based approach to style elements. We opted to use attributes and tags for appling
styles.
This enables you to write faster and cleaner templates.

Example:

Class based styling

```html
<div class="text-center"></div>
```

Attribute based styling

```html
<div text=center></div>
```

> NOTE as most attribute values are one word, the quotes are fine to be omitted.

<!-- ## Motivation -->


# Usage
```
@import url(../style.css);
```

# Helpers

## Flex
  <v-preview>
    <b>Default</b>
    <v-flex>
      <div>child 1</div>
      <div>child 2</div>
    </v-flex>
    <b>Row</b>
    <v-flex row>
      <div>child 1</div>
      <div>child 2</div>
    </v-flex>
    <b>Column</b>
    <v-flex column>
      <div>child 1</div>
      <div>child 2</div>
    </v-flex>
  </v-preview>
  <section>
    <h3>justify</h3>
    <b>Default</b>
    <v-preview>
      <v-flex>
        <div>child 1</div>
        <div>child 2</div>
      </v-flex>
    </v-preview>
    <b>start</b>
    <v-preview>
      <v-flex justify=start>
        <div>child 1</div>
        <div>child 2</div>
      </v-flex>
    </v-preview>
    <b>center</b>
    <v-preview>
      <v-flex justify=center>
        <div>child 1</div>
        <div>child 2</div>
      </v-flex>
    </v-preview>
    <b>end</b>
    <v-preview>
      <v-flex justify=end>
        <div>child 1</div>
        <div>child 2</div>
      </v-flex>
    </v-preview>
    <b>space-between</b>
    <v-preview>
      <v-flex justify=space-between>
        <div>child 1</div>
        <div>child 2</div>
      </v-flex>
    </v-preview>
    <b>space-evenly</b>
    <v-preview>
      <v-flex justify=space-evenly>
        <div>child 1</div>
        <div>child 2</div>
      </v-flex>
    </v-preview>
    <b>space-around</b>
    <v-preview>
      <v-flex justify=space-around>
        <div>child 1</div>
        <div>child 2</div>
      </v-flex>
    </v-preview>
  </section>

## Generators

### Text
  <article>
    <v-preview v-scope="{}">
      <my-lorem></my-lorem>
    </v-preview>
  </article>
</section>

# Components
## Alert
  <v-preview>
      <v-alert outlined>outlined</v-alert>
      <v-alert outlined shaped>outlined shaped</v-alert>
      <v-alert shaped>shaped</v-alert>
      <v-alert dense>dense</v-alert>
    </div>
  </v-preview>

### Colors
  <v-preview>
    <v-alert color="success" outlined>outlined</v-alert>
    <v-alert color="info" outlined shaped>outlined shaped</v-alert>
    <v-alert color="warning" shaped>shaped</v-alert>
    <v-alert color="error" dense>dense</v-alert>
  </v-preview>
</section>

## Toolbar

  <article>
    <v-preview v-scope="{}">
      <v-toolbar>
        <v-app-bar-nav-icon @click="alert('clicked')"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-toolbar>
    </v-preview>
    <v-preview v-scope="{}">
      <v-toolbar density="compact" color=deep-purple>
        <v-app-bar-nav-icon @click="alert('clicked')"></v-app-bar-nav-icon>
        <v-toolbar-title>Compact</v-toolbar-title>
        <v-spacer></v-spacer>
        <button icon>
          <v-icon>mdi-magnify</v-icon>
        </button>
        <button icon>
          <v-icon>mdi-heart</v-icon>
        </button>
        <button icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </button>
      </v-toolbar>
    </v-preview>
  </article>

## List

  <article>
    <v-preview v-scope="{}">
      <v-list nav>
        <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox"></v-list-item>
        <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisors"
          value="supervisors"></v-list-item>
        <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin"></v-list-item>
      </v-list>
    </v-preview>
  </article>
</section>

## Drawer

  <article>
    <v-preview v-scope="{}">
      <v-navigation-drawer image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" permanent theme="dark">
        <div class="v-navigation-drawer__img"><img src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
            alt=""></div>
        <v-list nav>
          <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox"></v-list-item>
          <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisors"
            value="supervisors"></v-list-item>
          <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-preview>
  </article>

### Alignment

  <article>
    <v-preview v-scope="{}">
      <v-navigation-drawer location="right" permanent theme="dark">
        <div class="v-navigation-drawer__img"><img src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
            alt=""></div>
        <v-list nav>
          <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox"></v-list-item>
          <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisors"
            value="supervisors"></v-list-item>
          <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-preview>
  </article>

## Icons

    <v-preview>
      <v-sheet mx="2">
        <h2>Raw</h2>
        <span class="mdi mdi-home"></span>
        <span class="mdi mdi-loading mdi-spin">Processing</span>
        <span class="mdi mdi-bookmark" aria-hidden> Bookmark Item
          <!--
        Before:
        <v-icon icon=mdi-vuetify size="large"></v-icon>
        Renders:
        <i class="mdi-vuetify mdi v-icon notranslate v-theme--dark v-icon--size-large" aria-hidden="true"></i> -->
      </v-sheet>

      <v-sheet mx="2">
        <h2>Size</h2>
        <v-icon icon=mdi-vuetify size=x-small></v-icon>
        <v-icon icon=mdi-vuetify size=small></v-icon>
        <v-icon icon=mdi-vuetify size=default></v-icon>
        <v-icon icon=mdi-vuetify size=large></v-icon>
        <v-icon icon=mdi-vuetify size=x-large></v-icon>
      </v-sheet>

      <v-sheet mx="2">
        <h2>Color</h2>
        <v-icon icon=mdi-vuetify color=green></v-icon>
        <v-icon icon=mdi-vuetify color=red></v-icon>
        <v-icon icon=mdi-vuetify color=blue></v-icon>
      </v-sheet>
    </v-preview>

  </article>
</section>

<section id="v-sheet">
  <style>
    v-sheet {
      min-height: 100px;
      min-width: 100px
    }
  </style>
  <h1>
    <a aria-hidden="true" href="#v-sheet">#</a>
    Sheet
  </h1>
  <p>The <code>v-sheet</code> component is a transformable piece of <span
      style="text-decoration:underline;">paper</span> that provides a basic foundation.</p>

  <v-preview>
    <div flex>
      <v-sheet color=deep-purple></v-sheet>
      <v-sheet rounded></v-sheet>
      <v-sheet rounded="l">L</v-sheet>
      <v-sheet rounded="xl">XL</v-sheet>
    </div>
  </v-preview>

border
<v-preview>
<div flex>
<v-sheet border color=deep-purple></v-sheet>
<v-sheet border rounded></v-sheet>
<v-sheet border rounded="l">L</v-sheet>
<v-sheet border rounded="xl">XL</v-sheet>
</div>
</v-preview>

</section>

<section>
  <h1>
    <a aria-hidden="true" href="#v-card">#</a>
    Cards
  </h1>
  <p>The <code>v-card</code> component provides a simple interface
    for headings, text, images, icons, and more.
  </p>

  <v-preview flex="row">
    <!-- 'flat' | 'elevated' | 'tonal' | 'outlined' | 'text' | 'plain' -->
    <v-card>
      <v-card-text>
        <my-lorem></my-lorem>
      </v-card-text>
    </v-card>
    <v-card variant=outlined>
      <v-card-text>
        <my-lorem></my-lorem>
      </v-card-text>
    </v-card>
    <v-card variant=tonal>
      <v-card-text>
        <my-lorem></my-lorem>
      </v-card-text>
    </v-card>
    <v-card variant=text>
      <v-card-text>
        <my-lorem></my-lorem>
      </v-card-text>
    </v-card>
  </v-preview>

  ### density
  <v-preview flex="row">
    <v-card>
      <v-card-title>default</v-card-title>
      <v-card-text>
        <my-lorem></my-lorem>
      </v-card-text>
    </v-card>
    <v-card density="comfortable">
      <v-card-title>comfortable</v-card-title>
      <v-card-text>
        <my-lorem></my-lorem>
      </v-card-text>
    </v-card>
    <v-card density="compact">
      <v-card-title>compact</v-card-title>
      <v-card-text>
        <my-lorem></my-lorem>
      </v-card-text>
    </v-card>
  </v-preview>

  <v-preview flex="row">
    <v-card variant="tonal" class="my-2">
      <v-card-title>Title</v-card-title>
      <v-card-text>
        <my-lorem></my-lorem>
      </v-card-text>
      <v-card-actions>
        <button variant>Call</button>
        <v-spacer></v-spacer>
        <button variant=text color=error>Remove</button>
      </v-card-actions>
    </v-card>
    <v-card variant="tonal" class="my-2">
      <v-card-title>Title</v-card-title>
      <v-card-text>
        <my-lorem></my-lorem>
      </v-card-text>
      <v-card-actions>
        <button variant>Call</button>
        <v-spacer></v-spacer>
        <button variant=text color=error>Remove</button>
      </v-card-actions>
    </v-card>
  </v-preview>

  <article>
    <v-preview v-scope="{ show: 0 }">
      <v-card mx=auto style="width:344px">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>

        <v-card-title>
          Top western road trips
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
          <button color=orange-lighten-2 variant=text>
            Explore
          </button>

          <v-spacer></v-spacer>

          <button variant=text @click="show = !show">
            <v-icon :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"></v-icon>
          </button>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time
              for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data
              file!
              Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to
              find
              a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-preview>

  </article>

# Chips

  <article id="variants">
    <h3>Variants</h3>
    <v-preview>

      <v-chip close variant="tonal">
        default
      </v-chip>

      <v-chip variant="outlined">
        outlined
      </v-chip>

      <v-chip variant="elevated">
        elevated
      </v-chip>

      <v-chip variant=text>
        text
      </v-chip>

      <v-chip variant="plain">
        plain
      </v-chip>
    </v-preview>

  </article>

  <article>
    <h3>Colors</h3>
    <v-preview>
      <v-chip close color=orange>
        Chip
      </v-chip>
    </v-preview>
  </article>

  <article>
    <h3>Disabled</h3>
    <v-chip disabled color=orange>
      Chip
    </v-chip>

    <v-chip disabled variant="outlined" color=orange>
      Chip
    </v-chip>
    </v-preview>

  </article>

  <article>
    <h3>Label</h3>
    <p>Label chips use the <code>v-card</code> border-radius.</p>

    <v-preview>
      <v-chip ma=2 label>
        Label
      </v-chip>

      <v-chip ma=2 color=pink label text-color=white>
        <v-icon start icon="mdi-label"></v-icon>
        Tags
      </v-chip>

      <v-chip ma=2 color=primary label>
        <v-icon start icon="mdi-account-circle-outline"></v-icon>
        Jelle Hak
      </v-chip>

      <v-chip ma=2 closable color=cyan label>
        <v-icon start icon="mdi-twitter"></v-icon>
        New Tweets
      </v-chip>
    </v-preview>

  </article>

  <article>
    <h3>Outlined</h3>
    <v-preview>
      <div class="text-center">
        <v-chip ma=2 color=success variant="outlined">
          <v-icon start icon="mdi-server-plus"></v-icon>
          Server Status
        </v-chip>

        <v-chip ma=2 color=primary variant="outlined">
          User Account
          <v-icon end icon="mdi-account-outline"></v-icon>
        </v-chip>
      </div>
    </v-preview>

  </article>

  <article id="sizes">
    <h3>Sizes</h3>
    <p><code>v-chip</code> component can have various sizes from <code>x-small</code> to <code>x-large</code>.</p>
    <v-preview>
      <div class="text-center">
        <v-chip ma=2 size="x-small">
          x-small chip
        </v-chip>

        <v-chip ma=2 size="small">
          small chip
        </v-chip>

        <v-chip ma=2>
          Default
        </v-chip>

        <v-chip ma=2 size="large">
          large chip
        </v-chip>

        <v-chip ma=2 size="x-large">
          x-large chip
        </v-chip>
      </div>
    </v-preview>

  </article>

# inputs

  <v-preview>
    <v-field>
      <label>Label</label>
      <input type="search" placeholder="search" />
      <v-field-hint>hint</v-field-hint>
    </v-field>
    <v-field>
      <label>Label</label>
      <input type="number" placeholder="a number" />
      <v-field-hint>hint</v-field-hint>
    </v-field>
    <v-field>
      <label>Date</label>
      <input type="date" />
      <v-field-hint>hint</v-field-hint>
    </v-field>
    <v-field>
      <label>Date</label>
      <select>
        <option value="0">Select car:</option>
        <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option>
        <option value="5">Honda</option>
        <option value="6">Jaguar</option>
        <option value="7">Land Rover</option>
        <option value="8">Mercedes</option>
        <option value="9">Mini</option>
        <option value="10">Nissan</option>
        <option value="11">Toyota</option>
        <option value="12">Volvo</option>
      </select>
      <v-field-hint>v-hint</v-field-hint>
    </v-field>
  </v-preview>

  <v-preview>
    <div flex>
      <v-field>
        <label>Label</label>
        <input type="search" placeholder="search" />
        <v-field-hint>hint</v-field-hint>
      </v-field>
      <v-field>
        <label>Label</label>
        <input type="number" placeholder="a number" />
        <v-field-hint>hint</v-field-hint>
      </v-field>
      <v-field>
        <label>Date</label>
        <input type="date" />
        <v-field-hint>hint</v-field-hint>
      </v-field>
      <v-field>
        <label>Date</label>
        <select>
          <option value="0">Select car:</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Citroen</option>
          <option value="4">Ford</option>
          <option value="5">Honda</option>
          <option value="6">Jaguar</option>
          <option value="7">Land Rover</option>
          <option value="8">Mercedes</option>
          <option value="9">Mini</option>
          <option value="10">Nissan</option>
          <option value="11">Toyota</option>
          <option value="12">Volvo</option>
        </select>
        <v-field-hint>v-hint</v-field-hint>
      </v-field>
    </div>
  </v-preview>

# Switch

  <article>
    <v-preview v-scope="{}">
      <label>
        Label
        <v-switch></v-switch>
      </label>
      <label>
        <v-switch></v-switch>
        Label
      </label>
      <label>
        <v-switch></v-switch>
      </label>
      <label>
        <v-switch variant="round"></v-switch>
      </label>
      <label>
        <v-switch variant="round" color=red></v-switch>
      </label>
    </v-preview>
  </article>

# Buttons

The <code>button</code> component replaces the standard html button. To style the button add the <code>variant</code> attribute.

  <v-preview>
    <div flex justify=space-evenly
      v-for="color in ['default',...TYPES.semantic.colors, 'pink','orange','deep-purple', 'red']">
      <div width="10%">{{color}}</div>
      <template v-for="variant in TYPES.button.variants">
        <button :color=color :variant=variant>{{variant}}</button>
      </template>
      <!-- 
      <button :color=color variant>empty variant</button>
      <button :color=color variant=flat>flat</button>
      <button :color=color variant=tonal>tonal</button>
      <button :color=color variant=outlined>outlined</button>
      <button :color=color variant=text>text</button>
      <button :color=color variant=plain>plain</button> -->
    </div>
  </v-preview>

  <h3>Size control</h3>
  <v-preview>
    <div flex justify=space-evenly v-for="size in TYPES.sizes">
      <div width="10%">{{size}}</div>
      <template v-for="variant in TYPES.button.variants">
        <button :size=size :variant=variant>{{variant}}</button>
      </template>
      <button :size=size icon>
        <v-icon>mdi-weather-sunny</v-icon>
      </button>
      <button :size=size color=primary icon>
        <v-icon>mdi-weather-sunny</v-icon>
      </button>
    </div>
  </v-preview>

  <h3>Rounding</h3>
  <v-preview>
    <div flex v-for="rounding in TYPES.button.roundings">
      <div width="10%">{{rounding}}</div>
      <div v-for="variant in TYPES.button.variants">
        <button color=primary :rounding="rounding" :variant=variant>{{variant}}</button>
      </div>
    </div>
  </v-preview>

  <h3>Block</h3>
  <v-preview>
    <button block>browser native</button>
    <template v-for="variant in TYPES.button.variants">
      <button block :variant=variant>{{variant}}</button>
    </template>
  </v-preview>
