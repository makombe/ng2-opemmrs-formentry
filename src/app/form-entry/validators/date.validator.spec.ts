import { FormControl } from '@angular/forms';
import { DateValidator } from './date.validator';

describe('DateValidator Unit Tests', () => {

  it('should return null when the correct date value is provided', () => {

    let validator: DateValidator = new DateValidator();
    let date = '2016-11-14';

    let formControl = new FormControl(date, [ validator.validate ]);

    expect(formControl.errors).toBe(null);
  });

  it('should return an error when a future date is provided', () => {

    let validator: DateValidator = new DateValidator();
    let date = 'fake date';

    let formControl = new FormControl(date, [ validator.validate ]);

    expect(formControl.errors.date).toBe(true);
  });
});
