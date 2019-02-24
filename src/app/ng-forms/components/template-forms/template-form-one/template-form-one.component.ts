import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BasicForm} from '../../../models/basic-form.model';
import {genderAnswers} from '../../../constants/gender-answers.const';
import {hobbiesAnswers} from '../../../constants/hobbies-answers.const';
import {starSignAnswers} from '../../../constants/star-sign-answers.const';
import {NgFormsService} from '../../../services/ng-forms.service';

@Component({
  selector: 'app-template-form-one',
  templateUrl: './template-form-one.component.html',
  styleUrls: ['./template-form-one.component.scss']
})
export class TemplateFormOneComponent implements OnInit {

  @ViewChild('form') form: NgForm;

  basicFormOne: BasicForm;

  genderAnswers = genderAnswers;
  hobbiesAnswers = hobbiesAnswers;
  starSignAnswers = starSignAnswers;

  submitted: boolean;

  constructor(public ngFormService: NgFormsService) {
  }

  ngOnInit() {
    this.basicFormOne = new BasicForm();
  }

  addCheckedValues(checked: boolean, index: number, label: string) {
    if (checked) {
      this.basicFormOne.hobbies.push(label);
    } else {
      this.basicFormOne.hobbies.forEach((hobby, idx) => {
        if (hobby === label) {
          this.basicFormOne.hobbies.splice(idx, 1);
        }
      });
    }
  }

  formSubmit() {
    this.submitted = true;
  }

}
