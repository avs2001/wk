import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  forwardRef,
  HostBinding,
  ViewEncapsulation
} from '@angular/core';
import {SidebarComponent, ToolbarComponent} from "@kbm/core/layout/yoda";
import {OpenSlot} from "@kbm/core/layout/open-slot";
import {CdkPortalOutlet} from "@angular/cdk/portal";

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
  encapsulation: ViewEncapsulation.None,
  providers: [
    {provide: OpenSlot, useExisting: DrawerComponent}
  ]
})
export class DrawerComponent implements OpenSlot {
  @ContentChild(SidebarComponent) _sidebar: SidebarComponent | undefined;
  @ContentChild(ToolbarComponent) _toolbar: ToolbarComponent | undefined;

  @HostBinding('class.small') get small() {
    return !this._sidebar?.expanded;
  }

  get navOpenSlot(): CdkPortalOutlet | undefined {
    return this._toolbar?._outlet;
  }


}
