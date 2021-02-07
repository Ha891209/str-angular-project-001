import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from 'src/app/model/product';
import { ConfigService, IMenuItem, ITableCol, } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  @Input() productList$: Observable<Product[]>;
  @Input() phrase: string = '';
  @Output() onSelect: EventEmitter<Product> = new EventEmitter();
  @Output() onUpdate: EventEmitter<Product> = new EventEmitter();
  @Output() onDelete: EventEmitter<Product> = new EventEmitter();
  cols: ITableCol[] = this.config.tableCols;
  product: Product;

  onSelectClicked(product: Product): void {
    this.onSelect.emit(this.product);
  }

  onUpdateClicked(product: Product): void {
    this.onUpdate.emit(this.product);
  }

  onDeleteClicked(product: Product): void {
    this.onDelete.emit(this.product);
  }

  constructor(
    private config: ConfigService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  searchEvent(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

}


