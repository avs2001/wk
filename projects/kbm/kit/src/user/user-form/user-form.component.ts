import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonComponent, CheckboxComponent, InputDirective, InputGroupComponent, LabelDirective} from "@kbm/core";
import {KeyValuePipe, NgForOf} from "@angular/common";
import {OUserType} from "../../model";

type UserFormModel = {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  username: FormControl<string | null>;
  email: FormControl<string | null>;
  phone: FormControl<string | null>;
  isActive: FormControl<boolean>;
  userType: FormControl<number | null>;
}

@Component({
  selector: 'kbm-user-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputGroupComponent,
    InputDirective,
    LabelDirective,
    CheckboxComponent,
    ButtonComponent,
    NgForOf,
    KeyValuePipe
  ],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent {
  form: FormGroup<UserFormModel>;
  fb = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group<UserFormModel>({
      firstName: this.fb.control(null, [Validators.required]),
      lastName: this.fb.control(null, [Validators.required]),
      username: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      phone: this.fb.control(null),
      isActive: this.fb.nonNullable.control(true),
      userType: this.fb.control(null),
    });
  }

  protected readonly OUserType = OUserType;
}
