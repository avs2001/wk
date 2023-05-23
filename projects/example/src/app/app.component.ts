import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {IconComponent} from "@kbm/core";
import {FormControl, Validators} from "@angular/forms";

import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {
  DrawerComponent,
  LogoComponent,
  MainContainerComponent,
  SidebarComponent,
  SidebarMenuComponent,
  SidebarMenuItemComponent,
  ToolbarComponent
} from "@kbm/layout/yoda";
import {USER_TYPES} from "@kbm/kit";
import {createApplication} from "@angular/platform-browser";

@Component({
  standalone: true,
  template: 'Hello world!'
})
class RootComponent {
}

@Component({
  selector: 'ex-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    DrawerComponent,
    LogoComponent,
    ToolbarComponent,
    RouterOutlet,
    SidebarComponent,
    SidebarMenuComponent,
    MainContainerComponent,
    SidebarMenuItemComponent,
    IconComponent,
    RouterLink,
    RouterLinkActive
  ],
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'example';
  control: any = new FormControl(null, {validators: [Validators.required]});
  userTypes = inject(USER_TYPES)

  async ngOnInit() {
    console.log(this.userTypes);

    const app = await createApplication().catch(err => console.error(err));
    console.log(app);
  }

}
