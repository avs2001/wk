import {ChangeDetectionStrategy, Component, ContentChild, HostBinding, ViewEncapsulation} from '@angular/core';
import {SidebarComponent} from "@kbm/core/layout/yoda";

@Component({
  selector: 'kbm-drawer',
  standalone: true,
  imports: [],
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  host: {
    '[class.kbm-drawer]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None

})
export class DrawerComponent {
  @ContentChild(SidebarComponent) _sidebar: SidebarComponent | undefined;

  @HostBinding('class.small') get small() {
    return !this._sidebar?.expanded;
  }
}
