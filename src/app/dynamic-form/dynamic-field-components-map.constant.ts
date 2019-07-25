import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormButtonComponent } from './components/form-button/form-button.component';

export const DYNAMIC_FIELD_COMPONENTS_MAP = {
  input: FormInputComponent,
  select: FormSelectComponent,
  button: FormButtonComponent
};
