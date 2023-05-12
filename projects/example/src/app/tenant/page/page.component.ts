import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarProjectorComponent} from "@kbm/core/layout/navbar-projector/navbar-projector.component";

@Component({
  selector: 'ex-page',
  standalone: true,
    imports: [CommonModule, NavbarProjectorComponent],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  host: {
    'id': 'tenant-page'
  }
})
export class PageComponent {

}
