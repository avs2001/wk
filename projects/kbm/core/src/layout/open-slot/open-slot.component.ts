import {AfterViewInit, Component, inject, OnDestroy, ViewChild} from '@angular/core';
import {CdkPortal, PortalModule} from "@angular/cdk/portal";
import {OpenSlot} from "../open-slot";

@Component({
  selector: 'kbm-open-slot',
  standalone: true,
  imports: [PortalModule],
  templateUrl: './open-slot.component.html',
  styleUrls: ['./open-slot.component.css']
})
export class OpenSlotComponent implements AfterViewInit, OnDestroy {

  @ViewChild(CdkPortal) _testTpl!: CdkPortal;
  host = inject(OpenSlot);

  ngAfterViewInit(): void {
    if (this.host && !this.host.navOpenSlot?.hasAttached()) {
      this.host.navOpenSlot?.attach(this._testTpl);
    }
  }

  ngOnDestroy(): void {
    this.host?.navOpenSlot?.detach();
  }

}
