# &nbsp;

<!-- docsify fix see https://github.com/docsifyjs/docsify/issues/1094 -->

# Introduction
The response grid is naming is inspired by the Vuetify grid system.

codes: xs, sm, md, lg, xl

## 4/12 or full width on smaller devices
<v-preview>
  <div display=grid height="25vh">
    <v-card variant=outlined sm=4>column</v-card>
    <v-card variant=outlined sm=4>column</v-card>
    <v-card variant=outlined sm=4>column</v-card>
  </div>
</v-preview>

## Always full width
<v-preview>
  <div display=grid height="25vh">
    <v-card variant=outlined cols=12>column</v-card>
    <v-card variant=outlined cols=12>column</v-card>
    <v-card variant=outlined cols=12>column</v-card>
  </div>
</v-preview>

## Always half width 
<v-preview>
  <div display=grid height="25vh">
    <v-card variant=outlined cols=6>column</v-card>
    <v-card variant=outlined cols=6>column</v-card>
    <v-card variant=outlined cols=6>column</v-card>
  </div>
</v-preview>

## 3/12 or half width on smaller devices
<v-preview>
  <div display=grid height="25vh">
    <v-card variant=outlined sm=3 cols=6>column</v-card>
    <v-card variant=outlined sm=3 cols=6>column</v-card>
    <v-card variant=outlined sm=3 cols=6>column</v-card>
    <v-card variant=outlined sm=3 cols=6>column</v-card>
  </div>
</v-preview>

## 3/12 or half width on smaller devices
<v-preview>
  <div display=grid height="25vh" style="gap:10px;">
    <v-card variant=outlined sm=3 cols=6>column</v-card>
    <v-card variant=outlined sm=3 cols=6>column</v-card>
    <v-card variant=outlined sm=3 cols=6>column</v-card>
    <v-card variant=outlined sm=3 cols=6>column</v-card>
  </div>
</v-preview>

