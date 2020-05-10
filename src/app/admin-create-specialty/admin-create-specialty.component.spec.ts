import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateSpecialtyComponent } from './admin-create-specialty.component';

describe('AdminCreateSpecialtyComponent', () => {
  let component: AdminCreateSpecialtyComponent;
  let fixture: ComponentFixture<AdminCreateSpecialtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateSpecialtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateSpecialtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
