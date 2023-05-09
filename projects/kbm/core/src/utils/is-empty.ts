import {kbmIsArray} from "./is-array";
import {kbmIsNil} from "./is-nil";

export function kbmIsEmpty(value: unknown | unknown[]): boolean {
  return (kbmIsArray(value) && value.length === 0) || kbmIsNil(value) || value === '';
}
