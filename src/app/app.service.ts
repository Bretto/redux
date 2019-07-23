import {Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {delay, map, tap} from 'rxjs/operators';
import {IBook} from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
  }

  getAllBooks(): Observable<IBook[]> {
    return of([{name: 'Angular 2 Interview Questions and Answers'}, {name: 'Learning Angular'}, {name: 'Angular with NgRx'}])
      // .pipe(
      //   delay(1000),
      //   tap(_ => {
      //     throw(new Error('Oops'));
      //   })
      // );
  }
}


