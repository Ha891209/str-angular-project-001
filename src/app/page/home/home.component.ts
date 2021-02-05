import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private productService: ProductService) { }

  featuredFilmList: Product[] = this.productService.getFeaturedFilmList(true);
  discountedList: Product[] = this.productService.getDiscountedList(true);

  ngOnInit(): void {    
  }

}


