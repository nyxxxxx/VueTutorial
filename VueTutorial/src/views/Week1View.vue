<template>
  <div>
    <h1>Week1</h1>
    <h2>Directives</h2>
    <div>
      <img src="@img/hachi.gif" class="logo vue" alt="Vue logo" />
    </div>
    <!-- Children component -->
    <Directives></Directives>
  </div>
</template>

<script setup>
// We can import component in <script setup> and use it in <template>.
import Directives from '@/components/Week1/DirectivesExample.vue'
</script>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>