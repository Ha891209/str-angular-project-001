import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListFeaturedCartoonsComponent } from './product-list-featured-cartoons.component';

describe('ProductListFeaturedCartoonsComponent', () => {
  let component: ProductListFeaturedCartoonsComponent;
  let fixture: ComponentFixture<ProductListFeaturedCartoonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListFeaturedCartoonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListFeaturedCartoonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
