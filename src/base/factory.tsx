import { BaseInit } from '.';

import Element from './element';

export interface FactoryInit {}

export default abstract class Factory extends Element {
  abstract template: React.ReactElement;

  constructor(init?: BaseInit) {
    super(init);
  }
}
