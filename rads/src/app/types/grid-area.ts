import { GridTile } from './grid-tile';
import { DashboardItem } from './dashboard-item';
import { GridRectangle } from './grid-rectangle';

export class GridArea {
  gridRectangle: GridRectangle;
  layer: number;
  item: DashboardItem;

  public constructor(item: DashboardItem, areaRectangle: GridRectangle, layer: number = 0) {
    this.item = item;
    this.gridRectangle = areaRectangle;
    this.layer = layer;
  }
}
