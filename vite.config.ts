
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/soomsoom-homepage/', // GitHub Pages base path (저장소 이름으로 변경)
  resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'figma:asset/e49538dd5a672738ef341b2f7d8f913aa08802c8.png': path.resolve(__dirname, './src/assets/e49538dd5a672738ef341b2f7d8f913aa08802c8.png'),
        'figma:asset/d440ec3b8af62bd6329ed4abc664f7c287362c6d.png': path.resolve(__dirname, './src/assets/d440ec3b8af62bd6329ed4abc664f7c287362c6d.png'),
        'figma:asset/d2f61896b718348005e1d4b3e3243b2a1d6e265d.png': path.resolve(__dirname, './src/assets/d2f61896b718348005e1d4b3e3243b2a1d6e265d.png'),
        'figma:asset/bb40a1d8a22571e37ba5111b367fb0ded87b241e.png': path.resolve(__dirname, './src/assets/bb40a1d8a22571e37ba5111b367fb0ded87b241e.png'),
        'figma:asset/a5155ec50b3a62089540a1190529543ecbabd2fa.png': path.resolve(__dirname, './src/assets/a5155ec50b3a62089540a1190529543ecbabd2fa.png'),
        'figma:asset/9707f3d77d6fb4e92156fcaa5316a2a3fc882cf9.png': path.resolve(__dirname, './src/assets/9707f3d77d6fb4e92156fcaa5316a2a3fc882cf9.png'),
        'figma:asset/86ef2af0ad721199a84553ab85e3d9af54246a4d.png': path.resolve(__dirname, './src/assets/86ef2af0ad721199a84553ab85e3d9af54246a4d.png'),
        'figma:asset/40b81f2597028801acc02c4333a8a90727be89c6.png': path.resolve(__dirname, './src/assets/40b81f2597028801acc02c4333a8a90727be89c6.png'),
        'figma:asset/3f7ad5e8269443c6fc929828c88aaace0bd4543a.png': path.resolve(__dirname, './src/assets/3f7ad5e8269443c6fc929828c88aaace0bd4543a.png'),
        'figma:asset/256a9d95b55ddc89c91dc3406da9cf22738dc6fb.png': path.resolve(__dirname, './src/assets/256a9d95b55ddc89c91dc3406da9cf22738dc6fb.png'),
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });