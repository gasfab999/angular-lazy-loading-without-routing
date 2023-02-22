import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHelperComponent } from './service-helper.component';

describe('ServiceHelperComponent', () => {
  let component: ServiceHelperComponent;
  let fixture: ComponentFixture<ServiceHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
