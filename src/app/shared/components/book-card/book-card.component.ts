import { Component, EventEmitter, Input, Output } from '@angular/core';
import { booksModel } from '../../../core/model/books.model';

@Component({
  selector: 'app-book-card',
  standalone: false,
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  @Input() book!: booksModel;
@Output() action = new EventEmitter<number>();

  emitAction(): void {
    this.action.emit(this.book.id);
  }
}
