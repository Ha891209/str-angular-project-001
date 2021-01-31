import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  // Ez Product lista, ami szolgáltatja az adatokat a Service-ből
  productList: Product[] = this.ProductServiceService.list;


  constructor(private ProductServiceService: ProductServiceService) { }

  ngOnInit(): void {
  }

}


