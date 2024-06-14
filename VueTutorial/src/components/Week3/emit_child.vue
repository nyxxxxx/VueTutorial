<template>
  <!-- child.vue -->
  <div>
    <Button ripple type="button" label="Click me!" @click="$emit('alertMessage', 'i~ ya ha!')"></Button>
  </div>
</template>

<script setup>
const emit = defineEmits(['alertMessage'])
</script>

<style lang="scss" scoped>

</style>