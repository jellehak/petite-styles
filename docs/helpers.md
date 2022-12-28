# &nbsp;

<!-- docsify fix see https://github.com/docsifyjs/docsify/issues/1094 -->

# Introduction
Helpers are optional. But handy to use.

# Flex
<v-preview>
  <div flex=center height="25vh">
    <v-card variant=outlined>center</v-card>
  </div>
</v-preview>

<v-preview>
  <div flex justify=center>
    <v-card variant=outlined>text</v-card>
    <v-card variant=outlined>text</v-card>
  </div>
  <div flex justify=space-between>
    <v-card variant=outlined>text</v-card>
    <v-card variant=outlined>text</v-card>
  </div>
  <div flex justify=space-around>
    <v-card variant=outlined>text</v-card>
    <v-card variant=outlined>text</v-card>
  </div>
  <div flex justify=space-evenly>
    <v-card variant=outlined>text</v-card>
    <v-card variant=outlined>text</v-card>
  </div>
</v-preview>

# Sizing

## width

<v-preview>
  <v-card variant=outlined width="25">25</v-card>
  <v-card variant=outlined width="50">50</v-card>
  <v-card variant=outlined width="75">75</v-card>
  <v-card variant=outlined width="100">100</v-card>
</v-preview>

## height

<v-preview>
  <div flex height="50vh">
    <v-card variant=outlined height="25">25</v-card>
    <v-card variant=outlined height="50">50</v-card>
    <v-card variant=outlined height="75">75</v-card>
    <v-card variant=outlined height="100">100</v-card>
  </div>
</v-preview>
