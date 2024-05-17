import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true,
})
export class ClassDirective {
  constructor(private element: ElementRef) {}

  @Input() set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}

// <h4 appClass [backgroundColor]="'orange'" >