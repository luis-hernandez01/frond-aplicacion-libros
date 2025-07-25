import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  filtro: string = '';

  @Output() filtroChange = new EventEmitter<string>();

  onInputChange(value: string) {
    this.filtro = value;
    this.filtroChange.emit(value);
  }

}