import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from '../../service/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  constructor(private ProductService: ProductService) { }

  phrase: string = '';

  productList$: Observable<Product[]> = this.ProductService.list$;
  featuredFilmsList: Product[] = this.ProductService.getFeaturedFilmList(true);

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }
  
  ngOnInit(): void { }

}
