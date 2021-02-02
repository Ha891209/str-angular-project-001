import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  phrase: string = '';

  filmList: Product[] = this.ProductServiceService.filmList;

  featuredFilmsList: Product[] = this.ProductServiceService.featuredFilmsList
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  constructor(private ProductServiceService: ProductServiceService) { }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void { }

}
