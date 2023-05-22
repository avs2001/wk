import {ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {ButtonComponent, IconComponent} from "@kbm/core";
import {CdkPortalOutlet, PortalModule} from "@angular/cdk/portal";

@Component({
  selector: 'kbm-toolbar',
  standalone: true,
  imports: [
    ButtonComponent,
    IconComponent,
    PortalModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  host: {
    '[class.kbm-toolbar]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarComponent {
  @ViewChild(CdkPortalOutlet) _outlet: CdkPortalOutlet | undefined;
}
