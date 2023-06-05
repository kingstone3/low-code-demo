import { RowProps } from 'antd';
import Element from '../../base/element';

export default class Container implements Element<RowProps> {
  type = 'container';
  id = '';
  props = undefined;
  styles = undefined;
  data = undefined;
}
