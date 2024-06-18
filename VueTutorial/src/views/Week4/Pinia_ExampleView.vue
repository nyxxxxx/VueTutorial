<template>
  <div>
    <h2>Pinia</h2>
    <div class="border">
      <h4>Example</h4>
      <span>User Full Name: {{ example.fullName }}</span><br><br>
      <span>addHonorifics: {{ example.addHonorifics }}</span><br><br>
      <div>
        <label for="">firstName: </label>
        <inputText v-model="User.firstName"></inputText>
      </div><br>
      <div>
        <label for="">lastName: </label>
        <inputText v-model="User.lastName"></inputText>
      </div><br><br>
      <Button label="surprise!" @click="example.surprise"></Button>
      <br><br>
      <Button label="reset state" @click="example.$reset()" severity="warning"></Button>
      <br><br>
      <Button label="add zero" @click="handleClick" severity="info"></Button>
    </div>
    <div class="border">
      <h4>store.$subscribe test</h4>
      <div>
        <label for="">item name: </label>
        <inputText v-model="name"></inputText>
      </div><br>
      <div>
        <label for="">item type: </label>
        <inputText v-model="type"></inputText>
      </div><br>
      <Button label="edit cart name with patch object" @click="cartPatch('object')" severity="info"></Button>
      <br><br>
      <Button label="edit cart name with patch function" @click="cartPatch('function')" severity="info"></Button>
    </div>
  </div>
</template>

<script setup>
import { exampleStore, useCartStore } from '../../store/example';
import { storeToRefs } from 'pinia';
const example = exampleStore();
const cartStore = useCartStore();
// construct state into "ref"
const { User } = storeToRefs(example);
const { name, type } = storeToRefs(cartStore);
const handleClick = () => {
  example.$patch((state) => {
    state.User.firstName += 'o'
  })
}
const cartPatch = (type) => {
  switch (type) {
    case 'object':
      cartStore.$patch({
        name: name.value + 'z'
      })
      break;
    case 'function':
      cartStore.$patch((state) => {
        state.name += 'z',
        state.type += 'x'
      })
      break;
  }
}
cartStore.$subscribe((mutation, state) => {
  // 'direct': cartStore.name = "ice cream"
  // 'patch object': edit with $patch object
  // 'patch function': edit with $patch function
  mutation.type;
  // same with cartStore.$id
  mutation.storeId;
  // only available with mutation.type==='patch object'
  mutation.payload;

  console.group('subscribe');
  console.log('type', mutation.type);
  console.log('cart', state);
  if (mutation.type === 'patch object') {
    console.log('payload', mutation.payload);
  }
  console.groupEnd();
})
</script>
<style lang="scss" scoped></style>