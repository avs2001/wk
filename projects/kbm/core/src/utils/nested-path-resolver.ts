/**
 * Resolves a nested path in an object
 * @param obj
 * @param path
 */
export function resolveNestedPath(obj: any, path: string) {
  const keys = path?.split('.') ?? [];
  let current = obj;

  keys.forEach(key => {
    if (current && typeof current === 'object') {
      current = current[key];
    } else {
      current = undefined;
    }
  });
  return current;
}
