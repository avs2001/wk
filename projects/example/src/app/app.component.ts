import {Component, OnInit} from '@angular/core';
import {kbmRandomString} from "@kbm/core/utils";
import {FormControl, Validators} from "@angular/forms";
import {
  DrawerComponent,
  LogoComponent,
  MainContainerComponent,
  SidebarComponent,
  ToolbarComponent
} from "@kbm/core/layout/yoda";
import {RouterOutlet} from "@angular/router";

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
    MainContainerComponent
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
