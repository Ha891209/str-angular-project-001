import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  @Input() phraseString: string = '';

  featuredFilmsList: Product[] = this.ProductServiceService.featuredFilmsList
    .sort(index => Math.random() - 0.5)
    .slice(0, 5);

  filmList: Product[] = this.ProductServiceService.filmList;

  constructor(private ProductServiceService: ProductServiceService) { }

  ngOnInit(): void { }

}
