<template>
  <!-- *Remember App.vue is the root component of all. -->
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <!-- Import img from public/ -->
      <img src="/test/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <!-- Import img from ./src/assets/img -->
      <img src="@img/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- Children component -->
  <Directives></Directives>
</template>

<script setup>
// We can import component in <script setup> and use it in <template>.
import Directives from './components/DirectivesExample.vue'
</script>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
