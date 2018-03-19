import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersHomeComponent } from './headers-home.component';

describe('HeadersHomeComponent', () => {
  let component: HeadersHomeComponent;
  let fixture: ComponentFixture<HeadersHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadersHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
