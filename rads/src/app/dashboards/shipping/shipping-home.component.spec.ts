import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingHomeComponent } from './shipping-home.component';

describe('ShippingHomeComponent', () => {
  let component: ShippingHomeComponent;
  let fixture: ComponentFixture<ShippingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
