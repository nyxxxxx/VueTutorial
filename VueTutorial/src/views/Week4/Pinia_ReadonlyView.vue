<template>
  <div>
    <h2>Pinia - Readonly</h2>
    <div class="border">
      <h4>You can keep your state when entering different pages.</h4>
      <span>{{ fullName }}</span><br><br>
    </div>
  </div>
</template>

<script setup>
import { exampleStore } from '../../store/example';
import { storeToRefs } from 'pinia';
const example = exampleStore();
const { fullName }= storeToRefs(example);

</script>
<style lang="scss" scoped>

</style>