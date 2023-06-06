import Preview from './preview';

import { ElementInit } from './element';
import { FactoryInit } from './factory';
import { EditorInit } from './editor';
import { ConfigInit } from './config';
import { ViewInit } from './preview';

export type BaseInit = {
  element: ElementInit;
  factory?: FactoryInit;
  editor?: EditorInit;
  config?: ConfigInit;
  view?: ViewInit;
};

export default abstract class Base extends Preview {
  constructor(
    element: ElementInit,
    factory?: FactoryInit,
    editor?: EditorInit,
    config?: ConfigInit,
    view?: ViewInit,
  ) {
    super({ element, factory, editor, config, view });
  }
}
