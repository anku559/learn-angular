import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

enum InputTypes {
  text = 'text',
  number = 'number',
  email = 'email',
}

enum InputFields {
  'firstName' = 'firstName',
  'middleName' = 'middleName',
  'lastName' = 'lastName',
  'email' = 'email',
  'username' = 'username',
  'age' = 'age',
  'dateOfBirth' = 'dateOfBirth',
}

interface IFormDataArray {
  display: string;
  field: string;
  mandatory: boolean;
  type: string;
  value?: string | number | null | undefined;
  min?: number;
  max?: number;
}

// const FORM_DATA: IFormDataArray[] = [
//   {
//     display: 'First Name',
//     field: 'firstName',
//     mandatory: false,
//     type: 'text',
//   },
//   {
//     display: 'Middle Name',
//     field: 'middleName',
//     mandatory: false,
//     type: 'text',
//   },
//   {
//     display: 'Last Name',
//     field: 'lastName',
//     mandatory: false,
//     type: 'text',
//   },
//   {
//     display: 'Email',
//     field: 'email',
//     mandatory: true,
//     type: 'email',
//   },
//   {
//     display: 'Username',
//     field: 'username',
//     mandatory: true,
//     type: 'text',
//   },
//   {
//     display: 'Age',
//     field: 'age',
//     mandatory: false,
//     type: 'number',
//     min: 0,
//     max: 100,
//   },
// ];

const FORM_DATA: IFormDataArray[] = [
  {
    display: 'First Name',
    field: 'firstName',
    mandatory: false,
    type: 'text',
  },
  // {
  //   display: 'Date of Birth',
  //   field: 'dateOfBirth',
  //   mandatory: false,
  //   type: 'date',
  // },
];

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    JsonPipe,
    LowerCasePipe,
    PercentPipe,
    TitleCasePipe,
    UpperCasePipe,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  formText = 'Payment Form';
  formFields = FORM_DATA;

  constructor() {
    this.formFields.forEach((field: IFormDataArray, i: number) => {
      if (field.type === 'number') {
        this.formFields[i].value = 0;
      } else {
        this.formFields[i].value = '';
      }
    });
  }

  get inputFields() {
    return InputFields;
  }

  get inputTypes() {
    return InputTypes;
  }

  getInputFieldData(e: Event, field: InputFields) {
    const textData = e.target as HTMLInputElement;

    for (const input of this.formFields) {
      if (input.field === field) {
        if (input.type === InputTypes.number) {
          input.value = +textData.value;
        } else {
          input.value = textData.value;
        }

        break;
      }
    }
  }
}
