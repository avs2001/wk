export function kbmMapToArray<K, V, R>(m: Map<K, V>, transformer: (key: K, item: V) => R) {
  return Array.from(m.entries()).map(x => transformer(x[0], x[1]));
}
