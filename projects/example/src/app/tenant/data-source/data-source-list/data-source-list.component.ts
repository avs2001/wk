import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconComponent, TableModule} from "@kbm/core";
import {NavbarProjectorComponent} from "@kbm/layout";

@Component({
  selector: 'ex-data-source-list',
  standalone: true,
  imports: [CommonModule, IconComponent, NavbarProjectorComponent, TableModule],
  templateUrl: './data-source-list.component.html',
  styleUrls: ['./data-source-list.component.scss']
})
export class DataSourceListComponent {
  dataSources = [
    {
      "id": 1,
      "name": "Blood Pressure Monitor",
      "key": "bp_monitor_123"
    },
    {
      "id": 2,
      "name": "Digital Thermometer",
      "key": "thermo_456"
    },
    {
      "id": 3,
      "name": "Electrocardiogram (ECG) Machine",
      "key": "ecg_machine_789"
    },
    {
      "id": 4,
      "name": "Infusion Pump",
      "key": "infusion_pump_234"
    },
    {
      "id": 5,
      "name": "Patient Monitor",
      "key": "patient_monitor_567"
    }
  ]
  ;
}
