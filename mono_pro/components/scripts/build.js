import { execSync } from 'child_process';
import { dirname } from 'path';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// 获取当前文件路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * 清理旧的构建产物
 */
function cleanDist() {
	const distDir = path.resolve(__dirname, '../dist');
	if (fs.existsSync(distDir)) {
		fs.rmSync(distDir, { recursive: true, force: true });
		console.log('清理旧的构建产物成功');
	}
}

/**
 * 创建构建目录结构
 */
function createBuildDirs() {
	const vue2Dir = path.resolve(__dirname, '../dist/vue2');
	const vue3Dir = path.resolve(__dirname, '../dist/vue3');

	// 确保目录存在
	[vue2Dir, vue3Dir].forEach(dir => {
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, { recursive: true });
		}
	});
}
/**
 * 构建Vue 2版本
 */
function buildVue2() {
	console.log('开始构建Vue 2版本...');
	try {
		// 安装Vue 2和对应的plugin-vue2开发依赖
		execSync(
			'pnpm i vue@^2.7.0 vue-template-compiler@^2.7.0 @vitejs/plugin-vue2@2.2.0 -D unplugin-vue2-script-setup@0.11.4 -D',
			{
				stdio: 'inherit',
			}
		);
		// 切换vue-demi到Vue 2模式
		execSync('npx vue-demi-switch 2', { stdio: 'inherit' });
		// 执行构建，使用特定的vite.config.vue2.js配置
		execSync('vite build --config vite.config.vue2.js', { stdio: 'inherit' });

		// 将构建产物移动到vue2目录
		const distDir = path.resolve(__dirname, '../dist');
		const vue2Dir = path.resolve(__dirname, '../dist/vue2');

		// 确保vue2目录存在
		if (!fs.existsSync(vue2Dir)) {
			fs.mkdirSync(vue2Dir, { recursive: true });
			console.log('创建vue2目录成功');
		}

		fs.readdirSync(distDir).forEach(file => {
			if (file !== 'vue2' && file !== 'vue3') {
				fs.renameSync(path.resolve(distDir, file), path.resolve(vue2Dir, file));
			}
		});

		console.log('Vue 2版本构建成功');
	} catch (error) {
		console.error('Vue 2版本构建失败:', error.message);
		process.exit(1);
	}
}

/**
 * 构建Vue 3版本
 */
function buildVue3() {
	console.log('开始构建Vue 3版本...');
	try {
		// 安装Vue 3开发依赖
		execSync('pnpm i vue@^3.2.25 @vitejs/plugin-vue@6.0.1 -D', { stdio: 'inherit' });
		// 切换vue-demi到Vue 3模式
		execSync('npx vue-demi-switch 3', { stdio: 'inherit' });
		// 执行构建，使用默认的vite.config.js配置
		execSync('vite build', { stdio: 'inherit' });

		// 将构建产物移动到vue3目录
		const distDir = path.resolve(__dirname, '../dist');
		const vue3Dir = path.resolve(__dirname, '../dist/vue3');

		// 确保vue3目录存在
		if (!fs.existsSync(vue3Dir)) {
			fs.mkdirSync(vue3Dir, { recursive: true });
			console.log('创建vue3目录成功');
		}

		fs.readdirSync(distDir).forEach(file => {
			if (file !== 'vue2' && file !== 'vue3') {
				fs.renameSync(path.resolve(distDir, file), path.resolve(vue3Dir, file));
			}
		});

		console.log('Vue 3版本构建成功');
	} catch (error) {
		console.error('Vue 3版本构建失败:', error.message);
		process.exit(1);
	}
}

/**
 * 主函数
 */
function main() {
	try {
		cleanDist();
		createBuildDirs();

		// 先构建Vue 2版本
		buildVue2();

		// 再构建Vue 3版本
		buildVue3();

		console.log('所有版本构建成功！');
	} catch (error) {
		console.error('构建过程中出错:', error.message);
		process.exit(1);
	}
}

main();
