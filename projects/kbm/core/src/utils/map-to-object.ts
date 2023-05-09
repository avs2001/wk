export function kbmMapToObject<T>(m: Map<string, T>): { [key: string]: T | undefined } {
  return Array.from(m).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {} as { [key: string]: T | undefined });
}
