import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupToSubjectComponent } from './add-group-to-subject.component';

describe('AddGroupToSubjectComponent', () => {
  let component: AddGroupToSubjectComponent;
  let fixture: ComponentFixture<AddGroupToSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGroupToSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroupToSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
