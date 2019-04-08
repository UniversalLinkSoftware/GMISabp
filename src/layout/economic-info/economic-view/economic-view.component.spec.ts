import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicViewComponent } from './economic-view.component';

describe('EconomicViewComponent', () => {
  let component: EconomicViewComponent;
  let fixture: ComponentFixture<EconomicViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
