import {kbmIsObject} from "./is-object";
import {kbmIsPresent} from "./is-present";
import {Entries} from "./../types";

/**
 * Remove key if the value is null or undefined
 * @param object
 */
export function kbmOnlyPresentValues<T extends object>(object: T): Partial<T> {
  const entries = Object.entries(object) as Entries<T>;
  const presentValues: Partial<T> = {};
  for (const [key, value] of entries) {
    if (kbmIsPresent(value)) {
      presentValues[key] = kbmIsObject(value)
        ? (kbmOnlyPresentValues(value as typeof value & object) as typeof value)
        : value;
    }
  }
  return presentValues;
}
