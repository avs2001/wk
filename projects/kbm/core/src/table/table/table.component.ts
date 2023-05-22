import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  QueryList, TemplateRef,
  ViewEncapsulation, WritableSignal
} from '@angular/core';
import {resolveNestedPath} from '../../utils';
import {ColumnComponent} from "../column/column.component";

@Component({
  selector: 'kbm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent {
  @Input() data: any[] = [];
  @ContentChildren(ColumnComponent) _columns: QueryList<ColumnComponent> = new QueryList<ColumnComponent>();

  get columns() {
    return this._columns.toArray();
  }

  hasSortableColumns() {
    return this.columns.some(column => column.isSortable);
  }

  get displayedColumns() {
    return this.columns.map(column => column.field);
  }


  value(row: any, column: ColumnComponent) {
    if (column.hasNestedPath) {
      return resolveNestedPath(row, column.field);
    } else {
      return row[column.field] ?? `No ${column.field} found`;
    }
  }
}
