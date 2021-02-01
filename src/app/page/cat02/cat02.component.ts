import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  @Input() phraseString: string = '';

  phrase: string = '';

  cartoonList: Product[] = this.ProductServiceService.cartoonList;
  cartoonListVisible: Product[] = [...this.cartoonList];

  featuredCartoonsList: Product[] = this.ProductServiceService.featuredCartoonsList
    .sort(index => Math.random() - 0.5)
    .slice(0, 5);

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
    this.cartoonListVisible = this.cartoonList.filter(item => item.name.toLowerCase().indexOf(this.phrase.toLowerCase()) > -1);
  }

  constructor(private ProductServiceService: ProductServiceService) { }

  ngOnInit(): void {
  }

}
