import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksPagesComponent } from './pages/books-pages/books-pages.component';

const routes: Routes = [
  {
    path: '',
    component: BooksPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }

