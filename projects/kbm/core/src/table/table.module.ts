import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table/table.component';
import {ColumnComponent} from './column/column.component';
import {CdkTableModule} from "@angular/cdk/table";
import {PortalModule} from "@angular/cdk/portal";
import {SortableComponent, SortDirective} from "../sort";


@NgModule({
  declarations: [
    TableComponent,
    ColumnComponent,
  ],
  imports: [
    CommonModule,
    CdkTableModule,
    PortalModule,
    SortableComponent,
    SortDirective,
  ],
  exports: [
    TableComponent,
    ColumnComponent,
  ]
})
export class TableModule {
}
