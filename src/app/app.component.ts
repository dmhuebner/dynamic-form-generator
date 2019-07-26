import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'fg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config = [
    {
      type: 'input',
      inputType: 'text',
      label: 'First Name',
      name: 'firstName',
      placeholder: 'Enter your first name',
      validators: ['required', 'maxLength=30', 'pattern=[a-zA-Z]+']
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'Last Name',
      name: 'lastName',
      placeholder: 'Enter your last name',
      validators: ['required', 'minLength=3', 'maxLength=30']
    },
    {
      type: 'input',
      inputType: 'email',
      label: 'Email',
      name: 'email',
      placeholder: 'Enter your email',
      validators: ['required', 'email']
    },
    {
      type: 'input',
      inputType: 'phone',
      label: 'Phone',
      name: 'phone',
      placeholder: 'Enter your phone',
      validators: ['required', 'pattern=[0-9]+', 'maxLength=10']
    },
    {
      type: 'select',
      label: 'Favorite Coding Language',
      name: 'codingLanguage',
      placeholder: 'Select a language',
      options: ['Java', 'Python', 'Go', 'JavaScript', 'PHP'],
      validators: ['required']
    },
    {
      type: 'input',
      label: 'Comments',
      name: 'comments',
      placeholder: 'Do you have any comments?'
    },
    {
      type: 'button',
      label: 'Submit',
      name: 'submit'
    }
  ];

  formSubmitted(formValue: FormGroup): void {
    console.log(formValue.value);
    console.log('Valid?', formValue.valid);
  }
}
