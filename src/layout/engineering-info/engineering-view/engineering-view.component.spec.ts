import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringViewComponent } from './engineering-view.component';

describe('EngineeringViewComponent', () => {
  let component: EngineeringViewComponent;
  let fixture: ComponentFixture<EngineeringViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
