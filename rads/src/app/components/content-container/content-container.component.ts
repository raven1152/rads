import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss']
})
export class ContentContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('contentArea') public contentArea: ElementRef;
  @Input() public offsetLeft = 0;
  @Input() public offsetRight = 0;
  @Input() public offsetTop = 0;
  @Input() public offsetBottom = 0;

  public lastWidth: number;
  public lastHeight: number;
  public clientLeft: number;
  public clientTop: number;
  public clientWidth: number;
  public clientHeight: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.setClientDimensions(window.innerWidth, window.innerHeight);
  }

  setClientDimensions(width: number, height: number) {
    if (this.lastWidth === width && this.lastHeight === height) { return; }

    this.getParentDimensions();
    this.contentArea.nativeElement.style.position = 'absolute';
    this.contentArea.nativeElement.style.left = this.pixels(this.offsetLeft);
    this.contentArea.nativeElement.style.top = this.pixels(this.offsetTop);
    this.contentArea.nativeElement.style.width = this.pixels(this.clientWidth - this.offsetLeft - this.offsetRight);
    this.contentArea.nativeElement.style.height = this.pixels(this.clientHeight - this.offsetTop - this.offsetBottom);

    this.lastWidth = width;
    this.lastHeight = height;
  }

  public pixels(pix: number): string {
    return `${pix}px`;
  }

  getParentDimensions() {
    this.clientLeft = this.contentArea.nativeElement.parentElement.parentElement.offsetLeft;
    this.clientTop = this.contentArea.nativeElement.parentElement.parentElement.offsetTop;
    this.clientWidth = this.contentArea.nativeElement.parentElement.parentElement.clientWidth;
    this.clientHeight = this.contentArea.nativeElement.parentElement.parentElement.clientHeight;
  }

  @HostListener('window:resize', ['$event']) windowResized() {
    this.setClientDimensions(window.innerWidth, window.innerHeight);
  }

  @HostListener('document:fullscreenchange', ['$event']) fullscreenChanged() {
    this.setClientDimensions(window.innerWidth, window.innerHeight);
  }
}
