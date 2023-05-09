import {Component, OnInit} from '@angular/core';
import {kbmRandomString} from "@kbm/core/utils";

@Component({
  selector: 'ex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'example';

  ngOnInit() {
    console.log('kbmRandomString', kbmRandomString());
  }

}
