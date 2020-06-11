import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintCodeComponent } from './complaint-code.component';

describe('ComplaintCodeComponent', () => {
  let component: ComplaintCodeComponent;
  let fixture: ComponentFixture<ComplaintCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
