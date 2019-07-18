import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {environment} from '../../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducers, metaReducers} from './root.store';
import {RootStoreEffects} from './root-store.effects';
import {StoreModule} from '@ngrx/store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([RootStoreEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
  ],
})
export class RootStoreModule {
}
