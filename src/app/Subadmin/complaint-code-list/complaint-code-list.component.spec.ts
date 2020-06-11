import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintCodeListComponent } from './complaint-code-list.component';

describe('ComplaintCodeListComponent', () => {
  let component: ComplaintCodeListComponent;
  let fixture: ComponentFixture<ComplaintCodeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintCodeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
