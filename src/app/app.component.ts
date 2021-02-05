import { Component } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'str-angular-project001';
  productList: Product[] = this.ProductService.list;
  constructor(private ProductService: ProductService) {}
}