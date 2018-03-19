import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TubesHomeComponent } from './tubes-home.component';

describe('TubesHomeComponent', () => {
  let component: TubesHomeComponent;
  let fixture: ComponentFixture<TubesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TubesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TubesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
