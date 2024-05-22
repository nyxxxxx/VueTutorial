<script setup>
import {
  ref
} from 'vue'
// Props can receive data from parent component.
defineProps({
  msg: String,
})
// ref is a kind of responsive variable in vue.
// when "count" is changed, vue will re-render every part that count exist on webpage.
const count = ref(0)
</script>

<template>
  <!-- *Note: Every component has their own HTML(template)、CSS(style)、JS(script). -->
  <!-- We can use {{  }} to show variable above. -->
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a> in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
