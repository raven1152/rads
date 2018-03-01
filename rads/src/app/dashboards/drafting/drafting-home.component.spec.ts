import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftingHomeComponent } from './drafting-home.component';

describe('DraftingHomeComponent', () => {
  let component: DraftingHomeComponent;
  let fixture: ComponentFixture<DraftingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
