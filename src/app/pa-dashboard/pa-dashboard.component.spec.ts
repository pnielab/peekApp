import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PADashboardComponent } from './user-profile.component';

describe('UserProfileComponent', () => {
  let component: PADashboardComponent;
  let fixture: ComponentFixture<PADashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PADashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PADashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
