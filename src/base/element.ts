import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as CSS from 'csstype';

import Editor from './editor';

export default abstract class Element {
  id: string;
  parentId: string | undefined;
  children: Element[] = [];

  abstract template: React.ReactElement;

  props: Record<string, unknown> | undefined;
  style: CSS.Properties<string | number> | undefined;

  editor?: Editor;
  dataLoader?: () => Promise<unknown>;

  constructor(
    label: string,
    init?: {
      children?: Element[];
      props?: Record<string, unknown>;
      style?: CSS.Properties<string | number>;
    },
  ) {
    this.id = `${label}_${uuidv4()}`;

    this.children = init?.children || [];
    this.props = init?.props;
    this.style = init?.style;
  }

  findById(id: string): Element | undefined {
    if (this.id === id) {
      return this;
    }

    return this.children.find((child) => {
      return child.findById(id);
    });
  }
}
