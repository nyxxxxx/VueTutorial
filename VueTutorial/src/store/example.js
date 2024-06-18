// exampleStore.js
import { defineStore } from "pinia";
import { computed } from "vue";

export const exampleStore = defineStore('storeName', {
  // data
  state: () => {
    return {
      User: {
        firstName: 'Riho',
        lastName: 'Yoshioka',
        job: 'Actress'
      },
    }
  },
  // computed
  getters: {
    fullName: (state) => { 
      return `${state.User.firstName} ${state.User.lastName}` 
    },
    addHonorifics() {
      return `Ms. ${this.fullName}`
    }
  },
  // method
  actions: {
    surprise() {
      const counterStore = useCounterStore();
      alert('surprise! '+ counterStore.$state.name);
    },
    async getAPI() {
      // fetch your response here
    }
  }
})

export const useCounterStore = defineStore('counterStore', ()=>{
  const count = ref(0) // state properties
  const name = ref('Shiroko'); // state properties
  const doubleCount = computed(()=> count.value * 2); // getters
  const doublePlusOne = computed(()=> doubleCount.value + 1)
  function increment() { // action
    count.value++;
  }
  // You need to write resetting function yourself if use composition API.
  function $reset() {
    count.value = 0;
    name.value = 'Shiroko'
  }
  return { count, name, doubleCount, increment }
})

export const useCartStore = defineStore('cartStore', {
  state: ()=> {
    return {
      name: '',
      type: '',
    }
  }
})