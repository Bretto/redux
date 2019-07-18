import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, filter, map, switchMap} from 'rxjs/operators';
import {RootStoreCommands} from './root-store.commands';
import {AppService} from '../app.service';
import {RootStoreEvents} from './root-store.events';
import {fromEvent, merge} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RootStoreEffects {

  constructor(private actions$: Actions,
              private events: RootStoreEvents,
              private service: AppService
  ) {
    console.log('RootStoreEffects');
  }

  @Effect()
  queryAllUser$ = this.actions$
    .pipe(
      ofType(RootStoreCommands.QUERY_ALL_USER),
      switchMap(_ => this.service.getAllUser()
        .pipe(
          map((res) => this.events.queryAllUserComplete(res)),
          catchError(err => this.events.queryAllUserError(err))
        )));

  @Effect()
  online$ = merge(
    fromEvent(window, 'online'),
    fromEvent(window, 'offline'))
    .pipe(
      map((ev: any) => ev.type === 'online'),
      map((res) => this.events.isOnlineComplete(res))
    );

  @Effect({dispatch: false})
  error$ = this.actions$
    .pipe(
      filter((action: any) => !!action.error),
      map((action: any) => alert(action.payload))
    );
}
