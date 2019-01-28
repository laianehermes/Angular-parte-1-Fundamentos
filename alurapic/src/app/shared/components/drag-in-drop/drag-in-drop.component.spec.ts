import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragInDropComponent } from './drag-in-drop.component';

describe('DragInDropComponent', () => {
  let component: DragInDropComponent;
  let fixture: ComponentFixture<DragInDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragInDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragInDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
