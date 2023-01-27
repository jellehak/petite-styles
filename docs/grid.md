# &nbsp;

<!-- docsify fix see https://github.com/docsifyjs/docsify/issues/1094 -->

<v-preview>
  <div grid="3">
    <v-card variant=outlined>column</v-card>
    <v-card variant=outlined>column</v-card>
    <v-card variant=outlined>column</v-card>
  </div>
</v-preview>

<v-preview>
  <div grid="4">
    <v-card variant=outlined>column</v-card>
    <v-card variant=outlined>column</v-card>
    <v-card variant=outlined>column</v-card>
    <v-card variant=outlined>column</v-card>
  </div>
</v-preview>

# Responsive

> Resize screen to see changes

<div>
Current viewport:
 <span show=xs>
    extra small
  </span>
 <span show=sm>
    small 
  </span>
  <span show=md>
    medium
  </span>
  <span show=lg>
    large
  </span>
  <span show=xl>
    extra large
  </span>
</div>

<v-preview>
  <div grid="1" grid-sm="2" grid-md="4" gap=small>
    <v-card variant=outlined>column</v-card>
    <v-card variant=outlined>column</v-card>
    <v-card variant=outlined>column</v-card>
    <v-card variant=outlined>column</v-card>
  </div>
</v-preview>

# Gap control

<v-preview>
  <h2>Small</h2>
  <div grid="2" gap=small>
    <v-card variant=outlined>column</v-card>
    <v-card variant=outlined>column</v-card>
    <v-card variant=outlined>column</v-card>
    <v-card variant=outlined>column</v-card>
  </div>
  <h2>Medium</h2>
  <div grid="2" gap=medium>
    <v-card variant=outlined>column</v-card>
    <v-card variant=outlined>column</v-card>
    <v-card variant=outlined>column</v-card>
    <v-card variant=outlined>column</v-card>
  </div>
  <h2>Large</h2>
  <div grid="2" gap=large>
    <v-card variant=outlined>column</v-card>
    <v-card variant=outlined>column</v-card>
    <v-card variant=outlined>column</v-card>
    <v-card variant=outlined>column</v-card>
  </div>
</v-preview>
