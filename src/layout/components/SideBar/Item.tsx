/*使用vue3.0 jsx语法书写*/
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    icon: {
      type: String,
      default: '',
    },
    meta: {
      type: Object,
      default: null,
    },
    title: {
      type: String,
      default: '',
    },
    elIcon: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: any) {
    /*此处写法像极了react*/
    const renderItem = () => {
      return <svg-icon icon-class={props.meta?.icon} className='nav-icon' />;
    };
    return () => {
      return renderItem();
    };
    // return () => (
    //   <div>{renderItem()}</div>
    // )
  },
});
