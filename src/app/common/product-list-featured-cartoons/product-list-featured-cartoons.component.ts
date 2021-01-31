import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-product-list-featured-cartoons',
  templateUrl: './product-list-featured-cartoons.component.html',
  styleUrls: ['./product-list-featured-cartoons.component.scss']
})
export class ProductListFeaturedCartoonComponent implements OnInit {

  @Input() phraseString: string = '';

  featuredList: Product[] = [...this.ProductServiceService.list]
    .filter(item => { return item.featured === true && item.catId === 2});
  
  fiveFeaturedCartoons: Product[] = this.featuredList.slice(0, 5);

  constructor(private ProductServiceService: ProductServiceService) { }

  ngOnInit(): void {
  }

}
