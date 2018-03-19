import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramesHomeComponent } from './frames-home.component';

describe('FramesHomeComponent', () => {
  let component: FramesHomeComponent;
  let fixture: ComponentFixture<FramesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
