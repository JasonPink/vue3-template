<template>
  <template v-if="showSidebarItem(item.children, item)">
    <Link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
      <el-menu-item
        :index="resolvePath(onlyOneChild.path)"
        :class="{ 'submenu-title-noDropdown': !isNest }"
      >
        <item :meta="onlyOneChild.meta || item.meta" />
        <template #title>{{ onlyOneChild.meta?.title }}</template>
      </el-menu-item>
    </Link>
  </template>
  <el-sub-menu
    v-else
    ref="subMenu"
    :index="resolvePath(item.path)"
    popper-append-to-body
  >
    <template v-if="item.meta" #title>
      <item :meta="item.meta" />
      <span>{{ item.meta.title }}</span>
    </template>
    <SidebarItem
      v-for="child in item.children"
      :key="child.path"
      :is-nest="true"
      :item="child"
      :base-path="resolvePath(child.path)"
    />
  </el-sub-menu>
</template>

<script setup lang="ts">
import path from 'path';
import { ref } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import Item from './Item';
import Link from './Link.vue';

interface RouteItemTy {
  hidden?: boolean;
  alwaysShow?: boolean;
  code?: number;
  name?: string;
  fullPath?: string;
  path?: string;
  meta?: {
    title: string;
    icon?: string;
    affix?: boolean;
    activeMenu?: string;
    breadcrumb?: boolean;
    roles?: Array<string>;
    elSvgIcon?: string;
    code?: number;
    cachePage?: boolean;
    leaveRmCachePage?: boolean;
    closeTabRmCache?: boolean;
  };
  children?: RouterTy;
  redirect?: string;
}

type RouterRowTy = RouteRecordRaw & RouteItemTy;
type RouterTy = Array<RouterRowTy>;
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  basePath: {
    type: String,
    default: '',
  },
  isNest: {
    type: Boolean,
    default: false,
  },
});

const isExternal = (path: string): boolean => {
  return /^(https?:|mailto:|tel:)/.test(path);
};

let onlyOneChild: any = ref(null);
const showSidebarItem = (children = [], parent: RouteItemTy) => {
  const showingChildren = children.filter((item: RouteItemTy) => {
    if (item.hidden) {
      return false;
    } else {
      // Temp set(will be used if only has one showing child)
      onlyOneChild.value = item;
      return true;
    }
  });
  if (showingChildren.length === 1 && !parent?.alwaysShow) {
    return true;
  }
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noChildren: true };
    return true;
  }
  return false;
};
const resolvePath = (routePath: string) => {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(props.basePath)) {
    return props.basePath;
  }
  return path.resolve(props.basePath, routePath);
};
</script>
<style scoped lang="scss"></style>
