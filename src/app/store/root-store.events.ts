import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './root.store';
import {of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RootStoreEvents {

  static QUERY_ALL_BOOKS_COMPLETE = `[RootStoreEvents] QUERY_ALL_BOOKS_COMPLETE`;
  static IS_ONLINE_COMPLETE = `[RootStoreEvents] IS_ONLINE_COMPLETE`;

  constructor() {
    console.log('RootStoreEvents');
  }

  queryAllBooksComplete = (payload) => {
    return {type: RootStoreEvents.QUERY_ALL_BOOKS_COMPLETE, payload};
  };

  queryAllBooksError = (payload) => {
    return of({type: RootStoreEvents.QUERY_ALL_BOOKS_COMPLETE, payload, error: true});
  };

  isOnlineComplete = (payload) => {
    return {type: RootStoreEvents.IS_ONLINE_COMPLETE, payload};
  };
}




