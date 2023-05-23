import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarProjectorComponent} from "@kbm/layout";
import {RouterLink} from "@angular/router";
import {ButtonComponent, IconComponent, TableModule} from "@kbm/core";

@Component({
  selector: 'ex-tenant-list',
  standalone: true,
  imports: [CommonModule, NavbarProjectorComponent, RouterLink, TableModule, ButtonComponent, IconComponent],
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.scss']
})
export class TenantListComponent {
  tenants = [
    {
      "id": 1,
      "tenancyName": "acme",
      "countryCode": "US",
      "isActive": true,
      "createdAt": 1664073600000
    },
    {
      "id": 2,
      "tenancyName": "example",
      "countryCode": "CA",
      "isActive": true,
      "createdAt": 1664073600000
    },
    {
      "id": 3,
      "tenancyName": "xyz",
      "countryCode": "GB",
      "isActive": false,
      "createdAt": 1664073600000
    },
    {
      "id": 4,
      "tenancyName": "test",
      "countryCode": "AU",
      "isActive": true,
      "createdAt": 1664073600000
    }
  ];
}
