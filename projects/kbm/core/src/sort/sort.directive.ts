import {Directive, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {Subject} from "rxjs";
import {SortDirection, SortEvt} from "./types";
import {Sortable} from "./interfaces";

@Directive({
  selector: '[kbmSort]',
  standalone: true,
})
export class SortDirective implements OnDestroy {


  @Input() active!: string;

  @Input() direction: SortDirection = undefined;

  @Output() readonly kbmSort: EventEmitter<SortEvt> = new EventEmitter<SortEvt>();


  sortables = new Map<string, Sortable>();

  stateChanged = new Subject<void>();


  register(sortable: Sortable) {
    this.sortables.set(sortable.id, sortable);
  }

  sort(sortable: Sortable) {
    if (this.active !== sortable.id) {
      this.active = sortable.id;
      this.direction = 'asc';
    } else {
      this.direction = this.direction === undefined ? 'asc' : (this.direction === 'desc' ? undefined : 'desc');
    }
    this.kbmSort.next({attr: this.active, dir: this.direction});
    this.stateChanged.next();
  }

  ngOnDestroy(): void {
    this.stateChanged.complete();
  }

}
