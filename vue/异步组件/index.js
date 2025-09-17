function defineAsyncComponent(options) {
	if (typeof options === 'function') {
		options = {
			loader: options,
		};
	}

	const { loader } = options;

	let innerComp = null;

	return {
		name: 'AsyncComponentWrapper',
		setup() {
			const loaded = ref(false);
			const timeout = ref(false);
			const error = shallowRef('');
			const loading = ref(false);
			let loadingTimer = null;
			if (options.delay) {
				loadingTimer = setTimeout(() => {
					loading.value = true;
				}, options.delay);
			} else {
				loading.value = true;
			}
			loader()
				.then(c => {
					innerComp = c;
					loaded.value = true;
				})
				.catch(e => {
					error.value = e;
				});
			let timer = null;
			if (options.timeout) {
				timer = setTimeout(() => {
					timeout.value = true;
				}, options.timeout);
			}
			onUnmounted(() => clearTimeout(timeout));

			const placeholder = { type: 'div', children: '' };
			return () => {
				if (loaded.value) {
					return { type: innerComp };
				} else if (timeout.value) {
					return options.errorComponent
						? { type: options.errorComponent, props: { error: error.value } }
						: placeholder;
				} else if (loading.value && options.loadingComponent) {
					return { type: options.loadingComponent };
				} else {
					return placeholder;
				}
			};
		},
	};
}
