<template>
  <div class="layout-wrapper">
    <side-bar class="sidebar-container"></side-bar>
    <app-main></app-main>
  </div>
</template>
<script setup lang="ts">
import { SideBar, AppMain } from './components';
</script>
<style scoped lang="scss">
.layout-wrapper {
  display: flex;
  height: 100vh;
}
</style>
