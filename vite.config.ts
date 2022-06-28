import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import ElementPlus from 'unplugin-element-plus/vite';
// import AutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-vue-components/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import * as path from 'path';

export default defineConfig({
  server: {
    hmr: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/variables.scss";',
      },
    },
  },
  plugins: [
    vue(),
    // ElementPlus({
    //   // importStyle: 'SASS',
    //   useSource: true,
    // }),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  ],
});
