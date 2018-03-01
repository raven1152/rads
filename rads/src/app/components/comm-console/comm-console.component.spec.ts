import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommConsoleComponent } from './comm-console.component';

describe('CommConsoleComponent', () => {
  let component: CommConsoleComponent;
  let fixture: ComponentFixture<CommConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
