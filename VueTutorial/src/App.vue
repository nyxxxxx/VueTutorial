<template>
  <Navbar></Navbar>
  <router-view v-slot="{Component}">
    <Transition mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </router-view>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
