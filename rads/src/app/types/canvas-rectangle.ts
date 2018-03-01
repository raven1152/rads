import { CanvasPosition } from './canvas-position';
import { CanvasSize } from './canvas-size';

export class CanvasRectangle {
  public position: CanvasPosition;
  public size: CanvasSize;

  public constructor() {
    this.position = new CanvasPosition();
    this.size = new CanvasSize();
  }
}
