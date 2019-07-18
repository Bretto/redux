import {storeLogger} from 'ngrx-store-logger';
import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromUsers from './users.reducer';
import * as fromUi from './ui.reducer';
import {IUI, IUser} from '../app.model';


export interface AppState {
  ui: IUI;
  users: IUser[];
}

export const reducers: ActionReducerMap<AppState> = {
  ui: fromUi.getReducers,
  users: fromUsers.getReducers
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return storeLogger()(reducer);
}


export const metaReducers: MetaReducer<AppState>[] = !environment.production ?
  [
    logger,
  ] : [];







