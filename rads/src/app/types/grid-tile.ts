import { GridLayout } from './grid-layout';
import { GridRectangle } from './grid-rectangle';
import { CanvasRectangle } from './canvas-rectangle';

export class GridTile {
  public gridRectangle: GridRectangle;
  public canvasRectangle: CanvasRectangle;
  public parentLayout: GridLayout;

  public constructor(parentLayout: GridLayout) {
    this.gridRectangle = new GridRectangle();
    this.canvasRectangle = new CanvasRectangle();
    this.parentLayout = parentLayout;
  }

  public setGridRectangle(x: number, y: number) {
    this.gridRectangle.position.X = x;
    this.gridRectangle.position.Y = y;
    this.gridRectangle.size.width = 1;
    this.gridRectangle.size.height = 1;
    this.setCanvasRectangle();
  }

  private setCanvasRectangle() {
    this.canvasRectangle.position.X = this.gridRectangle.position.X * this.parentLayout.tileSize.width;
    this.canvasRectangle.position.Y = this.gridRectangle.position.Y * this.parentLayout.tileSize.height;
    this.canvasRectangle.size.width = this.parentLayout.tileSize.width;
    this.canvasRectangle.size.height = this.parentLayout.tileSize.height;
  }
}
