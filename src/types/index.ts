/**
 * @desc provide、inject类型注入
 */

import { Ref, InjectionKey } from 'vue';

export interface BgColor {
  color: Ref;
  setColor: Function;
}

export const BgColorKey: InjectionKey<BgColor> = Symbol('BgColor');

export interface IPerson {
  name: string;
  age: number;
}
