import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './root.store';

@Injectable({providedIn: 'root'})
export class RootStoreCommands {

  static QUERY_ALL_USER = `[RootStoreCommands] QUERY_ALL_USER`;

  constructor(private store: Store<AppState>) {
    console.log('RootStoreCommands');
  }

  queryAllUser = (payload?) => {
    return this.store.dispatch({type: RootStoreCommands.QUERY_ALL_USER, payload});
  }
}




