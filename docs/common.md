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

# Display helpers

The display helpers allow you to control the display of content. This includes being conditionally visible based upon the current viewport, or the actual element display type.

{{viewport}}

<div>
  <div hide="small">
    hide on small screens 
  </div>
  <div hide="medium">
    hide on medium screens
  </div>
  <div hide="large">
    hide on large screens
  </div>
  <!-- <div show="small">
    show on small screens 
  </div>
  <div show="medium">
    show on medium screens
  </div>
  <div show="large">
    show on large screens
  </div> -->
</div>


# Color modifiers

<v-preview>
  <template v-for="color in TYPES.semantic.colors">
    <v-sheet :color="color">{{color}}</v-sheet>
  </template>
  <v-sheet style='background:#03DAC6;'></v-sheet>
</v-preview>

# Spacing helpers

The property applies the type of spacing:

- `m` - applies margin
- `p` - applies padding
- `x` - applies the spacing for both _-left and _-right
- `y` - applies the spacing for both _-top and _-bottom
- `a` - applies the spacing for the property in all directions

<v-preview>
  <div flex>
    <v-sheet ma=0>0</v-sheet>
    <v-sheet ma=1>1</v-sheet>
    <v-sheet ma=2>2</v-sheet>
    <v-sheet ma=3>3</v-sheet>
    <v-sheet ma=4>4</v-sheet>
    <v-sheet ma=5>5</v-sheet>
  </div>
</v-preview>

<v-preview>
  <div flex>
    <v-sheet mx=0>0</v-sheet>
    <v-sheet mx=1>1</v-sheet>
    <v-sheet mx=2>2</v-sheet>
    <v-sheet mx=3>3</v-sheet>
    <v-sheet mx=4>4</v-sheet>
    <v-sheet mx=5>5</v-sheet>
  </div>
</v-preview>

> NOTE this is a compacted version of https://next.vuetifyjs.com/en/styles/spacing/

# Text helpers

## align

<v-preview>
  <span text=left>left</span>
  <span text=right>right</span>
  <span text=center>center</span>
  <span text=justify>justify this text</span>
  <span text=start>start</span>
  <span text=end>end</span>
</v-preview>

## Typography

Control the size and style of text using the Typography helper classes. These values are based upon the [Material Design type specification](https://m2.material.io/design/typography/the-type-system.html).
<v-preview>
<span v-for="text in ['h1','h2','h3','h4','h5','h6','subtitle-1','subtitle-2', 'body-1', 'body-2','button', 'caption','overline']" :text=text>{{text}}</span>
</v-preview>

</div>
