import { defineStore } from 'pinia'; import piniaStore from '@/store' ; export
const useTalentStore = defineStore('talent', { state:
() => ({}), getters: {}, actions: {} }); export function useTalentOutsideStore() { return useTalentStore(piniaStore) }