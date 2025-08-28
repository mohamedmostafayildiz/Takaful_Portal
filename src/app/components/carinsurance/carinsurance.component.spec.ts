import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarinsuranceComponent } from './carinsurance.component';

describe('CarinsuranceComponent', () => {
  let component: CarinsuranceComponent;
  let fixture: ComponentFixture<CarinsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarinsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
