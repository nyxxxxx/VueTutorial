<template>
  <h2>PassValue Example</h2>
  <div class="border">
    <h4>Props</h4>
    <props_child :name="'usagi'"></props_child>
  </div>
  <div class="border">
    <h4>Emit</h4>
    <emit_child @alertMessage="handleAlert"></emit_child>
  </div>
  <div class="border">
    <h4>defineExpose()</h4>
    <expose_child ref="exposeChild"></expose_child>
    <!-- I catch value at onMounted. -->
  </div>
  <div class="border">
    <h4>defineModel()</h4>
    <span>data from parent: {{ message }}</span><br>
    <model_child v-model:message="message"></model_child>
  </div>
  <div class="border">
    <h4>provide & inject</h4>
    <span>"{{ input }}" is from grandparent.</span>
    <child></child>
  </div>
</template>

<script setup>
// child components are import from src/components/Week3/~
import { onMounted, provide, ref } from 'vue';

onMounted(()=>{
  console.log('expose', exposeChild.value.name);
})
// accept data from emit event
function handleAlert(data) {
  alert(data);
}

const exposeChild = ref(null);
const message = ref('for defineModel');
const input = ref('grandparent data');
provide('data', input);
</script>

<style lang="scss" scoped></style>