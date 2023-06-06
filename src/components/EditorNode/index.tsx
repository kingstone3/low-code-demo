import * as Antd from 'antd';
import classnames from 'classnames';
import { get } from 'lodash-es';

import type Base from '../../base';

import classes from './index.module.css';

export default function EditorNode({
  element,
  currentConfigElement,
  setCurrentConfigElement,
  pushChildren,
  deleteChild,
}: {
  element: Base;
  currentConfigElement: Base | undefined;
  setCurrentConfigElement: (element: Base | undefined) => void;
  pushChildren: (parent: Base, element: Base) => void;
  deleteChild: (parent: Base, id: string) => void;
}) {
  const isActive = element.id === currentConfigElement?.id;

  let Tag;
  if (element.isNative) {
    Tag = element.componentPath[0];
  } else {
    Tag = get(Antd, element.componentPath);
  }

  return (
    <div
      className={classes.wrapper}
      onClick={(e) => {
        e.stopPropagation();

        if (isActive) {
          setCurrentConfigElement(undefined);
        } else {
          setCurrentConfigElement(element);
        }
      }}
    >
      <Tag
        {...{
          ...element.props,
          className: classnames(
            element?.props?.className as classnames.ArgumentArray,
            {
              [classes.active]: isActive,
            },
          ),
          key: element.id,
          style: {
            ...element.style,
          },
        }}
      >
        {element.content
          ? element.content
          : Array.isArray(element.children)
          ? element.children.map((item) => {
              return (
                <EditorNode
                  key={item.id}
                  element={item}
                  currentConfigElement={currentConfigElement}
                  setCurrentConfigElement={setCurrentConfigElement}
                  pushChildren={pushChildren}
                  deleteChild={deleteChild}
                />
              );
            })
          : null}
      </Tag>
    </div>
  );
}
