import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-product-list-featured-films',
  templateUrl: './product-list-featured-films.component.html',
  styleUrls: ['./product-list-featured-films.component.scss']
})
export class ProductListFeaturedFilmComponent implements OnInit {

  @Input() phraseString: string = '';

  featuredList: Product[] = [...this.ProductServiceService.list]
    .filter(item => { return item.featured === true && item.catId === 1});
  
  fiveFeaturedFilms: Product[] = this.featuredList.slice(0, 5);

  constructor(private ProductServiceService: ProductServiceService) { }

  ngOnInit(): void {
  }

}
