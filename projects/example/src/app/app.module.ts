import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  IconComponent,
  InputDirective,
  InputGroupComponent,
  LabelDirective,
  PrefixDirective,
  SuffixDirective
} from "@kbm/core";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonComponent} from "@kbm/core/button";
import {CardComponent, CardContentDirective, CardTitleDirective} from "@kbm/core/card";
import {CardHeaderComponent} from "@kbm/core/card/card-header/card-header.component";
import {DrawerComponent, LogoComponent, MainContainerComponent, SidebarComponent} from "@kbm/core/layout/yoda";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputGroupComponent,
    InputDirective,
    LabelDirective,
    ReactiveFormsModule,
    SuffixDirective,
    PrefixDirective,
    ButtonComponent,
    CardComponent,
    CardHeaderComponent,
    CardContentDirective,
    CardTitleDirective,
    DrawerComponent,
    SidebarComponent,
    MainContainerComponent,
    LogoComponent,
    IconComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
