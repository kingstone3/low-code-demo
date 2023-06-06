import Element from './element';

export default abstract class Factory extends Element {
  abstract template: React.ReactElement;
}
