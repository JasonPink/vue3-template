<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { isExternal } from '@/utils/validate';

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});

const isExternalValid = computed(() => {
  return isExternal(props.to);
});
const type = computed(() => {
  if (isExternalValid.value) {
    return 'a';
  }
  return 'router-link';
});
const linkProps = (to: string) => {
  if (isExternalValid.value) {
    return {
      href: to,
      target: '_blank',
      rel: 'noopener',
    };
  }
  return {
    to: to,
  };
};
</script>
<style scoped lang="scss"></style>
