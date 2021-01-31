import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListAllFilmsComponent } from './product-list-all-films.component';

describe('ProductListAllFilmsComponent', () => {
  let component: ProductListAllFilmsComponent;
  let fixture: ComponentFixture<ProductListAllFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListAllFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListAllFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
