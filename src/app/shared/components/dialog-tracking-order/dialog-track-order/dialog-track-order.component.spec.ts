import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTrackOrderComponent } from './dialog-track-order.component';

describe('DialogTrackOrderComponent', () => {
  let component: DialogTrackOrderComponent;
  let fixture: ComponentFixture<DialogTrackOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTrackOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTrackOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
