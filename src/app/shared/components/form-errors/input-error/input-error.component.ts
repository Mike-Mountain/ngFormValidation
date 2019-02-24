import {Component, DoCheck, Input, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss']
})
export class InputErrorComponent implements OnInit, DoCheck, OnDestroy {

  @Input() control: AbstractControl;
  @Input() submitted: boolean;

  inValid: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    if (!this.inValid && (this.control.touched || this.submitted)) {
      this.inValid = this.controlHasError(this.submitted, this.control.touched);
    } else if (this.inValid && (this.control.value)) {
      this.inValid = this.controlHasError(this.submitted, this.control.touched);
    }
  }

  ngOnDestroy() {
  }

  controlHasError(submitted?: boolean, touched?: boolean): boolean {
    if (this.control) {
      const required = this.control.hasError('required');

      return (submitted || touched) && required;
    }
  }

}
