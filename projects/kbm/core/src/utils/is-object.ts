export function kbmIsObject<T>(value: any): value is T {
  const type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
