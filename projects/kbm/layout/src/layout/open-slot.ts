import {CdkPortalOutlet} from "@angular/cdk/portal";

export abstract class OpenSlot {
  abstract openSlot: CdkPortalOutlet | undefined;
}
