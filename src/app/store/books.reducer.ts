import {IBook} from '../app.model';
import {RootStoreEvents} from './root-store.events';

const queryAllSnapShot = (state: IBook[], event): IBook[]  => {
  const newUsers = event.error ? [] : event.payload;
  return [...state, ...newUsers];
};

const initState: IBook[] = [];

export function getReducers(
  state = initState,
  event: any
): IBook[] {
  switch (event.type) {

    case RootStoreEvents.QUERY_ALL_BOOKS_COMPLETE: {
      return queryAllSnapShot(state, event);
    }

    default: {
      return state;
    }
  }
}



