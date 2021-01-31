import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-product-list-all-cartoons',
  templateUrl: './product-list-all-cartoons.component.html',
  styleUrls: ['./product-list-all-cartoons.component.scss']
})
export class ProductListAllCartoonsComponent implements OnInit {

  @Input() phraseString: string = '';

  cartoonList: Product[] = this.ProductServiceService.list
    .filter(item => { return item.catId === 2 });

  constructor(private ProductServiceService: ProductServiceService) { }

  ngOnInit(): void {
  }

}
