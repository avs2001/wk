import {Component} from '@angular/core';
import {NavbarProjectorComponent} from "@kbm/layout";
import {
  CardComponent,
  CardContentDirective, CheckboxComponent,
  ColumnSortDirective, InputDirective, InputGroupComponent, LabelDirective,
  PaginatorComponent,
  SortDirective,
  TableModule
} from "@kbm/core";

@Component({
  selector: 'ex-page',
  standalone: true,
  imports: [
    NavbarProjectorComponent,
    PaginatorComponent,
    TableModule,
    SortDirective,
    TableModule,
    ColumnSortDirective,
    CardComponent,
    CardContentDirective,
    CheckboxComponent,
    InputGroupComponent,
    InputDirective,
    LabelDirective,
  ],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  host: {
    'id': 'dashboard-page'
  }
})
export class PageComponent {
  data: any[] = [
    {name: 'Ciprian', age: 40, city: 'Bucharest'},
    {name: 'Daciana', age: 30, city: 'Bucharest'},
  ];

  sort($event: any) {
    console.log($event);
  }
}
