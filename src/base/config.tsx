import { BaseInit } from '.';

import Editor from './editor';

export interface ConfigInit {}

export default abstract class Config extends Editor {
  abstract getConfigFields(): Record<string, any>;

  abstract renderConfigItems(): React.ReactNode;

  abstract hanldeConfigFinish(values: Record<string, any>): void;

  constructor(init?: BaseInit) {
    super(init);
  }
}
