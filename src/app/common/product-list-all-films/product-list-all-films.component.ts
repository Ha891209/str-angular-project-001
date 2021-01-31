import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-product-list-all-films',
  templateUrl: './product-list-all-films.component.html',
  styleUrls: ['./product-list-all-films.component.scss']
})
export class ProductListAllFilmsComponent implements OnInit {

  @Input() phraseString: string = '';

  filmList: Product[] = this.ProductServiceService.list
    .filter(item => { return item.catId === 1 });

  constructor(private ProductServiceService: ProductServiceService) { }

  ngOnInit(): void {
  }

}
