import { Component, Input } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { booksModel } from '../../../core/model/books.model';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() visible = false;
  // @Input() data: any;
  @Input() data?: booksModel;


  close() {
    this.visible = false;
  }

}
