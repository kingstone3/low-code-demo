import { v4 as uuidv4 } from 'uuid';
import * as CSS from 'csstype';

import Base from '.';

export interface ElementInit {
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

  constructor(label: string, init?: ElementInit) {
    this.id = `${label}_${uuidv4()}`;

    this.children = init?.children || [];
    this.content = init?.content;
    this.props = init?.props;
    this.style = init?.style;
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
