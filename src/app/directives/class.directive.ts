// Attribute Directive

import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true,
})
export class ClassDirective {
  constructor(private element: ElementRef) {}

  // @Input() set backgroundColor(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }

  // <h4 appClass [backgroundColor]="'orange'" >

  // @Input('appClass') set color(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }

  // Custom Directive same as [ngClass]
  @Input('appClass') set classNames(classObj: any) {
    for (const key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}

