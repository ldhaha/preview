import LdButton from './LdButton/LdButton.vue';

const components = {
	LdButton,
};

const install = (app, options = {}) => {
	// 注册组件
	for (const key in components) {
		app.component(key, components[key]);
	}
};

// 自动安装（当在浏览器中使用 script 标签引入时）
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export { LdButton };

export default {
	install,
	LdButton,
};
