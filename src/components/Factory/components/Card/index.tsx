import Base from '../../../../base';

import Draggable from '../../../Draggable';

import classes from './index.module.css';

export default function Card({ item }: { item: typeof Base }) {
  return (
    <>
      <Draggable elementType={item} className={classes.wrapper}>
        {item.previewNode}
      </Draggable>
    </>
  );
}
