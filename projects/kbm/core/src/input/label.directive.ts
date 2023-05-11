import {Directive} from '@angular/core';

@Directive({
  selector: '[kbmLabel]',
  standalone: true,
  host: {
    '[class.kbm-label]': 'true',
  }
})
export class LabelDirective {
}
