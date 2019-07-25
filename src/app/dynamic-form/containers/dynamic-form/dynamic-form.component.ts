import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      if (control.type !== 'button') {
        newGroup.addControl(control.name, this.fb.control(control.value));
      }
    });

    return newGroup;
  }

  onSubmit() {
    this.submitted.emit(this.form);
  }

}
