import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationUserComponent } from './authentication-user.component';

describe('AuthenticationUserComponent', () => {
  let component: AuthenticationUserComponent;
  let fixture: ComponentFixture<AuthenticationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
