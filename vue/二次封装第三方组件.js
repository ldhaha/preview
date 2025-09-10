/* 
<script setup lang="ts">
import { h } from 'vue';
import type { ComponentInstance } from 'vue';
import { Input } from '@arco-design/web-vue';

defineProps<{ name: string }>();

const vm = getCurrentInstance()!;

const changeRef = (exposed: any) => {
	vm.exposed = exposed;
};

defineExpose({} as ComponentInstance<typeof Input>);
</script>

<template>
	// 如果两个元素 $attr就不会绑定在跟元素上，因为没有
	<div>
		<div>子组件 {{ $attrs }}</div>
		<div v-bind="$attrs">hha</div>
		<component :is="h(Input, { ...$attrs, ref: changeRef }, $slots)" />
	</div>
</template>


*/
