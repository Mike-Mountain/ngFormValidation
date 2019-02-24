import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgFormsService {

  private templateFormOneSubmitSource = new BehaviorSubject<boolean>(false);
  public $tFormOne = this.templateFormOneSubmitSource.asObservable();

  get tFormOneSubmit() {
    return this._tFormOneSubmit;
  }

  set tFormOneSubmit(value: boolean) {
    this._tFormOneSubmit = value;
  }

  private _tFormOneSubmit: boolean;

  constructor() {
  }

  submitForm(form: string) {
    switch (form) {
      case 'templateFormOne':
        this.templateFormOneSubmitSource.next(true);
        break;
    }
  }
}
