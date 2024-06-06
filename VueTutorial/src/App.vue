<template>
  <Navbar></Navbar>
  <Transition>
    <router-view></router-view>
  </Transition>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
