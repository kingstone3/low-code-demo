import Factory from './factory';

export default abstract class Editor extends Factory {
  abstract template: React.ReactElement;
}
