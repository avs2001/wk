import {Directive, ElementRef, Input, Optional, Self} from '@angular/core';
import {NgControl} from "@angular/forms";

@Directive({
  selector: '[kbmInput]',
  standalone: true,
  host: {
    '[disabled]': 'disabled',
    '(focus)': 'focusChanged(true)',
    '(blur)': 'focusChanged(false)',
  }
})
export class InputDirective {
  readonly _isNativeSelect: boolean;
  focused: boolean = false;
  protected _disabled = false;

  @Input()
  set disabled(value: boolean | string) {
    this._disabled = value != null && `${value}` !== 'false';
  }

  get disabled() {
    return this._disabled;
  }

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    protected _elementRef: ElementRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {

    const element = this._elementRef.nativeElement;
    const nodeName = element.nodeName.toLowerCase();

    this._isNativeSelect = nodeName === 'select';
  }

  focusChanged(focused: boolean) {
    this.focused = focused
  }

  get _isFocused() {
    return this.focused;
  }

  get nativeControl(): boolean {
    return this._isNativeSelect;
  }

  ngDoCheck() {
    if (this.ngControl) {
      if (this.ngControl.disabled) {
        this.disabled = true;
      }
    }
  }

}
