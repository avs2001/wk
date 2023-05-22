import {ChangeDetectionStrategy, Component, ContentChild, inject, Input, TemplateRef, ViewChild} from '@angular/core';
import {ColumnSortDirective} from "../column-sort.directive";

@Component({
  selector: 'kbm-column',
  templateUrl: './column.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnComponent {
  _field: string = '';
  hasNestedPath: boolean = false;
  @Input() header: string = '';

  @ContentChild(TemplateRef) template: TemplateRef<any> | undefined;
  @ViewChild('headerTemplate', {static: true}) headerTemplate!: TemplateRef<any>;

  sort = inject(ColumnSortDirective, {optional: true});


  @Input()
  public set field(value: string) {
    this._field = value;
    this.hasNestedPath = value?.includes('.');
  }

  public get field(): string {
    return this._field;
  }

  @Input()
  set sortable(sortable: string | null) {
    if (this.sort) {
      this.sort.sortingKey = sortable ?? this.field;
    }
  }

  get isSortable() {
    return !!this.sort;
  }
}
