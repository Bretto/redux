import {Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {delay, map, tap} from 'rxjs/operators';
import {IUser} from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
  }

  getAllUser(): Observable<IUser[]> {
    return of([{name: 'toto'}, {name: 'titi'}, {name: 'tata'}])
      // .pipe(
      //   delay(1000),
      //   tap(_ => {
      //     throw(new Error('Oops'));
      //   })
      // );
  }
}


