import {IUser} from '../app.model';
import {RootStoreEvents} from './root-store.events';

const queryAllComplete = (state: IUser[], event): IUser[]  => {
  const newUsers = event.error ? [] : event.payload;
  return [...state, ...newUsers];
};

const initState: IUser[] = [];

export function getReducers(
  state = initState,
  event: any
): IUser[] {
  switch (event.type) {

    case RootStoreEvents.QUERY_ALL_USER_COMPLETE: {
      return queryAllComplete(state, event);
    }

    default: {
      return state;
    }
  }
}



