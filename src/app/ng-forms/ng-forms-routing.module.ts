import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TemplateFormOneComponent} from './components/template-forms/template-form-one/template-form-one.component';
import {ReactiveFormOneComponent} from './components/reactive-forms/reactive-form-one/reactive-form-one.component';

const routes: Routes = [
  {
    path: 'template',
    children: [
      {path: 'one', component: TemplateFormOneComponent}
    ]
  },
  {
    path: 'reactive',
    children: [
      {path: 'one', component: ReactiveFormOneComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgFormsRoutingModule { }
