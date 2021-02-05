import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  phrase: string = '';

  filmList: Product[] = this.ProductService.filmList;

  featuredFilmsList: Product[] = this.ProductService.featuredFilmsList
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  constructor(private ProductService: ProductService) { }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void { }

}
