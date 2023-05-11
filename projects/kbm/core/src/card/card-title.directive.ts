import {Directive} from '@angular/core';

@Directive({
  selector: '[kbmCardTitle]',
  standalone: true,
  host: {
    '[class.kbm-card-title]': 'true'
  }
})
export class CardTitleDirective {

  constructor() {
  }

}
