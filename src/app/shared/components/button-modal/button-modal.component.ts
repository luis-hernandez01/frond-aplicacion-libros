import { Component, EventEmitter, Input, Output } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-button-modal',
  standalone: false,
  templateUrl: './button-modal.component.html',
  styleUrl: './button-modal.component.css'
})
export class ButtonModalComponent {
   @Output() run_scraping = new EventEmitter<void>();
   @Input() disabled: boolean = false;
   @Input() loading: boolean = false;

  run() {
  if (!this.disabled && !this.loading) {
    this.run_scraping.emit();
  }
}

}
