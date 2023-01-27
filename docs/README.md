# Sailplane

a lightweight CSS/UI Framework based on handy selectors and a sprinkle of JavaScript

Designed to be:

- **lightweight**.
- **performant** by using little javascript.
- **user friendly** suppling great dark/light color scheme.
- **developer friendly** due to clear markup.
- **framework friendly** can be used in many frameworks.
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

## Motivation
We have been using Bootstrap, Vuetify (Vue), W3.CSS and to some extend MUI and Ant Design (React) for our projects. These are all great libraries but not suited for smaller projects or just a static webpages. After playing around with `Alpine` and `Petite-vue` we kind of missed an easy to use UI library. So we went under the hood of some of these libraries and created a set of style rules and webcomponents that work with any framework.

# Usage
```html
<style>
@import url(../style.css);
</style>
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
