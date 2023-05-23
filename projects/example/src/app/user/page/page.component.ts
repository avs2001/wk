import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarProjectorComponent} from '@kbm/layout';
import {PatientFormComponent, UserFormComponent} from "@kbm/kit";
import {CardComponent, CardContentDirective, CardHeaderComponent, CardTitleDirective} from "@kbm/core";

@Component({
  selector: 'ex-page',
  standalone: true,
  imports: [CommonModule, NavbarProjectorComponent, PatientFormComponent, CardComponent, CardContentDirective, UserFormComponent, CardHeaderComponent, CardTitleDirective],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  host: {
    id: 'user-page'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {

}
