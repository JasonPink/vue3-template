import { defineStore } from 'pinia'; import piniaStore from '@/store' ; export
const useVideoStore = defineStore('video', { state:
() => ({}), getters: {}, actions: {} }); export function useVideoOutsideStore() { return useVideoStore(piniaStore) }