export default abstract class Element<Props> {
  abstract type: string;

  id: string;

  parent: Element<unknown> | undefined;
  children: Element<unknown>[] = [];

  abstract props: Props | undefined;
  abstract styles: unknown | undefined;
  abstract data: unknown | undefined;

  constructor() {
    this.id = this.getInitialId();
  }

  getInitialId() {
    return `${this.type}-${Date.now()}`;
  }

  push(child: Element<unknown>[]) {
    child.forEach((item) => {
      item.parent = this;
    });

    this.children = [...this.children, ...child];
  }

  delete() {
    if (this.parent) {
      this.parent.children = this.parent.children.filter(
        (item) => item.id !== this.id,
      );
    }
  }
}
