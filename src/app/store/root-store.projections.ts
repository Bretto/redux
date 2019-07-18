import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {combineLatest, Observable} from 'rxjs';
import {filter, first, map, tap} from 'rxjs/operators';
import * as _ from 'lodash';
import {IUser} from '../app.model';

@Injectable({providedIn: 'root'})
export class RootStoreProjections {
  constructor(private store: Store<any>) {
    console.log('RootStoreProjections');
  }

  combineLatestExample$ = combineLatest([
    this.store.select('users'),
    this.store.select('ui', 'online')
  ]).pipe(
    map(([users, online]: [IUser[], boolean]) => {
      return {users, online};
    })
  );

  queryAll$(): Observable<IUser[]> {
    return this.store.select('users');
  }




}





