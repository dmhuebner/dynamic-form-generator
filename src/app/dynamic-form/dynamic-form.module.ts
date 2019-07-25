import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';

const DYNAMIC_FIELD_COMPONENTS = [
  FormInputComponent,
  FormSelectComponent,
  FormButtonComponent
];

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFieldDirective,
    ...DYNAMIC_FIELD_COMPONENTS
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    ...DYNAMIC_FIELD_COMPONENTS
  ]
})
export class DynamicFormModule { }
