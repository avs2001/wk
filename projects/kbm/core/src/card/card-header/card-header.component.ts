import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'kbm-card-header',
  standalone: true,
  imports: [],
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.css'],
  host: {
    '[class.kbm-card-header]': 'true'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CardHeaderComponent {

}
