import { Component } from '@angular/core';
import {RootStoreCommands} from './store/root-store.commands';
import {RootStoreProjections} from './store/root-store.projections';
import {Observable} from 'rxjs';
import {IUser} from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  combineLatestExample$ = this.proj.combineLatestExample$;
  users$: Observable<IUser[]> = this.proj.queryAll$();
  constructor(private cmd: RootStoreCommands, private proj: RootStoreProjections) {
    cmd.queryAllUser();
  }
}
