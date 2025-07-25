import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { ButtonModalComponent } from './components/button-modal/button-modal.component';
import { ButtonActionsComponent } from './components/button-actions/button-actions.component';
import { CategoryFilterPipe } from './pipes/category-filter.pipe';
import { BooklistComponent } from './components/booklist/booklist.component';
import { BookCardComponent } from './components/book-card/book-card.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SearchComponent,
    FormComponent,
    ButtonModalComponent,
    ButtonActionsComponent,
    CategoryFilterPipe,
    BooklistComponent,
    BookCardComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    NavbarComponent,
    SearchComponent,
    FormComponent,
    ButtonModalComponent,
    ButtonActionsComponent,
    CategoryFilterPipe,
    BooklistComponent,
    BookCardComponent
  ]
})
export class SharedModule { }
