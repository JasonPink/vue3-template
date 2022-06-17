<template>
  <div></div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "",
  components: {},
  props: {},
  setup() {
    const data = reactive({});
    const refData = toRefs(data);
    return { ...refData };
  },
});
</script>
<style scoped lang="less"></style>
