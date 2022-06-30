import { createPinia } from 'pinia';
import { useUserStore } from './modules/user';
import { useAppStore } from './modules/app';

import { useTalentStore } from './modules/talent';
import { useVideoStore } from './modules/video';
import { useGoodsStore } from './modules/goods';
// COMPONENT IMPORTS

const pinia = createPinia();

export {
  useUserStore,
  useTalentStore,
  useVideoStore,
  useGoodsStore,
  useAppStore,
  // COMPONENT EXPORTS
};
export default pinia;
