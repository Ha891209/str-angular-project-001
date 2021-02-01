import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  featuredCartoonsList: Product[] = this.ProductServiceService.featuredCartoonsList
    .sort(index => Math.random() - 0.5)
    .slice(0, 5);

  cartoonList: Product[] = this.ProductServiceService.cartoonList;

  constructor(private ProductServiceService: ProductServiceService) { }

  ngOnInit(): void {
  }

}
