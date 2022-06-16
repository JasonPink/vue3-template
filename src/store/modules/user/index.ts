import { defineStore } from "pinia";
import piniaStore from "@/store";
export const useUserStore = defineStore("user", {
  state: () => ({}),
  getters: {},
  actions: {},
});
export function useUserOutsideStore() {
  return useUserStore(piniaStore);
}
