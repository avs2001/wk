import {Component, OnInit} from '@angular/core';
import {kbmRandomString} from "@kbm/core/utils";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'ex-root',
  templateUrl: './app.component.html',
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
