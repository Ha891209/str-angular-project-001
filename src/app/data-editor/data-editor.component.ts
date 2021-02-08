import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from 'src/app/model/product';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  constructor(
    private config: ConfigService,
    private productService: ProductService
  ) { }

  productList$ = this.productService.getAll();
  cols: ITableCol[] = this.config.tableCols;

  @Input() phrase: string = '';
  @Output() onUpdate: EventEmitter<Product> = new EventEmitter();
  @Output() onDelete: EventEmitter<Product> = new EventEmitter();


  ngOnInit(): void {
  }

  onUpdateClicked(product: Product): void {
    product.catId = Number(product.catId);
    product.price = Number(product.price);
    product.stock = Number(product.stock);
    
    this.productService.update(product).subscribe(
      data => alert(`Termék (id: ${data.id}) sikeresen frissítve!`),
      error => console.error(error)
    );
    this.onUpdate.emit(product);
  }

  onDeleteClicked(product: Product): void {
    this.productService.remove(product).subscribe(
      data => alert(`Termék (id: ${data.id}) sikeresen törölve!`),
      error => console.error(error)
    );
    
    this.onDelete.emit(product);
  }

  searchEvent(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

}


