import { defineStore } from 'pinia';
import piniaStore from '@/store';
const defaultSettings = {
  showLogo: false,
};
export const useAppStore = defineStore('user', {
  state: () => ({
    showLogo: true,
    settings: defaultSettings,
  }),
  getters: {
    getAppSettings() {
      return this.settings;
    },
  },
  actions: {
    M_SETTINGS(data) {
      this.$patch((state) => {
        state.settings = { ...state.settings, ...data };
      });
    },
  },
});
export function useAppOutsideStore() {
  return useAppStore(piniaStore);
}
