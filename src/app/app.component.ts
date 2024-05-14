import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

enum SelectorType {
  UPPER = 'UPPER',
  LOWER = 'LOWER',
  NUMBER = 'NUMBER',
  SYMBOL = 'SYMBOL',
}

const upperCaseArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const lowerCaseArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const symbolsArray = [
  '`',
  '~',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '_',
  '=',
  '+',
  '[',
  '{',
  ']',
  '}',
  '\\',
  '|',
  ';',
  ':',
  "'",
  '"',
  ',',
  '<',
  '.',
  '>',
  '/',
  '?',
];

function shufflePasswordArray(arrays: string[]) {
  for (let i = arrays.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrays[i], arrays[j]] = [arrays[j], arrays[i]];
  }

  return arrays;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // Checkbox
  includeUpperCase = true;
  includeLowerCase = true;
  includeNumbers = true;
  includeSymbols = true;

  inputLength = 8;
  password = '';

  constructor() {
    this.password = '';
  }

  get SelectorTypes() {
    return SelectorType;
  }

  onChangePasswordLength(e: Event) {
    const inputValue = +(e.target as HTMLInputElement).value;
    if (!isNaN(inputValue) && inputValue >= 4) {
      this.inputLength = inputValue;
    }
    console.log(this.inputLength);
  }

  onChangeSelectors(type: SelectorType) {
    switch (type) {
      case SelectorType.UPPER:
        this.includeUpperCase = !this.includeUpperCase;
        break;
      case SelectorType.LOWER:
        this.includeLowerCase = !this.includeLowerCase;
        break;
      case SelectorType.NUMBER:
        this.includeNumbers = !this.includeNumbers;
        break;
      case SelectorType.SYMBOL:
        this.includeSymbols = !this.includeSymbols;
        break;
      default:
        break;
    }
  }

  setInputLength() {
    this.inputLength = 100;
  }

  onButtonClick() {
    console.log(`Generating password with length: ${this.inputLength}
Upper Case: ${this.includeUpperCase}
Lower Case: ${this.includeLowerCase}
Numbers: ${this.includeNumbers}
Symbols: ${this.includeSymbols}`);

    let arrays: string[] = [];
    if (this.includeUpperCase) {
      arrays = arrays.concat(upperCaseArray);
    }

    if (this.includeLowerCase) {
      arrays = arrays.concat(lowerCaseArray);
    }

    if (this.includeNumbers) {
      arrays = arrays.concat(numbersArray);
    }

    if (this.includeSymbols) {
      arrays = arrays.concat(symbolsArray);
    }

    const generatedArray = shufflePasswordArray(arrays);

    let password = '';
    for (let i = 0; i < this.inputLength; i++) {
      password +=
        generatedArray[Math.floor(Math.random() * generatedArray.length)];
    }

    this.password = password;
    console.log(this.password);
  }
}
