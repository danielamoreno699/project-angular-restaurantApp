import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfComponent } from './dialog-conf.component';

describe('DialogConfComponent', () => {
  let component: DialogConfComponent;
  let fixture: ComponentFixture<DialogConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
