import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

export interface ITableCol {
  key: string;
  text: string;
  editable: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Film webshop';

  menuItems: IMenuItem[] = [
    { text: 'Kezdőlap', link: '/', icon: 'home' },
    { text: 'Filmek', link: '/filmek' },
    { text: 'Rajzfilmek', link: '/rajzfilmek' },
    { text: 'Admin', link: '/admin' },
  ];

  tableCols: ITableCol[] = [
    { key: 'id', text: '#', editable: false },
    { key: 'catID', text: 'CatId', editable: false },
    { key: 'name', text: 'Name', editable: true },
    { key: 'description', text: 'Description', editable: true },
    { key: 'image', text: 'Image', editable: true },
    { key: 'price', text: 'Price', editable: true },
    { key: 'stock', text: 'Stock', editable: true },
    { key: 'featured', text: 'Featured', editable: true },
    { key: 'discounted', text: 'Discounted', editable: true },
    { key: 'active', text: 'Active', editable: true },
  ]

  constructor() { }
}
