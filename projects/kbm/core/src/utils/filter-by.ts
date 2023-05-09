import { KbmMatcher } from "../types";
import {kbmIsArray} from "./is-array";



export function kbmFilterBy<T>(
  items: readonly T[],
  predicate: KbmMatcher<T>,
  ...args: unknown[]
): T[] {
  return kbmIsArray(items) ? items.filter(item => predicate(item, ...args)) : [];
}
