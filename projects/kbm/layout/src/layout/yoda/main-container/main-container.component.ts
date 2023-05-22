import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'kbm-main-container',
  standalone: true,
  imports: [],
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  host: {
    '[class.kbm-main-container]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MainContainerComponent {

}
