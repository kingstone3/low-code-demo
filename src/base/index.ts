import View from './view';

import { ElementInit } from './element';
import { FactoryInit } from './factory';
import { EditorInit } from './editor';
import { ConfigInit } from './config';
import { ViewInit } from './view';

export type BaseInit = {
  element: ElementInit;
  factory?: FactoryInit;
  editor?: EditorInit;
  config?: ConfigInit;
  view?: ViewInit;
};

export default abstract class Base extends View {
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
