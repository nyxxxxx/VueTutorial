<template>
  <!-- child.vue -->
  <div>
    <!-- {{ name }} -->
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('usagi');
function callName() {
  alert(name.value);
}

defineExpose({
  name,
  callName
})
</script>

<style lang="scss" scoped>

</style>