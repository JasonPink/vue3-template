import { defineStore } from 'pinia';
import piniaStore from '@/store';
const defaultSettings = {};
export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'yemeng',
    age: 18,
    settings: defaultSettings,
  }),
  getters: {
    getName() {
      return this.name;
    },
  },
  actions: {
    INIT_STATUS() {
      this.$patch((state) => {
        state.name = 'yemeng';
        state.age = 18;
      });
    },
  },
});
export function useUserOutsideStore() {
  return useUserStore(piniaStore);
}
