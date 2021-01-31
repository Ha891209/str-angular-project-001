import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListDiscountedComponent } from './product-list-discounted.component';

describe('ProductListDiscountedComponent', () => {
  let component: ProductListDiscountedComponent;
  let fixture: ComponentFixture<ProductListDiscountedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListDiscountedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListDiscountedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
