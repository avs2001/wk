import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'kbm-sidebar',
  standalone: true,
  exportAs: 'kbmSidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: {
    '[class.kbm-sidebar]': 'true',
    '[class.small]': '!expanded'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgOptimizedImage,
  ],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
  expanded = true;

  toggle() {
    this.expanded = !this.expanded;
  }
}