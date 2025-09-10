<template>
	<div>
		{{ count }}
		<!-- 这里会自动解包，显示 count.value -->
		<button @click="increment">这是monorepo组件库的button</button>
	</div>
</template>

<script>
import { ref, defineComponent } from 'vue-demi';
export default defineComponent({
	name: 'LdButton',
	setup() {
		const count = ref(0);

		const increment = () => {
			count.value++;
		};

		return {
			count,
			increment,
		};
	},
});
</script>
