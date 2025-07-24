import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('../../modules/books/books.module').then(m => m.BooksModule)
  },
  {
    path: '**',
    redirectTo: '/books'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
