import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListAllCartoonsComponent } from './product-list-all-cartoons.component';

describe('ProductListAllCartoonsComponent', () => {
  let component: ProductListAllCartoonsComponent;
  let fixture: ComponentFixture<ProductListAllCartoonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListAllCartoonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListAllCartoonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
