
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {

  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() btnClass: string = '';

  @Output() clicked: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onUserClicked(): void {
    this.clicked.emit(true);
  }


}