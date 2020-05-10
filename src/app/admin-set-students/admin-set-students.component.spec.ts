import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSetStudentsComponent } from './admin-set-students.component';

describe('AdminSetStudentsComponent', () => {
  let component: AdminSetStudentsComponent;
  let fixture: ComponentFixture<AdminSetStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSetStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSetStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
