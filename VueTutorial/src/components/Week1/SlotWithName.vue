<template>
  <!-- SlotWithName.vue -->
  <div class="container">
    <header>
      <slot v-if="$slots.header" name="header"></slot>
    </header>
    <main>
      <slot v-if="$slots.default"></slot>
    </main>
    <footer>
      <slot v-if="$slots.footer" name="footer"></slot>
    </footer>
  </div>
</template>

<script setup>
// JS here
</script>

<style lang="scss" scoped>
// Style here</style>