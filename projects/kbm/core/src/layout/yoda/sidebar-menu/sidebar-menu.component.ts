import {ChangeDetectionStrategy, Component, Host, HostBinding, SkipSelf, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent, SidebarMenuItemComponent} from "@kbm/core/layout/yoda";

@Component({
  selector: 'kbm-sidebar-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
  host: {
    class: 'kbm-sidebar-menu'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SidebarMenuComponent {
  private _items: SidebarMenuItemComponent[] = [];

  constructor(
    @Host() @SkipSelf() private _sidebar: SidebarComponent
  ) {
  }

  registerItem(item: SidebarMenuItemComponent) {
    this._items.push(item);
  }

  get items() {
    return this._items;
  }

  @HostBinding('class.expanded')
  get expanded() {
    return this._sidebar.expanded;
  }
}
