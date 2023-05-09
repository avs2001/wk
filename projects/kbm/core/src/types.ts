export type KbmMapper<T, G> = (item: T, ...args: unknown[]) => G;
export type KbmMatcher<I> = KbmMapper<I, boolean>;
export type KbmBooleanHandler<T, G = boolean> = (value: T) => G;
export type KbmNullableObject<T> = {
  [K in keyof T]: KbmNullableObject<T[K]> | null;
};
export type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T][];
