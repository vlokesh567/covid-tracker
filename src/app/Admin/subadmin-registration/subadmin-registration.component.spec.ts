import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubadminRegistrationComponent } from './subadmin-registration.component';

describe('SubadminRegistrationComponent', () => {
  let component: SubadminRegistrationComponent;
  let fixture: ComponentFixture<SubadminRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubadminRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubadminRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
