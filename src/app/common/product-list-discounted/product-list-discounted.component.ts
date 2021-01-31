import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-product-list-discounted',
  templateUrl: './product-list-discounted.component.html',
  styleUrls: ['./product-list-discounted.component.scss']
})
export class ProductListDiscountedComponent implements OnInit {

  @Input() phraseString: string = '';

  discountedList: Product[] = [...this.ProductServiceService.list]
    .filter(item => { return item.discounted === true});
  
  fiveDiscountedFilms: Product[] = this.discountedList.slice(0, 5);

  constructor(private ProductServiceService: ProductServiceService) { }

  ngOnInit(): void {
  }

}
