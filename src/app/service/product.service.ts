import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private serverUrl: string = 'http://localhost:3000/products';
  list$: Subject<Product[]> = new Subject();

  constructor(private http: HttpClient) { }

  getAll(): void {
    this.http.get<Product[]>(this.serverUrl).subscribe(
      products => this.list$.next(products)
    );
  }

  update(product: Product): void {
    this.http.patch<Product>(`${this.serverUrl}/${product.id}`, product).subscribe(
      () => this.getAll()
    );
  }

  remove(product: Product): void {
    this.http.delete<Product>(`${this.serverUrl}/${product.id}`).subscribe(
      () => this.getAll()
    );
  }

  getDiscountedList(randomization?: boolean): Product[] {
    const discountedList = [];
    this.getAll();
    this.list$.subscribe(
      products => products.forEach(product => product.discounted ? discountedList.push(product) : null),
      error => console.error(error),
      () => {
        if (randomization) this.randomization(discountedList);
      });
    return discountedList;
  }

  getFeaturedFilmList(randomization?: boolean): Product[] {
    const featuredFilmList = [];
    this.getAll();
    this.list$.subscribe(
      products => products.forEach(product => product.catId === 1 && product.featured ? featuredFilmList.push(product) : null),
      error => console.error(error),
      () => {
        if (randomization) this.randomization(featuredFilmList)
      });
    return featuredFilmList;
  }

  getFeaturedCartoonList(randomization?: boolean): Product[] {
    const featuredCartoonList = [];
    this.getAll();
    this.list$.subscribe(
      products => products.forEach(product => product.catId === 2 && product.featured ? featuredCartoonList.push(product) : null),
      error => console.error(error),
      () => {
        if (randomization) this.randomization(featuredCartoonList);
      });
    return featuredCartoonList;
  }

  randomization(array: any[]): any[] { return array.sort(() => Math.random() - 0.5) };
}
