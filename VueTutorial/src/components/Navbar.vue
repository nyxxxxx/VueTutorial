<template>
  <div class="navbar">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Week1' }">Week1</router-link>
    <router-link :to="{ name: 'Week2' }">Week2</router-link>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.router-link-active {
  color: red;
}

.router-link-exact-active {
  color: rgb(92, 170, 137);
}
</style>