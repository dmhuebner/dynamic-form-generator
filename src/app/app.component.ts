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
      label: 'First Name',
      name: 'firstName',
      placeholder: 'Enter your first name'
    },
    {
      type: 'input',
      label: 'Last Name',
      name: 'lastName',
      placeholder: 'Enter your last name'
    },
    {
      type: 'select',
      label: 'Favorite Coding Language',
      name: 'codingLanguage',
      placeholder: 'Select a language',
      options: ['Java', 'Python', 'Go', 'JavaScript', 'PHP']
    },
    {
      type: 'button',
      label: 'Submit',
      name: 'submit'
    }
  ];

  formSubmitted(formValue: FormGroup): void {
    console.log(formValue.value);
  }
}
