import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  featuredFilmsList: Product[] = this.ProductServiceService.featuredFilmsList
    .sort(index => Math.random() - 0.5)
    .slice(0, 5);

  discountedList: Product[] = this.ProductServiceService.discountedList
    .sort(index => Math.random() - 0.5)
    .slice(0, 5);

  constructor(private ProductServiceService: ProductServiceService) { }

  ngOnInit(): void {
  }

}


