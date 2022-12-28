<style>
  v-sheet {
    min-height: 100px;
    min-width: 100px
  }
</style>

<div v-scope="{ dark: true }" :class="dark ? 'v-theme--dark' : 'v-theme--light'">

# &nbsp;

<!-- docsify fix see https://github.com/docsifyjs/docsify/issues/1094 -->

<v-toolbar position=fixed color=deep-purple style="top:0">
  <button variant=text @click="dark = !dark">
    Toggle dark/light
    <v-icon v-if="!dark">mdi-weather-sunny</v-icon>
    <v-icon v-if="dark">mdi-weather-night</v-icon>
  </button>
</v-toolbar>

# Overlay

<v-preview height=25vh v-scope="{overlay:false}">
  Background
  <v-overlay contained flex=center>Overlay</v-overlay>
</v-preview>
<v-preview height=25vh v-scope="{overlay:false}">
  <v-btn
    color="error"
    @click="overlay = !overlay"
    >
      Show Overlay
  </v-btn>
  <v-overlay contained v-if="overlay">
    <v-flex flex=center>
      <button
        color="error"
        @click="overlay = false"
        >
          close
      </button>
    </v-flex>
  </v-overlay>
</v-preview>

# progress

<v-preview>
  <progress max="100" value="70"> 70% </progress>
</v-preview>

# progress-circular

## indeterminate

Using the <code>indeterminate</code> prop, a <code>v-progress-circular</code> continues to animate indefinitely.

<v-preview>
<div flex>
  <v-progress-circular indeterminate></v-progress-circular>
  <v-progress-circular size="s" indeterminate></v-progress-circular>
  <v-progress-circular color="primary" indeterminate></v-progress-circular>
  <v-progress-circular color="warning" size="s" indeterminate></v-progress-circular>
  </div>
</v-preview>

# Alert

<v-preview>
  <v-alert outlined>outlined</v-alert>
  <v-alert outlined shaped>outlined shaped</v-alert>
  <v-alert shaped>shaped</v-alert>
  <v-alert dense>dense</v-alert>
</v-preview>

## Colors

<v-preview>
  <v-alert color=success outlined>outlined</v-alert>
  <v-alert color=info outlined shaped>outlined shaped</v-alert>
  <v-alert color=warning shaped>shaped</v-alert>
  <v-alert color=error dense>dense</v-alert>
</v-preview>

> NOTE Vuetify uses `type` to indicate the color

# Toolbar

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

# List

The `v-list` component is used to display information. It can contain an avatar, content, actions, subheaders and much more. Lists present content in a way that makes it easy to identify a specific item in a collection. They provide a consistent styling for organizing groups of text and images.
<v-preview v-scope="{}">
<v-list nav>
<v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox"></v-list-item>
<v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisors"
      value="supervisors"></v-list-item>
<v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin"></v-list-item>
</v-list>
</v-preview>

<v-preview v-scope="{items: [
        {
          title: 'Item #1',
          value: 1,
        },
        {
          title: 'Item #2',
          value: 2,
        },
        {
          title: 'Item #3',
          value: 3,
        },
      ]}">
<v-list nav>
<v-list-item v-for="item in items" v-bind="item"></v-list-item>
</v-list>
</v-preview>

# Drawer

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

## Alignment

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

# Icons

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

# Sheet

The <code>v-sheet</code> component is a transformable piece of <span style="text-decoration:underline">paper</span> that provides a basic foundation.

<v-preview>
  <div flex>
    <v-sheet color=deep-purple></v-sheet>
    <v-sheet rounded></v-sheet>
    <v-sheet rounded="l">L</v-sheet>
    <v-sheet rounded="xl">XL</v-sheet>
  </div>
</v-preview>

## border

<v-preview>
<div flex>
<v-sheet border color=deep-purple></v-sheet>
<v-sheet border rounded></v-sheet>
<v-sheet border rounded="l">L</v-sheet>
<v-sheet border rounded="xl">XL</v-sheet>
</div>
</v-preview>

# Cards

The <code>v-card</code> component provides a simple interface
for headings, text, images, icons, and more.

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

## density

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

# Chips

## Variants

