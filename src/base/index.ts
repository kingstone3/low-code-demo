import Config from './config';

import { ElementInit } from './element';
import { FactoryInit } from './factory';
import { EditorInit } from './editor';
import { ConfigInit } from './config';

export type BaseInit = {
  element: ElementInit;
  factory?: FactoryInit;
  editor?: EditorInit;
  config?: ConfigInit;
};

export default abstract class Base extends Config {
  constructor(
    element: ElementInit,
    factory?: FactoryInit,
    editor?: EditorInit,
    config?: ConfigInit,
  ) {
    super({ element, factory, editor, config });
  }
}
