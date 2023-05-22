import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: '[kbm-default-page]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss'],
  host: {
    '[class.kbm-default-page]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DefaultPageComponent {

}
