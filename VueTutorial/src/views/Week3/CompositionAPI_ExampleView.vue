<template>
  <div>
    <h2>Composition API Example</h2>
    <div class="border">
      <h4>You could try editing "welcomeMessage" at vue-dev-tools.</h4>
      <p>{{ `${welcomeMessage}, ${user.name}.` }}</p>
    </div>
  </div>
  <div class="border">
    <h4>Vue will warn and deny the changing if you edit the property from "readonly".</h4>
    <span>name from readonly: </span><input type="text" v-model="copy.name">
    <br><br>
    <!-- You can edit original object thus readonly property will rerender. -->
    <span>name from original: </span><input type="text" v-model="user.name">
    <br><br><h4>{{ `readonly name: ${copy.name}` }}</h4>
  </div>
  <div class="border">
    <h4>"computed" will rerender when name or color change.</h4>
    <h4>{{ fullInformation }}</h4>
    <span>color: </span><input type="text" v-model="user.color">
    <br><br><span>age: </span><input type="number" v-model="user.age">
  </div>
  <div class="border">
    <!-- We create a "watch" for "user.age". -->
    <h4>Check console if you change the age value.</h4>
    <span>age: </span><input type="number" v-model="user.age">
  </div>
  <div class="border">
    <h4>It won't rerender if only change value in the property of shallowRef.</h4>
    <h4>{{ shallowUser1.name }}</h4>
    <input type="text" v-model="shallowUser1.name">
  </div>
  <div class="border">
    <h4>It will rerender if change value in the property of shallowReactive.</h4>
    <h4>{{ shallowUser2.name }}</h4>
    <input type="text" v-model="shallowUser2.name">
  </div>
  <div class="border">
    <h4>Tool function basically use in JS. You can console your own test at onMounted hook.</h4>
  </div>
</template>

<script setup>
import { computed, reactive, readonly, ref, watch, watchEffect, shallowRef, shallowReactive, toValue, onMounted, isRef } from 'vue';
// ref is a kind of responsive variable.
const welcomeMessage = ref('Hello');
// So does "reactive".But reactive only accepts "Object" and "Array".
const user = reactive({
  name: 'usagi',
  age: 1,
  gender: 'male',
  color: 'yellow'
});
// readonly accept "Object".
const copy = readonly(user);
const fullInformation = computed(()=>{
  return `${user.name}'s color is ${user.color}'`
})

watch(()=>user.age, (newValue, oldValue)=>{
  console.group(`${user.name}'s age`)
  console.log("newValue", newValue);
  console.log("oldValue", oldValue);
  console.groupEnd()
})

watchEffect(()=>{
  // It will trigger once when this component is created.
  console.log('trigger from watchEffect',user.age);
})

const shallowUser1 = shallowRef({
  name: 'hachi'
})
const shallowUser2 = shallowReactive({
  name: 'chii'
})

onMounted(()=>{
  console.log('welcomeMessage isRef', isRef(welcomeMessage));
  console.log('user isRef', isRef(user));
})

</script>

<style lang="scss" scoped>

</style>