<template>
  <div class="layout-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
const cachedViews = reactive([]);
</script>
<style scoped lang="scss">
.layout-main {
  flex: 1;
}
</style>
