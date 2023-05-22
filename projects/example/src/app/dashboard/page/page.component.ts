import {Component} from '@angular/core';
import {NavbarProjectorComponent} from "@kbm/layout";
import {PaginatorComponent} from "@kbm/core";

@Component({
  selector: 'ex-page',
  standalone: true,
  imports: [
    NavbarProjectorComponent,
    PaginatorComponent
  ],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  host: {
    'id': 'dashboard-page'
  }
})
export class PageComponent {

}
