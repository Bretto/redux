import {storeLogger} from 'ngrx-store-logger';
import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromBooks from './books.reducer';
import * as fromUi from './ui.reducer';
import {IUI, IBook} from '../app.model';


export interface AppState {
  ui: IUI;
  books: IBook[];
}

export const reducers: ActionReducerMap<AppState> = {
  ui: fromUi.getReducers,
  books: fromBooks.getReducers
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return storeLogger()(reducer);
}


export const metaReducers: MetaReducer<AppState>[] = !environment.production ?
  [
    logger,
  ] : [];







