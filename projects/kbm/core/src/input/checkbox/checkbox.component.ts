import {ChangeDetectionStrategy, Component, forwardRef, Input, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'kbm-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() checked: boolean = false;
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
