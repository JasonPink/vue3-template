<template>
  <div class="layout-side">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <sidebar-item
        v-for="route in routes"
        :item="route"
        :key="route.path"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import SidebarItem from './SidebarItem.vue';
import { routes } from '@/router/index';
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style scoped lang="scss">
.layout-side {
  width: 200px;
}
</style>
