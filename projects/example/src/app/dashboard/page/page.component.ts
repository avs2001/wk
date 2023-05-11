import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OpenSlotComponent} from "@kbm/core/layout/open-slot/open-slot.component";

@Component({
  selector: 'ex-page',
  standalone: true,
  imports: [CommonModule, OpenSlotComponent],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

}
