import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Product } from 'src/app/model/product';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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

  productList$ = this.productService.getAll();
  cols: ITableCol[] = this.config.tableCols;
  currentSelectProperty: string = 'name';
  productProperties: string[] = Object.keys(new Product());
  sorterColumn: string = 'id';
  phrase: string = '';
  
  // Variables for pagination
  productNum: number = 0;
  allHitsNumber$: Observable<Product[]> = this.productList$.pipe(tap(products => this.productNum = products.length));
  hitsPerPage: number = 10;
  currentPage: number = 1;
  lastPage: number = 0;
  startHits: number = 0;
  endHits: number = this.startHits + this.hitsPerPage;
  activePageTag: HTMLElement;

  @Output() onUpdate: EventEmitter<Product> = new EventEmitter();
  @Output() onDelete: EventEmitter<Product> = new EventEmitter();

  ngOnInit(): void {
    this.allHitsNumber$.subscribe(
      item => null,
      error => console.error(error)
    );
  }

  onUpdateClicked(product: Product): void {
    product.catId = Number(product.catId);
    product.price = Number(product.price);
    product.stock = Number(product.stock);
    
    this.productService.update(product).subscribe(
      data => alert(`Termék (ID: ${data.id}) sikeresen frissítve!`),
      error => console.error(error)
    );
    this.onUpdate.emit(product);
  }

  onDeleteClicked(product: Product): void {
    this.productService.remove(product).subscribe(
      data => alert(`Termék (ID: ${product.id}) sikeresen törölve!`),
      error => console.error(error)
    );
    
    this.onDelete.emit(product);
  }
  
  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  onClickHeader(inputCol: ITableCol): void {
    this.sorterColumn = this.cols.find(col => col.text === inputCol["text"]).key;
  }

  getPageArray(): Number[] {
    const pageArray = [];
    for (let i = 1; i <= Math.ceil(this.productNum / this.hitsPerPage); i++) {
      pageArray.push(i);
    }
    this.lastPage = pageArray[pageArray.length - 1];
    this.setActivePage(this.currentPage);
    return pageArray;
  }

  setActivePage(crntPage: Number): void {
    const allListItems = Array.from(document.querySelectorAll('.pagination .page-item'));
    allListItems.map(listItem => {
      const aTag = listItem.querySelector("a");
      if (aTag.textContent === String(crntPage)) {
        listItem.classList.add('active');
      } else {
        listItem.classList.remove('active');
      }
    });
  }

  onPager(event: any, page: number): void {
    this.currentPage = page;

    if (this.currentPage === 1) {
      this.startHits = 0;
      this.endHits = 10;
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
      this.endHits = 10;
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
      this.endHits = 10;
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

  }
}
