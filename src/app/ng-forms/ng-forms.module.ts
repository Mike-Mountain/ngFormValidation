import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgFormsRoutingModule} from './ng-forms-routing.module';
import {TemplateFormOneComponent} from './components/template-forms/template-form-one/template-form-one.component';
import {ReactiveFormOneComponent} from './components/reactive-forms/reactive-form-one/reactive-form-one.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    TemplateFormOneComponent,
    ReactiveFormOneComponent,
  ],
  imports: [
    CommonModule,
    NgFormsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class NgFormsModule {
}
