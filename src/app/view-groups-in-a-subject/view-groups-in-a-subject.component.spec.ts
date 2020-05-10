import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGroupsInASubjectComponent } from './view-groups-in-a-subject.component';

describe('ViewGroupsInASubjectComponent', () => {
  let component: ViewGroupsInASubjectComponent;
  let fixture: ComponentFixture<ViewGroupsInASubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGroupsInASubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGroupsInASubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
