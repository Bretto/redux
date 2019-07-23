import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IBook} from '../app.model';

@Injectable({providedIn: 'root'})
export class RootStoreProjections {
  constructor(private store: Store<any>) {
    console.log('RootStoreProjections');
  }

  combineLatestExample$ = combineLatest([
    this.store.select('books'),
    this.store.select('ui', 'online')
  ]).pipe(
    map(([books, online]: [IBook[], boolean]) => {
      return {books, online};
    })
  );

  queryAll$(): Observable<IBook[]> {
    return this.store.select('books');
  }




}