<v-preview>
  <v-chip close variant=tonal>
    default
  </v-chip>
  <v-chip variant=outlined>
    outlined
  </v-chip>
  <v-chip variant=elevated>
    elevated
  </v-chip>
  <v-chip variant=text>
    text
  </v-chip>
  <v-chip variant=plain>
    plain
  </v-chip>
</v-preview>

## Colors

<v-preview>
  <v-chip close color=orange>
    Chip
  </v-chip>
</v-preview>

## Disabled

<v-chip disabled color=orange>
  Chip
</v-chip>
<v-chip disabled variant="outlined" color=orange>
  Chip
</v-chip>

## Label

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

## Outlined

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

## Sizes

<code>v-chip</code> component can have various sizes from <code>x-small</code> to <code>x-large</code>.

<v-preview>
  <div class="text-center">
    <v-chip ma=2 size=x-small>
      x-small chip
    </v-chip>
    <v-chip ma=2 size=small>
      small chip
    </v-chip>
    <v-chip ma=2>
      Default
    </v-chip>
    <v-chip ma=2 size=large>
      large chip
    </v-chip>
    <v-chip ma=2 size=x-large>
      x-large chip
    </v-chip>
  </div>
</v-preview>

# Inputs

## Fields

<v-preview>
  <v-field>
    <label>Label</label>
    <input type=search placeholder="search" />
    <v-field-hint>hint</v-field-hint>
  </v-field>
  <v-field>
    <label>Label</label>
    <input type=number placeholder="a number" />
    <v-field-hint>hint</v-field-hint>
  </v-field>
  <v-field>
    <label>Date</label>
    <input type=date />
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

## Switch

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
    <v-switch variant=round></v-switch>
  </label>
  <label>
    <v-switch variant=round color=red></v-switch>
  </label>
  <v-field>
    <label>switch
      <v-switch variant=round color=red></v-switch>
    </label>
  </v-field>
</v-preview>

## Dynamic form

<v-preview v-scope="{form:{}}">
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

# Buttons

The <code>button</code> component replaces the standard html button. To style the button add the <code>variant</code> attribute.

<v-preview>
  <button variant>button</button>
  <button variant="">button</button>
  <button variant=tonal>button</button>
</v-preview>

## Colors and variants

<v-preview>
  <div flex justify=space-evenly
    v-for="color in ['',...TYPES.semantic.colors, 'pink','orange','deep-purple', 'red']">
    <div width="10%">{{color}}</div>
    <template v-for="variant in TYPES.button.variants">
      <button :color=color :variant=variant>{{variant}}</button>
    </template>
  </div>
</v-preview>

## Size control

<v-preview>
  <div flex justify=space-evenly v-for="size in TYPES.sizes">
    <div width="10%">{{size}}</div>
    <template v-for="variant in TYPES.button.variants">
      <button :size="size" :variant=variant>{{variant}}</button>
    </template>
    <button :size="size" color=primary icon>
      <v-icon>mdi-weather-sunny</v-icon>
    </button>
  </div>
</v-preview>

<v-preview>
  <!-- <div class="d-flex justify-space-around align-center flex-column flex-md-row fill-height"> -->
  <div flex=column align=center justify=space-around>
    <button variant
      size="x-small"
      color="secondary"
    >
      Extra small Button
    </button>
    <button variant
      size="small"
      color="primary"
    >
      Small Button
    </button>
    <button variant
      color="warning"
    >
      Normal Button
    </button>
    <button variant
      color="error"
      size="large"
    >
      Large Button
    </button>
    <button variant
      size="x-large"
      color="success"
    >
      Extra large Button
    </button>
  </div>
  <div flex=column align=center justify=space-around>
    <button variant
      color="secondary"
      icon="mdi-television"
      size="x-small"
    ></button>
    <button variant
      color="primary"
      icon="mdi-pencil"
      size="small"
    ></button>
    <button variant
      color="warning"
      icon="mdi-account-circle"
    ></button>
    <button variant
      color="error"
      icon="mdi-alarm"
      size="large"
    ></button>
    <button variant
      color="success"
      icon="mdi-domain"
      size="x-large"
    ></button>
  </div>
</v-preview>

## Block

<v-preview>
  <button block>browser native</button>
  <template v-for="variant in TYPES.button.variants">
    <button block :variant=variant>{{variant}}</button>
  </template>
</v-preview>

</div>
