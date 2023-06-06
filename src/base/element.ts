import { v4 as uuidv4 } from 'uuid';
import * as CSS from 'csstype';

import Base, { BaseInit } from '.';

export interface ElementInit {
  label?: string;
  children?: Base[];
  content?: string | number;
  props?: Record<string, unknown>;
  style?: CSS.Properties<string | number>;
}

export default abstract class Element {
  id: string;

  parent: Base | undefined;
  children: Base[] | undefined;
  content: string | number | undefined;

  props: Record<string, unknown> | undefined;
  style: CSS.Properties<string | number> | undefined;

  constructor(init?: BaseInit) {
    this.id = `${init?.element.label}_${uuidv4()}`;

    this.children = init?.element.children || [];
    this.content = init?.element.content;
    this.props = init?.element.props;
    this.style = init?.element.style;
  }

  findById(id: string): Element | undefined {
    let result: Element | undefined;
    let isGet = false;

    function deepSearch(tree: Element[], id: string) {
      for (let i = 0; i < tree.length; i++) {
        if ((tree[i]?.children?.length ?? 0) > 0) {
          deepSearch(tree[i].children!, id);
        }

        if (id === tree[i].id || isGet) {
          if (!isGet) {
            result = tree[i];
          }

          isGet = true;

          break;
        }
      }
    }

    deepSearch([this], id);

    return result;
  }
}
