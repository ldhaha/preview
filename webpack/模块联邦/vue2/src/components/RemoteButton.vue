<template>
	<button class="remote-button" @click="onClick">
		这是来自 vue2 应用的按钮
		<span v-if="count">(点击了 {{ count }} 次)</span>
	</button>
</template>

<script>
export default {
	name: 'RemoteButton',
	data() {
		return {
			count: 0,
		};
	},
	methods: {
		onClick() {
			this.count++;
			this.$emit('clicked', this.count);
		},
	},
};
</script>

<style scoped>
.remote-button {
	background-color: #4caf50;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

.remote-button:hover {
	background-color: #45a049;
}
</style>
