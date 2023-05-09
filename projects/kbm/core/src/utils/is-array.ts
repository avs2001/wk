export function kbmIsArray<T>(value: unknown): value is T[] {
  return Array.isArray(value);
}
