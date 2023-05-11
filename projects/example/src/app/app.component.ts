import {Component, OnInit} from '@angular/core';
import {kbmRandomString} from "@kbm/core/utils";
import {FormControl, Validators} from "@angular/forms";
import {
  DrawerComponent,
  LogoComponent,
  MainContainerComponent,
  SidebarComponent, SidebarMenuComponent, SidebarMenuItemComponent,
  ToolbarComponent,
} from "@kbm/core/layout/yoda";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {IconComponent} from "@kbm/core";

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
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'example';
  control: any = new FormControl(null, {validators: [Validators.required]});

  ngOnInit() {
    // this.control.disable();
    console.log('kbmRandomString', kbmRandomString());
  }

}
