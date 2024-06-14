<template>
  <Navbar></Navbar>
  <div class="container">
    <div class="content">
      <router-view v-slot="{ Component }">
        <Transition mode="out-in">
          <component :is="Component"></component>
        </Transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
