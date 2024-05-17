// Structural Directive

import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
  standalone: true,
})
export class TimesDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  /*
@Input('appTimes') set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }

<ul *appTimes="5">
  <li>This list is Template Ref</li>
</ul>
*/

  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      // Template Reference
      // Context Object
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i,
      });
    }
  }

  /*
<ng-container *appTimes="images.length; let i = index"> </ng-container>
*/
}
