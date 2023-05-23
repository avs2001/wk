import {InjectionToken} from "@angular/core";
import {OUserType} from "../model";



export const USER_TYPES = new InjectionToken('USER_TYPES', {
  providedIn: 'root',
  factory: () => {
    return OUserType
  }
});

