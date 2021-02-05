import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  featuredFilmsList: Product[] = this.ProductService.featuredFilmsList
    .sort(index => Math.random() - 0.5)
    .slice(0, 5);

  discountedList: Product[] = this.ProductService.discountedList
    .sort(index => Math.random() - 0.5)
    .slice(0, 5);

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
  }

}


