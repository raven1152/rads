import { DashboardItem } from './dashboard-item';
import { GridLayout } from './grid-layout';
import { CanvasRectangle } from './canvas-rectangle';
import { GridArea } from './grid-area';
import { GridRectangle } from './grid-rectangle';

export class DashboardLayout {
  public viewportCanvas: CanvasRectangle;
  public dashboardCanvas: CanvasRectangle;
  public layout: GridLayout;
  public dashboardItems: DashboardItem[];
  private nextColumn: number;
  private nextRow: number;

  constructor() {
    this.viewportCanvas = new CanvasRectangle();
    this.dashboardCanvas = new CanvasRectangle();
    this.layout = new GridLayout(this);
    this.nextColumn = 0;
    this.nextRow = 0;
  }

  public static CreateDefaultLayout(): DashboardLayout {
    const rv = new DashboardLayout();
    rv.setViewportCanvasSize(800, 600);
    rv.setDashboardCanvasSize(600, 400)
    rv.layout.setGridDimensions(3, 2);
    return rv;
  }

  public setViewportCanvasSize(width: number, height: number) {
    this.viewportCanvas.position.X = 0;
    this.viewportCanvas.position.Y = 0;
    this.viewportCanvas.size.width = width;
    this.viewportCanvas.size.height = height;
  }

  public setDashboardCanvasSize(width: number, height: number) {
    this.dashboardCanvas.position.X = ((this.viewportCanvas.size.width - width) / 2);
    this.dashboardCanvas.position.Y = ((this.viewportCanvas.size.height - height) / 2);
    this.dashboardCanvas.size.width = width;
    this.dashboardCanvas.size.height = height;
  }

  public addDashboardItem(item: DashboardItem, atColumn: number = -1, atRow: number = -1, spanColumns: number = 1, spanRows: number = 1): number {
    const rectangle = new GridRectangle();
    if (atColumn === -1 || atRow === -1) {
      rectangle.position.X = this.nextColumn;
      rectangle.position.Y = this.nextRow;
      this.nextItemPosition();
    } else {
      rectangle.position.X = atColumn > -1 ? atColumn : this.nextColumn;
      rectangle.position.Y = atRow > -1 ? atRow : this.nextRow;
    }
    rectangle.size.width = spanColumns;
    rectangle.size.height = spanRows;
    const area = new GridArea(item, rectangle, 0);
    area.item = item;
    this.dashboardItems.push(item);
    return this.dashboardItems.length - 1;
  }

  public nextItemPosition() {
    this.nextColumn++;
    if (this.nextColumn < this.layout.columns) {
      return;
    } else {
      this.nextColumn = 0;
      this.nextRow++;
      if (this.nextRow < this.layout.rows) {
        return;
      } else {
        this.nextRow = 0;
      }
    }
  }
}
