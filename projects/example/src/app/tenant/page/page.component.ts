import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultPageComponent, NavbarProjectorComponent} from '@kbm/layout';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {CardComponent, CardContentDirective, CardHeaderComponent} from "@kbm/core";

@Component({
  selector: 'ex-page',
  standalone: true,
  imports: [CommonModule, NavbarProjectorComponent, DefaultPageComponent, RouterOutlet, CardComponent, CardHeaderComponent, CardContentDirective, RouterLink, RouterLinkActive],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  host: {
    'id': 'tenant-page'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent {

}
