import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesListElementComponent } from './sales-list-element.component';

describe('SalesListElementComponent', () => {
  let component: SalesListElementComponent;
  let fixture: ComponentFixture<SalesListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesListElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
