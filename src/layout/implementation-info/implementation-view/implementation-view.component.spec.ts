import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementationViewComponent } from './implementation-view.component';

describe('ImplementationViewComponent', () => {
  let component: ImplementationViewComponent;
  let fixture: ComponentFixture<ImplementationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
