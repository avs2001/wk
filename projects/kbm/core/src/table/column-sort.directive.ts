import {Directive} from '@angular/core';

@Directive({
  selector: 'kbm-column[kbmColumnSort]',
  standalone: true
})
export class ColumnSortDirective {
  sortingKey: string = ''
}
