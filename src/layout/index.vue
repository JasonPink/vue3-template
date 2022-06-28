<template>
  <div class="layout-wrapper">
    <side-bar></side-bar>
    <app-main></app-main>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import SideBar from './components/SideBar/index.vue';
import AppMain from './components/AppMain.vue';
</script>
<style scoped lang="scss">
.layout-wrapper {
  display: flex;
}
</style>
