import { Component, EventEmitter, Input, Output } from '@angular/core';
import { booksModel } from '../../../core/model/books.model';

@Component({
  selector: 'app-booklist',
  standalone: false,
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  @Input() books: Array<booksModel> = [];
  @Output() viewDetail = new EventEmitter<number>();

  onViewDetail(id: number): void {
    this.viewDetail.emit(id);
  }
}
