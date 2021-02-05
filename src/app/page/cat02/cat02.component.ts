import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  constructor(private ProductService: ProductService) { }

  phrase: string = '';

  productList$: Observable<Product[]> = this.ProductService.getAll();
  featuredCartoonsList: Product[] = this.ProductService.getFeaturedCartoonList(true);

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
  }

}
