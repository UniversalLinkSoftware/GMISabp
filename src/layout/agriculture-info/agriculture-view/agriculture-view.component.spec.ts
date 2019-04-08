import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricultureViewComponent } from './agriculture-view.component';

describe('AgricultureViewComponent', () => {
  let component: AgricultureViewComponent;
  let fixture: ComponentFixture<AgricultureViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgricultureViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgricultureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
