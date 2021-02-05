import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  phrase: string = '';

  cartoonList: Product[] = this.ProductService.getCartoonList();

  featuredCartoonsList: Product[] = this.ProductService.getFeaturedCartoonList(true);

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
  }

}
