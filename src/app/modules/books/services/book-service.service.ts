import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { booksModel } from '../../../core/model/books.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
private readonly URL = environment.api
  // items: booksModel[] = [];
  constructor(private http: HttpClient) {
  }

  // getAllbooks$(): Observable<any> {
  //   return this.http.get(`${this.URL}`)
  //     .pipe(
  //       map(({ data }: any) => {
  //         return data
  //       })
  //     )
  // }


  // searchTracks$(term: string): Observable<any> {
  //   return this.http.get(`${this.URL}?category=${term}`)
  //     .pipe(
  //       // tap((response) => console.log('Respuesta del backend:', response)),
  //       map((dataRaw: any) => dataRaw)
  //     )
  // }

  searchTracks$(term: string): Observable<any[]> {
  return this.http.get(`${this.URL}?category=${term}`).pipe(
    map((response: any) => {
      if (Array.isArray(response)) {
        return response;
      } else {
        console.warn('La respuesta no es un array:', response);
        return [];
      }
    }),
    catchError((error) => {
      console.error('Error en la petición HTTP:', error);
      return of([]);
    })
  );
}

  getAllbooks$(): Observable<booksModel[]> {
  return this.http.get<booksModel[]>(`${this.URL}`);
}

// searchTracks$(term: string): Observable<any> {
//     return this.http.get(`${this.URL}?category = ${term}`)
//       .pipe(
//         map((dataRaw: any) => dataRaw.data)
//       )
//   }


getBooks(category?: string) {
    let url = `${this.URL}`;
    if (category) url += `?category=${category}`;
    return this.http.get<booksModel[]>(url);
  }

  getBook(id: number) {
    return this.http.get<booksModel>(`${this.URL}/${id}`);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${this.URL}/${id}`);
  }

  scrapingBooks() {
    return this.http.post(`${this.URL}/scrape-books`, {});
  }

//   searchBooksByCategory$(category: string): Observable<booksModel[]> {
//   const params = new HttpParams().set('category', category);

//   return this.http.get<booksModel[]>(`${this.URL}/books`, { params });
// }

}
