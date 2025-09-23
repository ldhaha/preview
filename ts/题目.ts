type MyPartical<T, K extends keyof T> = {
	[P in K]?: T[P];
};
type myPartical = MyPartical<{ a: number; b: string }, 'a'>;

type DeepReadonly<T> = {
	readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

type myDeepReadonly = DeepReadonly<{ a: number; obj: { b: number } }>;

type MyPick<T, K extends keyof T> = {
	[P in K]: T[P];
};

type MyOmit<T, K extends keyof T> = {
	[P in Exclude<keyof T, K>]: T[P];
};

type MyReadonly<T, K extends keyof T> = {
	readonly [P in K]: T[P];
};

type MyExclude<K, T> = K extends T ? never : T;

type MyExtract<T, K> = T extends K ? T : never;

type MyNotNull<T> = T extends null | undefined ? never : T;

type MyParamType<T> = T extends (...args: infer v) => any ? v : never;
type myParamType = MyParamType<(a: number, b: string) => void>;

type MyReturnType<T> = T extends (...args: any) => infer v ? v : never;
type myReturnType = MyReturnType<(a: number, b: string) => string>;
