<template>
  <!-- different between v-html and {{ }} -->
  <div class="border">
    <h2>v-html example</h2>
    {{ rawHtml }}
    <br>
    <span v-html="rawHtml"></span>
  </div>
  <!-- v-bind example -->
  <div class="border">
    <h2>v-bind example</h2>
    <!-- *Note: Shorthand of v-bind is : -->
    <span><b>Please check DOM to compare the differences.</b></span> <br>
    <span v-bind:id="spanId">Example with v-bind:id</span> <br>
    <span :id="spanId">Example with :id</span> <br>
    <span v-bind="bindingObject">Example with bindingObject</span>
  </div>
  <!-- v-on example -->
  <div class="border">
    <h2>v-on example</h2>
    <!-- You can call function with or without (). -->
    <!-- *Note: Shorthand of v-on is @ -->
    <button v-on:click="handleClick">click</button>
    <button @click.right="handleClick">right click</button>
  </div>
  <!-- v-show example -->
  <div class="border">
    <h2>v-show example</h2>
    <!-- Only add/remove "style:display:none;" -->
    <h3 v-show="showSwitch">v-show : true </h3>
    <h3 v-show="!showSwitch">v-show : false </h3>
    <button @click="handleToggle('showSwitch')">toggle</button>
  </div>
  <!-- v-if example -->
  <div class="border">
    <h2>v-if example</h2>
    <!-- Add/Remove from DOM -->
    <span><b>Please check DOM to compare the differences.</b></span> <br>
    <h3>counter : {{ counter }}, counter % 3 = {{ counter % 3 }}</h3>
    <h3 v-if="counter % 3 == 0">v-if</h3>
    <h3 v-else-if="counter % 3 == 1">v-else-if</h3>
    <h3 v-else>v-else</h3>
    <button @click="handleToggle('counter')">counter++</button>
  </div>
  <!-- v-for example -->
  <div class="border">
    <h2>v-for example</h2>
    <h4>My dinner</h4>
    <ul>
      <!-- *Note: v-for must add :key to ensure option's uniqueness. -->
      <li v-for="option in myDinnerList" :key="option">{{ option }}</li>
    </ul>
  </div>
  <!-- v-model example -->
  <div class="border">
    <h2>v-model example</h2>
    <span>{{ input }}</span> <br>
    <label for="InputExample">Input: </label>
    <!-- with modifiers .trim -->
    <input type="text" name="" id="InputExample" v-model.trim="input">
  </div>
  <!-- v-once example -->
  <div class="border">
    <h2>v-once example</h2>
    <span v-once>initial input: {{ input }}</span> <br>
    <label for="InputExample">Input: </label>
    <input type="text" name="" id="InputExample" v-model="input">
  </div>
  <!-- v-slot example -->
  <div class="border">
    <h2>v-slot example</h2>
    <SlotButton>
      Click me! <!-- slot content -->
    </SlotButton>
    <SlotButton></SlotButton>
    <br><br><br>
    <SlotWithName>
      <template #header>header</template>
      <template #default>main</template>
      <template #footer>footer</template>
    </SlotWithName>
  </div>
  <!-- dynamic arguments example -->
  <div class="border">
    <h2>dynamic arguments example</h2>
    <span v-bind:[customArgument.bind]="customArgument.bindValue">check id on DOM</span> <br>
    <button type="button" v-on:[customArgument.on]="handleClick()">Click me!</button>
  </div>
</template>

<script setup>
// This component is a set of vue directives example.

// Import component
import SlotButton from './SlotButton.vue';
import SlotWithName from './SlotWithName.vue';
// Create responsive variables with ref() or reactive(). And we need to import them first.
import { reactive, ref } from 'vue';

/**
 * for v-html example
 */
const rawHtml = ref('<span style="color: red">This should be red.</span>');
/**
* for v-bind example
*/
const spanId = ref('mySpanId');
/**
 * for v-bind example
 */
const bindingObject = reactive({
  id: 'spanId1',
  class: ['spanClass1', 'spanClass2'],
});
/**
 * for v-on example
 */
 function handleClick() {
  alert('v-on click');
}
/**
 * for v-show example
 */
 const showSwitch = ref(false);
/**
 * for v-if example
 */
const counter = ref(0);
/**
 * *Note: If we want to visit value of ref in script, we need to add ".value".
 * @param {string} type 'counter' || 'showSwitch'
 */
function handleToggle(type) {
  switch (type) {
    case 'counter':
      counter.value++;
      break;
    case 'showSwitch':
      showSwitch.value = !showSwitch.value;
      break;
  }
}
/**
 *@param {Array[string]} myDinnerList v-for options array
 */
const myDinnerList = ref(['curry', 'KFC', 'fried rice', 'beef noodles']);
/**
 *@param {string} input for v-model example
 */
const input = ref('input binding');
/**
 * for dynamic arguments example
 */
const customArgument = {
  bind: 'id',
  bindValue: 'test_id',
  on: 'click',
}
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid black;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
}
</style>