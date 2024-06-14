<template>
  <!-- child.vue -->
  <div>
    <h4>傳入的值: {{ props.name }}</h4>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: 'default'
  }
})
</script>

<style lang="scss" scoped>

</style>