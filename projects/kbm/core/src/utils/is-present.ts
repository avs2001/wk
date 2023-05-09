import {kbmIsNil} from "./is-nil";

export function kbmIsPresent<T>(value?: T | null): value is T {
  return !kbmIsNil(value);
}
