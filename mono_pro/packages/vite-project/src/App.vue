<script setup>
import { computed, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { formatDate } from '@ld/utils';
import axios from 'axios';
import LdButtons from '../../../components/LdButton/LdButton.vue';

const date = formatDate(new Date());
console.log(axios.create().get('/123'));

const a = ref('123');
let b = 4;
const ld = computed(() => {
	return b;
});
b = 5;
b = 6;
</script>

<template>
	<div>
		{{ ld }}
		<ld-button></ld-button>
		{{ a }}
		{{ date }}
		<LdButtons />
		<a href="https://vite.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
