import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {PageEvent} from "../types";
import {NgIf} from "@angular/common";

@Component({
  selector: 'kbm-paginator',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './paginator.component.html',
  host: {
    '[class.kbm-paginator]': 'true',
  },
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PaginatorComponent {
  @Input({required: true}) totalItems: number = 0;
  @Input() pageSize: number = 10;

  @Input() pageIndex: number = 1;

  @Input() showFirstLastButtons: boolean = false;

  @Output() page = new EventEmitter<PageEvent>();


  numberOfPages() {
    if (!this.pageSize) {
      return 0;
    }

    return Math.ceil(this.totalItems / this.pageSize);
  }

  hasPreviousPage(): boolean {
    return this.pageIndex >= 2 && this.pageSize != 0;
  }

  /** Whether there is a next page. */
  hasNextPage(): boolean {
    const maxPage = this.numberOfPages();
    return this.pageIndex < maxPage && this.pageSize != 0;
  }

  nextPage(): void {
    if (!this.hasNextPage()) {
      return;
    }

    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.pageIndex + 1;
    this._emitPageEvent(previousPageIndex);
  }

  /** Move back to the previous page if it exists. */
  previousPage(): void {
    if (!this.hasPreviousPage()) {
      return;
    }

    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.pageIndex - 1;
    this._emitPageEvent(previousPageIndex);
  }

  firstPage(): void {
    // hasPreviousPage being false implies at the start
    if (!this.hasPreviousPage()) {
      return;
    }

    const previousPageIndex = this.pageIndex;
    this.pageIndex = 1;
    this._emitPageEvent(previousPageIndex);
  }

  /** Move to the last page if not already there. */
  lastPage(): void {
    // hasNextPage being false implies at the end
    if (!this.hasNextPage()) {
      return;
    }

    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.numberOfPages();
    this._emitPageEvent(previousPageIndex);
  }

  private _emitPageEvent(previousPageIndex: number) {
    this.page.emit({
      previousPage: previousPageIndex,
      page: this.pageIndex,
      pageSize: this.pageSize,
      total: this.totalItems,
    });
  }

  go() {
    console.log('HERE');
  }
}
