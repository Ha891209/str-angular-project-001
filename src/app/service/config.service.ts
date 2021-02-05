import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Film webshop';

  menuItems: IMenuItem[] = [
    {text: 'Kezdőlap', link: '/', icon: 'home'},
    {text: 'Filmek', link: '/filmek'},
    {text: 'Rajzfilmek', link: '/rajzfilmek'},
    {text: 'Admin', link: '/admin'},
  ];

  constructor() {}
}
