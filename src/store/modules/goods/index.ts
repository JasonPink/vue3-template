import { defineStore } from 'pinia'; import piniaStore from '@/store' ; export
const useGoodsStore = defineStore('goods', { state:
() => ({}), getters: {}, actions: {} }); export function useGoodsOutsideStore() { return useGoodsStore(piniaStore) }