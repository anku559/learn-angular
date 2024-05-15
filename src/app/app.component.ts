import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { el, faker } from '@faker-js/faker';

const IS_MATCHED_TEXT = 'mt-3 has-text-centered';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  randomText: string = '';
  enteredText: string = '';

  constructor() {
    this.randomText = faker.lorem.words(10);
  }

  @HostListener('document:copy', ['$event'])
  disableCopy(event: ClipboardEvent) {
    event.preventDefault();
  }

  onTextInput(e: Event) {
    const textData = e.target as HTMLInputElement;
    this.enteredText = textData.value;
  }

  onKeyDown(event: KeyboardEvent): void {
    // Check if the key pressed is the backspace key
    // https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
    if (event.key === 'Backspace') {
      event.preventDefault(); // Prevent the default backspace behavior
    }
  }

  compare(randomChar: string, inputChar: string) {
    if (!inputChar) {
      return 'pending';
    }

    if (randomChar === inputChar) {
      return 'correct';
    } else {
      return 'incorrect';
    }
  }
}
