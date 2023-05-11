import {Directive} from '@angular/core';

@Directive({
  selector: '[kbmCardContent]',
  standalone: true,
  host: {
    '[class.kbm-card-content]': 'true'
  }
})
export class CardContentDirective {
}
