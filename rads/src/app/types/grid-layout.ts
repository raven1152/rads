import { CanvasSize } from './canvas-size';
import { GridTile } from './grid-tile';
import { DashboardLayout } from './dashboard-layout';
import { GridRectangle } from './grid-rectangle';

export class GridLayout {
  public columns: number;
  public rows: number;
  public parentLayout: DashboardLayout;
  public tileSize: CanvasSize;
  public tiles: GridTile[];

  public constructor(parentLayout: DashboardLayout) {
    this.parentLayout = parentLayout;
  }

  public setGridDimensions(columns: number, rows: number) {
    this.columns = columns;
    this.rows = rows;
    this.calculateTileSize();
    this.createTiles();
  }

  private calculateTileSize() {
    this.tileSize = new CanvasSize();
    this.tileSize.width = this.parentLayout.dashboardCanvas.size.width / this.columns;
    this.tileSize.height = this.parentLayout.dashboardCanvas.size.height / this.rows;
  }

  private createTiles() {
    this.tiles = new Array<GridTile>();
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.columns; x++) {
        const tile = new GridTile(this);
        tile.setGridRectangle(x, y);
        this.tiles.push(tile);
      }
    }
  }
}
