import { FormControl } from '@angular/forms';
import { DateValidator } from './date.validator';

export class MaxDateValidator {

  validate(max: Date) {

    return (control: FormControl): {[key: string]: any} => {

      if(control.value && control.value.length != 0) {

        if(!new DateValidator().validate(control.value)) {

          let newDate: Date = new Date(control.value);

          return newDate.getTime() > max.getTime() ? { 'maxdate': { 'requiredDate': max, actualDate: newDate } } : null;
        } else {

          return { 'maxdate': { 'requiredDate': max } };
        }
      }

      return null;
    };
  }
}
