import { Component, OnInit } from '@angular/core';
import { booksModel } from '../../../../core/model/books.model';
import { BookServiceService } from '../../services/book-service.service';
import { initFlowbite } from 'flowbite';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books-pages',
  standalone: false,
  templateUrl: './books-pages.component.html',
  styleUrl: './books-pages.component.css'
})
export class BooksPagesComponent implements OnInit {
  listbooks: Array<booksModel> = [];
  bookSelected?: booksModel;

  mostrarModal = false;
  isLoading = false;
  filtroTexto: string = '';

  constructor(
    private booksService: BookServiceService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    initFlowbite();
    this.loadBooks();
  }

  loadBooks() {
    this.booksService.getAllbooks$().subscribe((data) => {
      this.listbooks = data;
    });
  }

  receiveData(event: string): void {
    if (event.length >= 1) {
      this.booksService.searchTracks$(event)
        .subscribe({
          next: (data) => {
            this.listbooks = data;
          },
          error: (e) => console.error(e)
        });


    } else {
      this.loadBooks();
    }
  }


  view_detail(id?: number) {
    if (id === undefined) return;
    this.DataResult(id);
  }

  DataResult(id: number) {
    this.booksService.get(id).subscribe(book => {
      this.bookSelected = book;
      this.mostrarModal = true;
    });
  }

  excute() {
    this.isLoading = true;
    this.booksService.scrapingBooks()
      .subscribe(() => {
        this.toastr.success(`la ejecucion fue realizada con exito con exito`, 'Ejecucion scraping');
        this.loadBooks();
        this.isLoading = false;
      },
        (event: HttpErrorResponse) => {
          console.log(event.error.error);
          this.toastr.info(`Algo salio mal`, 'Ups..');
          this.isLoading = false;
        })
  }
}