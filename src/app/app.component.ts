import { Component } from '@angular/core';
import { Product } from './model/product';
import { ProductServiceService } from './service/product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'str-angular-project001';
  productList: Product[] = this.ProductServiceService.list;
  constructor(private ProductServiceService: ProductServiceService) {}
}