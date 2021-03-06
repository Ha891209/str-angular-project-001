import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Product } from 'src/app/model/product';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  constructor(
    private config: ConfigService,
    private productService: ProductService
  ) {
  }

  productList$ = this.productService.list$
  cols: ITableCol[] = this.config.tableCols;
  currentSelectProperty: string = 'name';
  productProperties: string[] = Object.keys(new Product());
  sortedOrder = 'ASC';
  sortedColumn = 'id';
  sortedCount = 0;
  phrase: string = '';

  // Variables for pagination
  productsProperties: { count: number } = { count: 0 };
  allHitsNumber$: Observable<Product[]> = this.productList$.pipe(tap(products => this.productsProperties.count = products.length));
  hitsPerPage: number = 10;
  currentPage: number = 1;
  lastPage: number = 0;
  startHits: number = 0;
  endHits: number = this.startHits + this.hitsPerPage;
  activePageTag: HTMLElement;

  @Output() onUpdate: EventEmitter<Product> = new EventEmitter();
  @Output() onDelete: EventEmitter<Product> = new EventEmitter();

  ngOnInit(): void {
    this.productService.getAll();

    this.allHitsNumber$.subscribe(
      item => null,
      error => console.error(error)
    );
  }

  onUpdateClicked(product: Product): void {
    product.catId = Number(product.catId);
    product.price = Number(product.price);
    product.stock = Number(product.stock);
    this.productService.update(product);
    this.onUpdate.emit(product);
  }

  onDeleteClicked(product: Product): void {
    this.productService.remove(product);
    this.onDelete.emit(product);
  }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;

    const firstPageButton = document.querySelector("ul.pagination span li") as HTMLElement;
    firstPageButton.click();

    if (this.productsProperties.count >= this.hitsPerPage * 2) {
      const previousAndNextButtons = Array.from(document.querySelectorAll("ul.pagination > li"));
      previousAndNextButtons.map(item => item.classList.remove('disabled'));
    }

    if (this.currentPage === 1) {
      const previousButton = document.querySelector("ul.pagination > li");
      previousButton.classList.add('disabled');
    }
    if (this.hitsPerPage * 2) {
      const nextButton = document.querySelectorAll("ul.pagination > li")[1];
      nextButton.classList.remove('disabled');
    }
  }

  onClickHeader(inputCol: ITableCol): void {
    if (this.sortedCount !== 0) {
      if (this.sortedOrder === 'ASC') this.sortedOrder = 'DESC'
      else this.sortedOrder = 'ASC'
    }
    this.sortedColumn = this.cols.find(col => col.text === inputCol["text"]).key;
    this.sortedCount++;
  }

  getPageArray(): Number[] {
    const pageArray = [];
    for (let i = 1; i <= Math.ceil(this.productsProperties.count / this.hitsPerPage); i++) {
      pageArray.push(i);
    }
    this.lastPage = pageArray[pageArray.length - 1];
    this.setActivePage(this.currentPage);
    return pageArray;
  }

  setActivePage(crntPage: number): void {
    const allListItems = Array.from(document.querySelectorAll('.pagination .page-item'));
    allListItems.map(listItem => {
      const aTag = listItem.querySelector("a");
      if (aTag.textContent === String(crntPage)) {
        listItem.classList.add('active');
      } else {
        listItem.classList.remove('active');
      }
    });

    if (this.productsProperties.count <= this.hitsPerPage) {
      const previousAndNextButtons = Array.from(document.querySelectorAll("ul.pagination > li"));
      previousAndNextButtons.map(item => item.classList.add('disabled'));
    }
  }

  onPager(event: any, page: number): void {
    this.currentPage = page;

    if (this.currentPage === 1) {
      this.startHits = 0;
      this.endHits = this.hitsPerPage;
    } else {
      this.startHits = (this.currentPage - 1) * this.hitsPerPage;
      this.endHits = this.startHits + this.hitsPerPage;
    }

    this.setActivePage(this.currentPage);

    if (this.currentPage === this.lastPage) {
      (event.currentTarget as HTMLElement).parentElement.parentElement.lastElementChild.classList.add("disabled");
    } else {
      (event.currentTarget as HTMLElement).parentElement.parentElement.lastElementChild.classList.remove("disabled");
    }

    if (this.currentPage === 1) {
      (event.currentTarget as HTMLElement).parentElement.parentElement.firstElementChild.classList.add("disabled")
    } else {
      (event.currentTarget as HTMLElement).parentElement.parentElement.firstElementChild.classList.remove("disabled")
    }
  }

  getNextPage(event: Event): void {
    this.currentPage++;

    if (this.currentPage === 1) {
      this.startHits = 0;
      this.endHits = this.hitsPerPage;
    } else {
      this.startHits = (this.currentPage - 1) * this.hitsPerPage;
      this.endHits = this.startHits + this.hitsPerPage;
    }

    this.setActivePage(this.currentPage);

    if (this.currentPage === this.lastPage) {
      (event.currentTarget as HTMLElement).parentElement.parentElement.lastElementChild.classList.add("disabled");
    } else {
      (event.currentTarget as HTMLElement).parentElement.parentElement.lastElementChild.classList.remove("disabled");
    }

    if (this.currentPage === 1) {
      (event.currentTarget as HTMLElement).parentElement.parentElement.firstElementChild.classList.add("disabled")
    } else {
      (event.currentTarget as HTMLElement).parentElement.parentElement.firstElementChild.classList.remove("disabled")
    }
  }

  getPreviousPage(event: Event): void {
    this.currentPage--;

    if (this.currentPage === 1) {
      this.startHits = 0;
      this.endHits = this.hitsPerPage;
    } else {
      this.startHits = (this.currentPage - 1) * this.hitsPerPage;
      this.endHits = this.startHits + this.hitsPerPage;
    }

    this.setActivePage(this.currentPage);

    if (this.currentPage === 1) {
      (event.currentTarget as HTMLElement).parentElement.parentElement.firstElementChild.classList.add("disabled")
    } else {
      (event.currentTarget as HTMLElement).parentElement.parentElement.firstElementChild.classList.remove("disabled")
    }

    if (this.currentPage === this.lastPage) {
      (event.currentTarget as HTMLElement).parentElement.parentElement.lastElementChild.classList.add("disabled");
    } else {
      (event.currentTarget as HTMLElement).parentElement.parentElement.lastElementChild.classList.remove("disabled");
    }

  }

  submitNewUser(event: Event): void {
    const inputFields = Array.from((event.target as HTMLElement).parentElement.querySelectorAll("input"));
    const catId = Number(inputFields[0].value);
    const name = inputFields[1].value;
    const description = inputFields[2].value;
    const image = inputFields[3].value;
    const price = Number(inputFields[4].value);
    const stock = Number(inputFields[5].value);
    const featured = inputFields[6].checked;
    const discounted = inputFields[7].checked;
    const active = inputFields[8].checked;
    const newProductObj = {catId, name, description, image, price, stock, featured, discounted, active};
    this.productService.create(newProductObj);
    inputFields.forEach(item => { 
      if (item.type === 'text' || item.type === 'number') item.value = '';
      else item.checked = false;
    });
    inputFields[inputFields.length - 1].checked = true;
  }
}
