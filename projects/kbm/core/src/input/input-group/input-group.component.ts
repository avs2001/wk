import {AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrefixDirective} from "../prefix.directive";
import {SuffixDirective} from "../suffix.directive";
import {InputDirective} from "../input.directive";
import {AbstractControlDirective} from "@angular/forms";

@Component({
  selector: 'kbm-input-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss'],
  host: {
    '[class.kbm-input-group]': 'true',
    '[class.has-prefix]': 'hasPrefix',
    '[class.has-suffix]': 'hasSuffix',
    '[class.focused]': '_input._isFocused',
    '[class.disabled]': 'disabled',
    '[class.ng-untouched]': '_shouldForward("untouched")',
    '[class.ng-touched]': '_shouldForward("touched")',
    '[class.ng-pristine]': '_shouldForward("pristine")',
    '[class.ng-dirty]': '_shouldForward("dirty")',
    '[class.ng-valid]': '_shouldForward("valid")',
    '[class.ng-invalid]': '_shouldForward("invalid")',
    '[class.ng-pending]': '_shouldForward("pending")',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputGroupComponent {
  @ContentChild(PrefixDirective) prefix: PrefixDirective | undefined;
  @ContentChild(SuffixDirective) suffix: PrefixDirective | undefined;
  @ContentChild(InputDirective) _input: InputDirective | undefined;

  constructor() {
  }

  get hasPrefix() {
    return !!this.prefix;
  }

  get hasSuffix() {
    return !!this.suffix;
  }

  _shouldForward(prop: keyof AbstractControlDirective): boolean {
    const control = this._input ? this._input.ngControl : null;
    return control && control[prop];
  }

  get control() {
    return this._input;
  }

  set control(value) {
    this._input = value;
  }

  get disabled() {
    return this._input ? this._input.disabled : false;
  }


}
