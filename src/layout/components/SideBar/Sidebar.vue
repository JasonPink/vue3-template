<template>
  <div class="layout-side">
    <Logo v-if="appStore.getAppSettings.showLogo" />
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :background-color="'#304156'"
      :text-color="'#bfcbd9'"
      :unique-opened="false"
      :active-text-color="'#409eff'"
      :collapse-transition="false"
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
import Logo from './Logo.vue';
import SidebarItem from './SidebarItem.vue';
import { routes } from '@/router/index';
import { useAppStore } from '@/store';
// import variables from '@/assets/styles/variables.scss';
const appStore = useAppStore();

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
