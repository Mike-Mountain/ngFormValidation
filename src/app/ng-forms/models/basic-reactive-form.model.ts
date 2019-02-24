import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BasicForm} from './basic-form.model';

export class BasicReactiveForm extends BasicForm {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              options?: any) {
    super(formBuilder);
    this.name = options && options.name;
    this.email = options && options.email;
    this.phoneNumber = options && options.phoneNumber;
    this.hobbies = options && options.hobbies;
    this.starSign = options && options.starSign;
    this.aboutYou = options && options.aboutYou;

    this.formGroup = formBuilder.group({
      name: [this.name || '', Validators.required],
      email: [this.email || '', Validators.required],
      phoneNumber: [this.phoneNumber || null, Validators.required],
      gender: [this.gender || '', Validators.required],
      hobbies: [this.hobbies || [], Validators.required],
      starSign: [this.starSign || '', Validators.required],
      aboutYou: [this.aboutYou || '', Validators.required]
    });
  }
}
