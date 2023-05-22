import {ChangeDetectionStrategy, Component, signal, ViewEncapsulation} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'kbm-sidebar',
  standalone: true,
  exportAs: 'kbmSidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: {
    id: 'sidebar',
    '[class.kbm-sidebar]': 'true',
    '[class.small]': '!expanded()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgOptimizedImage,
  ],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
  readonly expanded = signal(true);

  toggle() {
    this.expanded.update(v => !v);
  }
}
