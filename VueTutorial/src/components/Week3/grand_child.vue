<template>
  <!-- child.vue -->
  <div>
    inject from grandparent: <input type="text" v-model="injecedtData">
  </div>
</template>

<script setup>
import { inject } from 'vue';

const injecedtData = inject('data');
</script>

<style lang="scss" scoped>

</style>