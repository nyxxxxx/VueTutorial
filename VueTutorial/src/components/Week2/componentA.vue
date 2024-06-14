<template>
  <div>
    <Button type="button" @click="counter++">{{ counter }}</Button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const counter = ref(0);
</script>

<style lang="scss" scoped>

</style>