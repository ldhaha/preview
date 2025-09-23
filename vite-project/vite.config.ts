import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	// 手动指定项目根目录位置
	root: path.resolve(__dirname, 'src'),
	plugins: [react()],
});
