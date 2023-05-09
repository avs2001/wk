export function kbmArrayRemove<T>(array: T[], index: number): T[] {
  if (index < 0 || index >= array.length) {
    throw new Error(`Invalid index ${index} for array of length ${array.length}`);
  }

  return [...array.slice(0, index), ...array.slice(index + 1)];
}
