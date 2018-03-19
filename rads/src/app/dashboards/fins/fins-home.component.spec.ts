import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinsHomeComponent } from './fins-home.component';

describe('FinsHomeComponent', () => {
  let component: FinsHomeComponent;
  let fixture: ComponentFixture<FinsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
