import {ChangeDetectionStrategy, Component, Host, HostBinding, SkipSelf, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarMenuComponent} from "@kbm/core/layout/yoda";

@Component({
  selector: '[kbm-sidebar-menu-item]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-menu-item.component.html',
  styleUrls: ['./sidebar-menu-item.component.scss'],
  host: {
    '[class.kbm-sidebar-menu-item]': 'true'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SidebarMenuItemComponent {


  constructor(@Host() @SkipSelf() private sidebarMenu: SidebarMenuComponent) {
    sidebarMenu.registerItem(this);
  }

  @HostBinding('class.collapsed')
  get isCollapsed() {
    return !this.sidebarMenu.expanded;
  }
}
