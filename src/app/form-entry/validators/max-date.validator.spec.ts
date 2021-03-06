import { FormControl } from '@angular/forms';
import { MaxDateValidator } from './max-date.validator';

describe('MaxDateValidator Unit Tests', () => {

  it('should return null when date is less than the max date set', () => {

    let validator: MaxDateValidator = new MaxDateValidator();
    let maxDate = new Date();
    let date = '2016-11-14';

    let formControl = new FormControl(date, [ validator.validate(maxDate) ]);

    expect(formControl.errors).toBe(null);
  });

  it('should return an error when date is greater than the max date set', () => {

    let validator: MaxDateValidator = new MaxDateValidator();
    let maxDate = new Date();
    let date = '2300-11-14';

    let formControl = new FormControl(date, [ validator.validate(maxDate) ]);

    expect(formControl.errors.maxdate).not.toBe(null);
  });
});
