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

  phrase: string = '';

  productList: Product[] = this.ProductServiceService.list;

  featuredList: Product[] = [...this.ProductServiceService.list]
    .filter(item => { return item.featured === true })
    .slice(0, 5);

  filmList: Product[] = [...this.ProductServiceService.list]
    .filter(item => { return item.catId === 1 });

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  constructor(private ProductServiceService: ProductServiceService) { }

  ngOnInit(): void { }

}
