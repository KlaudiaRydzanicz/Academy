import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssumptionByComponent } from './assumption-by.component';

describe('AssumptionByComponent', () => {
  let component: AssumptionByComponent;
  let fixture: ComponentFixture<AssumptionByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssumptionByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssumptionByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
