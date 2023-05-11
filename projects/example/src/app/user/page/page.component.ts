import {ChangeDetectionStrategy, Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ex-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  host:{
    id:'user-page'
  },
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class PageComponent {

}
