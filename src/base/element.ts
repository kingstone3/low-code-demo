import { v4 as uuidv4 } from 'uuid';
import * as CSS from 'csstype';

import Base, { BaseInit } from '.';

export interface ElementInit {
  type?: string;
  content?: string | number;
  children?: Base[];
  props?: Record<string, unknown>;
  style?: CSS.Properties<string | number>;
  className?: string;
}

export default abstract class Element {
  id: string;
  parent: Base | undefined;

  children: Base[] | undefined;
  content: string | number | undefined;

  props: Record<string, unknown> | undefined;
  style: CSS.Properties<string | number> | undefined;
  className: string | undefined;

  constructor(init?: BaseInit) {
    this.id = `${init?.element.type}_${uuidv4()}`;

    this.content = init?.element.content;
    this.children = init?.element.children || [];
    this.children?.forEach((child) => {
      child.parent = this as unknown as Base;
    });

    this.props = init?.element.props;
    this.style = init?.element.style;

    this.className = init?.element.className;
  }

  findChildIndexById(id: string): number | undefined {
    return this.children?.findIndex((child) => {
      return child.id === id;
    });
  }

  appendChildByIndex(element: Base, index = this.children?.length ?? 0): void {
    element.parent = this as unknown as Base;

    this.children = [
      ...(this.children?.slice(0, index) ?? []),
      element,
      ...(this.children?.slice(index) ?? []),
    ];
  }

  insertChildBeforeSelf(element: Base): void {
    element.parent = this.parent;

    this.appendChildByIndex(
      element,
      (this.parent?.findChildIndexById(this.id) ?? 1) - 1,
    );
  }

  insertChildAfterSelf(element: Base): void {
    element.parent = this.parent;

    this.appendChildByIndex(element, this.parent?.findChildIndexById(this.id));
  }
}
