import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SearchBarComponent } from './common/search-bar/search-bar.component';
import { ProductListFeaturedCartoonComponent } from './common/product-list-featured-cartoons/product-list-featured-cartoons.component';
import { ProductListFeaturedFilmComponent } from './common/product-list-featured-films/product-list-featured-films.component';
import { ProductListAllFilmsComponent } from './common/product-list-all-films/product-list-all-films.component';
import { ProductListAllCartoonsComponent } from './common/product-list-all-cartoons/product-list-all-cartoons.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ProductCardComponent,
    FilterPipe,
    SearchBarComponent,
    ProductListFeaturedCartoonComponent,
    ProductListFeaturedFilmComponent,
    ProductListAllFilmsComponent,
    ProductListAllCartoonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
