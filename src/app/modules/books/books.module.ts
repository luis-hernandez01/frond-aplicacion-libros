import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { BooksPagesComponent } from './pages/books-pages/books-pages.component';
import { SearchComponent } from '../../shared/components/search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BooksPagesComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class BooksModule { }
