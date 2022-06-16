<template>
  <div class="text">login</div>
  <div>{{ store.name }}</div>
  <div>{{ store.nameLen }}</div>
  <div>{{ letter }}</div>
  <hello-world msg="这是一个测试" count="3"></hello-world>
</template>
<script setup lang="ts">
import { useMainStore } from "@/store";

import HelloWorld from "@/components/HelloWorld.vue";
import { computed } from "vue";

import { watch } from "vue";
const store = useMainStore();
const letter = computed(() => store.name.toLocaleLowerCase());
</script>

<style scoped lang="scss">
.text {
  color: green;
}
</style>
