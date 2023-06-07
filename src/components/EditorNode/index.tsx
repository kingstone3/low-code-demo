import * as Antd from 'antd';
import classnames from 'classnames';
import { get } from 'lodash-es';

import type Base from '../../base';

import classes from './index.module.css';

export default function EditorNode({
  element,
  currentConfigElement,
  setCurrentConfigElement,
}: {
  element: Base;
  currentConfigElement: Base | undefined;
  setCurrentConfigElement: (element: Base | undefined) => void;
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
      className={classnames(classes.wrapper, {
        [classes.active]: isActive,
      })}
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
        {...element.props}
        key={element.id}
        className={element?.props?.className}
        style={element.style}
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
                />
              );
            })
          : null}
      </Tag>
    </div>
  );
}
