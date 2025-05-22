import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const plugins = [
    react(),
  ];

  return {
    plugins,
    publicDir: './.storybook/static',
  };
});
