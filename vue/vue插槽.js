import type { FunctionalComponent } from 'vue';

const slotComponent: FunctionalComponent = (props, { slots }) => {
	return h('div', null, [slots.default?.(), slots.prefix?.(), slots.suffix?.({ title: '123' })]);
};
