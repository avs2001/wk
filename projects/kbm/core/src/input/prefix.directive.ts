import { Directive } from '@angular/core';

@Directive({
  selector: '[kbmPrefix]',
  standalone: true
})
export class PrefixDirective {

  constructor() { }

}
