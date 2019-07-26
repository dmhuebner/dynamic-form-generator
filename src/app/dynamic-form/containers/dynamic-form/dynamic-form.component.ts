import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fg-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input()
  config: any[] = [];

  @Output()
  submitted: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createFormGroup();
  }

  createFormGroup() {
    const newGroup = this.fb.group({});
    this.config.forEach(control => {
      if (control.type.toLowerCase() !== 'button') {
        const validatorsList = control.validators ? this.buildNgValidatorsList(control.validators) : [];
        newGroup.addControl(control.name, this.fb.control(control.value, validatorsList));
      }
    });

    return newGroup;
  }

  onSubmit() {
    this.submitted.emit(this.form);
  }

  private buildNgValidatorsList(controlValidators: string[]) {
    return controlValidators.map((validatorString) => {
      const validatorMethodArgArray = validatorString.split('=');
      return validatorMethodArgArray.length > 1
        ? Validators[validatorMethodArgArray[0]](validatorMethodArgArray[1])
        : Validators[validatorString];
    });
  }

}
