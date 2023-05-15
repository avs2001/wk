import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarProjectorComponent} from "@kbm/core/layout/navbar-projector/navbar-projector.component";
import {DefaultPageComponent} from "@kbm/core/layout/yoda";
import {CardComponent, CheckboxComponent, RadioComponent} from "@kbm/core";

@Component({
  selector: 'ex-page',
  standalone: true,
  imports: [CommonModule, NavbarProjectorComponent, PageComponent, DefaultPageComponent, CardComponent, CheckboxComponent, RadioComponent],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  host: {
    'id': 'dashboard-page'
  }
})
export class PageComponent {

}
