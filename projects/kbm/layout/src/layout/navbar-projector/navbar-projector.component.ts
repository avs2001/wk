import {AfterViewInit, Component, inject, OnDestroy, ViewChild} from '@angular/core';
import {CdkPortal, PortalModule} from "@angular/cdk/portal";
import {OpenSlot} from "../open-slot";

@Component({
  selector: 'kbm-navbar-projector',
  standalone: true,
  imports: [PortalModule],
  host: {
    'id': 'navbar-projector'
  },
  templateUrl: './navbar-projector.html',
  styleUrls: ['./navbar-projector.scss']
})
export class NavbarProjectorComponent implements AfterViewInit, OnDestroy {

  @ViewChild(CdkPortal) _testTpl!: CdkPortal;
  host = inject(OpenSlot);

  ngAfterViewInit(): void {
    if (this.host && !this.host.openSlot?.hasAttached()) {
      this.host.openSlot?.attach(this._testTpl);
    }
  }

  ngOnDestroy(): void {
    this.host?.openSlot?.detach();
  }

}
