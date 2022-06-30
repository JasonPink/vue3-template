<template>
  <div>
    show Logo:
    <el-switch v-model="settings.showLogo" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useUserStore, useAppStore } from '@/store';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const appStore = useAppStore();
const { settings } = storeToRefs(appStore);

const { name, age } = storeToRefs(userStore);
const count = ref(10);
const person = reactive({
  name: '张三',
  age: 18,
});
const add = () => {
  userStore.age++;
};
const handleAdd = () => {
  userStore.$patch({
    name: 'yetao',
    age: userStore.age - 1,
  });
};
const funcAdd = () => {
  userStore.$patch((state) => {
    state.age++;
  });
};
const init = () => {
  userStore.INIT_STATUS();
};
</script>
<style scoped lang="scss"></style>
