import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'kbm-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  host: {
    '[class.kbm-icon]': 'true',
    '[class.material-symbols-outlined]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class IconComponent {

}
