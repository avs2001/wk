import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarProjectorComponent} from "@kbm/layout";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'ex-tenant-view-page',
  standalone: true,
  imports: [CommonModule, NavbarProjectorComponent, RouterLink],
  templateUrl: './tenant-view-page.component.html',
  styleUrls: ['./tenant-view-page.component.scss']
})
export class TenantViewPageComponent {

}
