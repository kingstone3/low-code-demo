import { BaseInit } from '.';

import Element from './element';

export interface FactoryInit {}

export default abstract class Factory extends Element {
  constructor(init?: BaseInit) {
    super(init);
  }
}
