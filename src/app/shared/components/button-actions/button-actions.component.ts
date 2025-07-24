import { Component, EventEmitter, Input, Output } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-button-actions',
  standalone: false,
  templateUrl: './button-actions.component.html',
  styleUrl: './button-actions.component.css'
})
export class ButtonActionsComponent {
  @Input() label: string = 'View Detail';
  @Output() action = new EventEmitter<number>();
  @Input() id!: number;


  view(id: number) {
    this.action.emit(id);
  }


  ngOnInit(): void {
        initFlowbite();
    }
}
