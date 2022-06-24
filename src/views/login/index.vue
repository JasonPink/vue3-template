<template>
  <div>登录</div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  name: '',
  components: {},
  props: {},
  setup() {
    const data = reactive({});
    const refData = toRefs(data);
    return { ...refData };
    console.log('123');
  },
});
</script>
<style scoped lang="less"></style>
