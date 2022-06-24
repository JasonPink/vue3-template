import { createPinia } from "pinia";
import { useUserStore } from "./modules/user";

import { useTalentStore } from "./modules/talent";
import { useVideoStore } from "./modules/video";
import { useGoodsStore } from "./modules/goods";
// COMPONENT IMPORTS

const pinia = createPinia();

export {
  useUserStore,
  useTalentStore,
  useVideoStore,
  useGoodsStore,
  // COMPONENT EXPORTS
};
export default pinia;
