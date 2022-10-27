import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReacttiveFormComponent } from './user-reacttive-form.component';

describe('UserReacttiveFormComponent', () => {
  let component: UserReacttiveFormComponent;
  let fixture: ComponentFixture<UserReacttiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReacttiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReacttiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
