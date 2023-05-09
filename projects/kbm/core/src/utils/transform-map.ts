export function kbmTransformMap<K, V, R>(source: Map<K, V>, transformer: (value: V, key: K) => R) {
  return new Map(Array.from(source, v => [v[0], transformer(v[1], v[0])]));
}
