export function kbmIsString(value: unknown): value is string {
  return typeof value === `string`;
}
