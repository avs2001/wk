import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconComponent, TableModule} from "@kbm/core";
import {NavbarProjectorComponent} from "@kbm/layout";

@Component({
  selector: 'ex-device-list',
  standalone: true,
  imports: [CommonModule, IconComponent, NavbarProjectorComponent, TableModule],
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceListComponent {
  devices = [
    {
      "id": 1,
      "datasourceId": 1,
      "name": "Blood Pressure Monitor",
      "serialNumber": "BP1234",
      "softwareVersion": "v1.2.3",
      "state": 1,
      "createdAt": 1629264000,
      "updatedAt": 1629349200
    },
    {
      "id": 2,
      "datasourceId": 1,
      "name": "Digital Thermometer",
      "serialNumber": "DT5678",
      "softwareVersion": "v2.0.1",
      "state": 0,
      "createdAt": 1629264000,
      "updatedAt": 1629349200
    },
    {
      "id": 3,
      "datasourceId": 2,
      "name": "ECG Machine",
      "serialNumber": "ECG9876",
      "softwareVersion": "v3.1.0",
      "state": 1,
      "createdAt": 1629264000,
      "updatedAt": 1629349200
    },
    {
      "id": 4,
      "datasourceId": 2,
      "name": "Infusion Pump",
      "serialNumber": "INF5432",
      "softwareVersion": "v1.0.5",
      "state": 1,
      "createdAt": 1629264000,
      "updatedAt": 1629349200
    },
    {
      "id": 5,
      "datasourceId": 3,
      "name": "Patient Monitor",
      "serialNumber": "PM2468",
      "softwareVersion": "v2.3.1",
      "state": 0,
      "createdAt": 1629264000,
      "updatedAt": 1629349200
    },
    {
      "id": 6,
      "datasourceId": 3,
      "name": "Oxygen Concentrator",
      "serialNumber": "OC1357",
      "softwareVersion": "v1.1.2",
      "state": 1,
      "createdAt": 1629264000,
      "updatedAt": 1629349200
    }
  ]

}
