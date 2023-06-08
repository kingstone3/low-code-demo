import { BaseInit } from '.';

import Factory from './factory';

export interface EditorInit {}

export default abstract class Editor extends Factory {
  abstract isNative: boolean;
  abstract componentPath: string[];

  constructor(init?: BaseInit) {
    super(init);
  }
}
