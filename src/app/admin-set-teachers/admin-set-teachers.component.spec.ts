import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSetTeachersComponent } from './admin-set-teachers.component';

describe('AdminSetTeachersComponent', () => {
  let component: AdminSetTeachersComponent;
  let fixture: ComponentFixture<AdminSetTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSetTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSetTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
