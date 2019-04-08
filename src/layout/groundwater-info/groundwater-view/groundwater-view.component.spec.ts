import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundwaterViewComponent } from './groundwater-view.component';

describe('GroundwaterViewComponent', () => {
  let component: GroundwaterViewComponent;
  let fixture: ComponentFixture<GroundwaterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroundwaterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundwaterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
