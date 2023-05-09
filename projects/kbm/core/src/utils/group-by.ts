export function kbmGroupBy<K, V>(array: V[], grouper: (item: V) => K): Map<K, V[]> {
  const store = new Map<K, V[]>();
  for (const item of array) {
    const key = grouper(item);
    store.set(key, (store.get(key) ?? []).concat(item));
  }
  return store;
}
