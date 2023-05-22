import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  forwardRef,
  HostBinding,
  ViewEncapsulation
} from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";

import {OpenSlot} from "../../open-slot";
import {CdkPortalOutlet} from "@angular/cdk/portal";
import {ToolbarComponent} from "../toolbar/toolbar.component";

@Component({
  selector: 'kbm-drawer',
  standalone: true,
  imports: [],
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  host: {
    id: 'drawer',
    '[class.kbm-drawer]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {provide: OpenSlot, useExisting: forwardRef(() => DrawerComponent)}
  ]
})
export class DrawerComponent implements OpenSlot {
  @ContentChild(SidebarComponent) _sidebar: SidebarComponent | undefined;
  @ContentChild(ToolbarComponent) _toolbar: ToolbarComponent | undefined;

  @HostBinding('class.small') get small() {
    return !this._sidebar?.expanded();
  }

  get openSlot(): CdkPortalOutlet | undefined {
    return this._toolbar?._outlet;
  }


}
