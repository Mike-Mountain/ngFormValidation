import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {genderAnswers} from '../../../constants/gender-answers.const';
import {hobbiesAnswers} from '../../../constants/hobbies-answers.const';
import {starSignAnswers} from '../../../constants/star-sign-answers.const';
import {BasicReactiveForm} from '../../../models/basic-reactive-form.model';
import {BasicForm} from '../../../models/basic-form.model';

@Component({
  selector: 'app-reactive-form-one',
  templateUrl: './reactive-form-one.component.html',
  styleUrls: ['./reactive-form-one.component.scss']
})
export class ReactiveFormOneComponent implements OnInit {

  basicFormOne: FormGroup;
  basicFormValues: BasicForm;

  genderAnswers = genderAnswers;
  hobbiesAnswers = hobbiesAnswers;
  starSignAnswers = starSignAnswers;

  submitted: boolean;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.basicFormOne = new BasicReactiveForm(this.formBuilder, this.basicFormValues).formGroup;
    this.basicFormValues = this.basicFormOne.value;
  }

  formSubmit(form: FormGroup) {
    this.submitted = true;
  }

  addCheckedValues(checked: boolean, index: number, label: string) {
    if (checked) {
      this.basicFormValues.hobbies.push(label);
    } else {
      this.basicFormValues.hobbies.forEach((hobby, idx) => {
        if (hobby === label) {
          this.basicFormValues.hobbies.splice(idx, 1);
        }
      });
    }
  }

}
