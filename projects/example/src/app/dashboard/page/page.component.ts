import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {NavbarProjectorComponent} from "@kbm/layout";
import {
  ButtonComponent,
  CardComponent,
  CardContentDirective,
  CardHeaderComponent,
  CardTitleDirective,
  CheckboxComponent,
  ColumnSortDirective,
  IconComponent,
  InputDirective,
  InputGroupComponent,
  LabelDirective,
  PaginatorComponent,
  RadioComponent,
  SortDirective,
  TableModule
} from "@kbm/core";
import {HttpClient} from "@angular/common/http";

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
    ButtonComponent,
    IconComponent,
    CardHeaderComponent,
    CardTitleDirective,
    RadioComponent,
  ],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  host: {
    'id': 'dashboard-page'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent {
  data: any[] = [
    {name: 'Ciprian', age: 40, city: 'Bucharest'},
    {name: 'Daciana', age: 30, city: 'Bucharest'},
  ];

  http = inject(HttpClient);

  constructor() {
    this.http.get<any[]>('http://127.0.0.1:4010/api/common/info', {
      headers: {
        Authorization: `Bearer xxxx`,
        'X-OrganizationId': `2`
      }
    }).subscribe(users => {
      console.log(users);
    });
  }

  sort($event: any) {
    console.log($event);
  }
}
