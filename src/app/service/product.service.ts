import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private serverUrl: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.serverUrl);
  }

  update(product: Product): Observable<any> {
    return this.http.put(`${this.serverUrl}/${product.id}`, product);
  }

  remove(product: Product): Observable<any> {
    return this.http.delete(`${this.serverUrl}/${product.id}`);
  }

  getDiscountedList(randomization?: boolean): Product[] {
    const discountedList = [];
    this.getAll().subscribe(
      products => products.forEach(product => product.discounted ? discountedList.push(product) : null),
      error => console.error(error),
      () => {
        if (randomization) this.randomization(discountedList);
      });
    return discountedList;
  }

  getFeaturedFilmList(randomization?: boolean): Product[] {
    const featuredFilmList = [];
    this.getAll().subscribe(
      products => products.forEach(product => product.catId === 1 && product.featured ? featuredFilmList.push(product) : null),
      error => console.error(error),
      () => {
        if (randomization) this.randomization(featuredFilmList)
      });
    return featuredFilmList;
  }

  getFeaturedCartoonList(randomization?: boolean): Product[] {
    const featuredCartoonList = [];
    this.getAll().subscribe(
      products => products.forEach(product => product.catId === 2 && product.featured ? featuredCartoonList.push(product) : null),
      error => console.error(error),
      () => {
        if (randomization) this.randomization(featuredCartoonList);
      });
    return featuredCartoonList;
  }

  randomization(array: any[]): any[] { return array.sort(() => Math.random() - 0.5) };
}
