import {ChangeDetectionStrategy, Component, forwardRef, Input, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {coerceBooleanProperty} from "@angular/cdk/coercion";

@Component({
  selector: 'kbm-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  host: {
    '[class.kbm-radio]': 'true',
    '[class.kbm-radio--disabled]': 'disabled',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RadioComponent {
  @Input() checked: boolean = false;
  _disabled: boolean = false;
  @Input()
  set disabled(value: boolean | string) {
    this._disabled = coerceBooleanProperty(value);
  }

  get disabled(): boolean {
    return this._disabled;
  }

  private onChange: (value: boolean) => void = () => {
  };
  private onTouched: (value: boolean) => void = () => {
  };

  toggle() {
    this.checked = !this.checked;
    if (this.onChange) {
      this.onChange(this.checked);
    }
  }

  writeValue(value: boolean): void {
    this.checked = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (value: boolean) => void) {
    this.onTouched = fn;
  }
}
