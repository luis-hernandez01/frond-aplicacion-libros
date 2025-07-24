import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  constructor(private router: Router) { }




  ngOnInit(): void {
    initFlowbite();

    this.mainMenu.defaultOptions = [
      {
        name: 'Books',
        router: ['/', 'books']
      },
      {
        path: '**',
        redirectTo: '/books'
      }
    ]
  }

}
