import { Component, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-relatives-info',
  templateUrl: './relatives-info.component.html',
  styleUrls: ['./relatives-info.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RelativesInfoComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RelativesInfoComponent),
      multi: true
    }
  ]
})
export class RelativesInfoComponent implements ControlValueAccessor {
  public form: FormGroup = new FormGroup({
    type: new FormControl("", []),
    phoneNumber: new FormControl("", []),
  });

  public onTouched: () => void = () => {};

  writeValue(obj: any): void {
    obj && this.form.setValue(obj, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.form.valid ? null : { invalid: true}; 
  }
}
