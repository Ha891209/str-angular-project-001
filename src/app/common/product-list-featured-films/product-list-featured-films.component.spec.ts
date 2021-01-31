import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListFeaturedFilmsComponent } from './product-list-featured-films.component';

describe('ProductListFeaturedFilmsComponent', () => {
  let component: ProductListFeaturedFilmsComponent;
  let fixture: ComponentFixture<ProductListFeaturedFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListFeaturedFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListFeaturedFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
