<template>
  <el-menu-item v-if="!option.children">{{ option.meta.title }}</el-menu-item>
  <el-sub-menu v-else :index="index">
    <template #title>{{ option.meta.title }}</template>
    <Item
      v-for="(child, index2) in option.children"
      :option="child"
      :index="index + index2"
      :key="child.path"
    />
  </el-sub-menu>
</template>
<script setup lang="ts">
defineProps({
  option: {
    type: Object,
    required: true,
  },
  index: {
    type: String,
    required: true,
  },
});
</script>
<style scoped lang="scss"></style>
