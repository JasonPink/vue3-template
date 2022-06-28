<template>
  <div class="layout-side">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <sub-item
        v-for="(route, index) in routes"
        :option="route"
        :index="index + ''"
        :key="route.path"
      />
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import SubItem from './Item.vue';
// import {
//   Document,
//   Menu as IconMenu,
//   Location,
//   Setting,
// } from '@element-plus/icons-vue';
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
