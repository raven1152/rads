import { GridPosition } from './grid-position';
import { GridSize } from './grid-size';

export class GridRectangle {
  public position: GridPosition;
  public size: GridSize;

  public constructor() {
    this.position = new GridPosition();
    this.size = new GridSize();
  }
}
