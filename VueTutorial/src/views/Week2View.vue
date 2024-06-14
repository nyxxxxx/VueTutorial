<template>
  <div>
    <h1>Week2</h1>
    <h2>Router</h2>
    <div class="border">
      <h3>Basic router usage</h3>
      <h4>*Check source code to compare the difference*</h4>
      <!-- *NOTE: <router-link> doesn't need to be imported. -->
      <!-- to="/" equals to :to="{path: '/'}" -->
      <router-link to="/">Home</router-link>
      <router-link :to="{ path: '/' }">Home</router-link>
      <!-- You can name your page at router/index.js. And you can route to according to "name". -->
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <!-- "replace" attr can prevent from adding a new history. -->
      <router-link :to="{ name: 'Home' }" replace>Home</router-link>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <!-- You can pass URL parameters with "query" or "params". -->
      <router-link :to="{ name: 'Home', query: { 'test': '123' } }">Home</router-link>
      <!-- You should set route with your params's name before here. -->
      <router-link :to="{ name: 'Home', params: { 'test': '123' } }">Home</router-link>
    </div>
    <div class="border">
      <h3>Nested route</h3>
      <h4></h4>
      <!-- *Using "name" to specify routes is more explicit.  -->
      <!-- "First" and "Second" are children routes of "Week2" -->
      <!-- Compare <router-link>'s class to Navbar <router-link>'s class. -->
      <router-link :to="{ name: 'nested-first' }">First</router-link>
      <router-link :to="{ name: 'nested-second' }">Second</router-link>
      <!-- It will render the second depth of component (EX: /week2/first) -->
      <router-view></router-view>
    </div>
    <div class="border">
      <h3>Life hook</h3>
      <!-- Click Button will increase "counter". And "onBeforeUpdate" will trigger before rerendering the button -->
      <Button type="button" @click="counter++">{{ counter }}</Button>
    </div>
    <div class="border">
      <h3>build-in component : Transition</h3>
      <Button type="button" @click="show = !show">switch</Button>
      <!-- If you name your transition component, your class name will change. -->
      <Transition name="bounce" enter-active-class="bounce-in" leave-active-class="bounce-out">
        <p v-if="show">Bouncing World!</p>
      </Transition>
    </div>
    <div class="border">
      <h3>build-in component : TransitionGroup</h3>
      <div>
        <Button type="button" @click="editItem('add')">add</Button>
        <Button type="button" @click="editItem('remove')">remove</Button>
        <Button type="button" @click="editItem('shuffle')">shuffle</Button>
      </div>
      <ul class="list">
      <TransitionGroup name="list">
          <li v-for="item in items" :key="item">
            {{ item }}
          </li>
        </TransitionGroup>
      </ul>
    </div>
    <div class="border">
      <h3>KeepAlive & Dynamic Component</h3>
      <h4>*Check source code to compare the difference*</h4>
      <Button type="button" @click="()=>{current = current === componentA ? componentB: componentA}">switch component</Button>
      <!-- Only keep componentA -->
      <KeepAlive :include="['componentA']">
        <component :is="current"></component>
      </KeepAlive>
      <!-- Don't keep componentA -->
      <KeepAlive :exclude="['componentA']">
        <component :is="current"></component>
      </KeepAlive>
      <!-- maximum number of keeping components. -->
      <KeepAlive :max="2">
        <component :is="current"></component>
      </KeepAlive>
    </div>
  </div>
</template>

<script setup>
import { shuffle } from 'lodash';
import { onBeforeUpdate, onMounted, onUnmounted, ref, shallowRef } from 'vue';
import componentA from '../components/Week2/componentA.vue';
import componentB from '../components/Week2/componentB.vue';
const counter = ref(0)
const show = ref(true)
const items = ref([1, 2, 3, 4])
const itemCounter = ref(items.value.length);
const current = shallowRef(componentA);
onMounted(() => {
  // Triggered when finished rendering initial DOM in this component.
  // alert('Mounted')
})
onBeforeUpdate(() => {
  // Triggered before rerendering.
  // alert('BeforeUpdate')
})
onUnmounted(() => {
  // Triggered before destroying this component.
  // alert('Unmounted')
})
/**
 * @returns {number} a random index in items array.
 */
const randomIndex = () => {
  return Math.floor(Math.random() * items.value.length)
}
/**
 * add/remove item at random index or shuffling the order of item.
 * @param {string} type 'add' or 'remove' or'shuffle'
 */
const editItem = (type) => {
  const index = randomIndex();
  switch (type) {
    case 'add':
      itemCounter.value++;
      items.value.splice(index, 0, itemCounter.value)
      break;
    case 'remove':
      items.value.splice(index, 1)
      break;
    case 'shuffle':
      items.value = shuffle(items.value);
      break;
  }
}
</script>

<style lang="scss" scoped>

.router-link-exact-active {
  color: rgb(92, 170, 137);
}

// setting <Transition> style
.bounce-in {
  animation: bounce-in 0.5s;
}

.bounce-out {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}

// <TransitionGroup> Style
.list li {
  text-align: start;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>