import {Directive} from '@angular/core';

@Directive({
  selector: '[kbmCardFooter]',
  standalone: true,
  host: {
    '[class.kbm-card-footer]': 'true'
  }
})
export class CardFooterDirective {
}
