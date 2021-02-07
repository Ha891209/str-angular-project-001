import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { FilterPipe } from './pipe/filter.pipe';
import { AdminComponent } from './admin/admin.component';
import { DataEditorComponent } from './data-editor/data-editor.component';
import { FilmsPipe } from './pipe/films.pipe';
import { CartoonsPipe } from './pipe/cartoons.pipe';
import { IconComponent } from './common/icon/icon.component';
import { ActionButtonComponent } from './common/action-button/action-button.component';
import { ActionButtonGroupComponent } from './common/action-button-group/action-button-group.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ProductCardComponent,
    FilterPipe,
    AdminComponent,
    DataEditorComponent,
    FilmsPipe,
    CartoonsPipe,
    IconComponent,
    ActionButtonComponent,
    ActionButtonGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
