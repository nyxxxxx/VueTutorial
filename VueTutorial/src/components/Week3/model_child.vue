<template>
  <!-- child.vue -->
  <div>
    <input type="text" v-model="message">
  </div>
</template>

<script setup>
const message = defineModel('message');
</script>

<style lang="scss" scoped>

</style>