import { BaseInit } from '.';

import Factory from './factory';

export interface EditorInit {}

export default abstract class Editor extends Factory {
  abstract template: React.ReactElement;

  constructor(init?: BaseInit) {
    super(init);
  }
}
