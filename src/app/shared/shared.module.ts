import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './components/navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {InputErrorComponent} from './components/form-errors/input-error/input-error.component';

@NgModule({
  declarations: [
    NavigationComponent,
    InputErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
    InputErrorComponent
  ]
})
export class SharedModule {
}
