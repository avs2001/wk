import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ButtonComponent, IconComponent} from "@kbm/core";

@Component({
  selector: 'kbm-toolbar',
  standalone: true,
  imports: [
    ButtonComponent,
    IconComponent,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  host: {
    '[class.kbm-toolbar]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent {

}
