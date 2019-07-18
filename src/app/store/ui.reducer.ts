import {RootStoreEvents} from './root-store.events';
import {IUI} from '../app.model';

const isOnlineComplete = (state: IUI, event): {online: boolean}  => {
  const online = event.payload;
  return {...state, online};
};

const initState: IUI = {online: true};

export function getReducers(
  state = initState,
  event: any
): IUI {
  switch (event.type) {

    case RootStoreEvents.IS_ONLINE_COMPLETE: {
      return isOnlineComplete(state, event);
    }

    default: {
      return state;
    }
  }
}



