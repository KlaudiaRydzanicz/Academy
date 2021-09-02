import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityModifyComponent } from './city-modify.component';

describe('CityModifyComponent', () => {
  let component: CityModifyComponent;
  let fixture: ComponentFixture<CityModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
