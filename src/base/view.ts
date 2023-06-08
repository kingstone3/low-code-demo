import { BaseInit } from '.';

import Config from './config';

export interface ViewInit {}

export default abstract class View extends Config {
  hasRequest = false;
  request: string | undefined;

  constructor(init?: BaseInit) {
    super(init);
  }
}
