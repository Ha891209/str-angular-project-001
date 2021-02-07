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
    { key: 'catID', text: 'Kategória ID', editable: false },
    { key: 'name', text: 'Név', editable: true },
    { key: 'description', text: 'Leírás', editable: true },
    { key: 'image', text: 'Kép', editable: true },
    { key: 'price', text: 'Ár', editable: true },
    { key: 'stock', text: 'Készlet', editable: true },
    { key: 'featured', text: 'Kiemelt', editable: true },
    { key: 'discounted', text: 'Akciós', editable: true },
    { key: 'active', text: 'Aktív', editable: true },
    { key: 'operations', text: 'Műveletek', editable: false },
  ]

  constructor() { }
}
