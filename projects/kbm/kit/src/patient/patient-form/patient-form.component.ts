import {ChangeDetectionStrategy, Component, HostListener, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {
  ButtonComponent,
  CheckboxComponent,
  IconComponent,
  InputDirective,
  InputGroupComponent,
  LabelDirective, PrefixDirective, SuffixDirective
} from "@kbm/core";

/**
 id: number;
 firstName: string;
 lastName: string;
 username: string;
 email: string;
 phone: string;
 isActive: boolean;
 lastLoginTime: number;
 isPendingActivation: boolean;
 isLocked: boolean;
 userType: number;
 createdAt: number;
 patientId: string;
 address: string;
 address1: string;
 city: string;
 state: string;
 postalCode: string;
 birthdate: string;
 countryCode: string;
 gender: string;
 */
type PatientFormModel = {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  username: FormControl<string | null>;
  email: FormControl<string | null>;
  phone: FormControl<string | null>;
  isActive: FormControl<boolean>;
  userType: FormControl<number | null>;
  patientId: FormControl<string | null>;
  address: FormControl<string | null>;
  address1: FormControl<string | null>;
  city: FormControl<string | null>;
  state: FormControl<string | null>;
  postalCode: FormControl<string | null>;
  birthdate: FormControl<string | null>;
  countryCode: FormControl<string | null>;
}

@Component({
  selector: 'kbm-patient-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputGroupComponent, InputDirective, LabelDirective, CheckboxComponent, ButtonComponent, IconComponent, PrefixDirective, SuffixDirective],
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientFormComponent {
  form: FormGroup<PatientFormModel>;
  fb = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group<PatientFormModel>({
      firstName: this.fb.control(null, [Validators.required]),
      lastName: this.fb.control(null, [Validators.required]),
      username: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required]),
      phone: this.fb.control(null, [Validators.required]),
      isActive: this.fb.nonNullable.control(true, [Validators.required]),
      userType: this.fb.control(null, [Validators.required]),
      patientId: this.fb.control(null, [Validators.required]),
      address: this.fb.control(null, [Validators.required]),
      address1: this.fb.control(null, [Validators.required]),
      city: this.fb.control(null, [Validators.required]),
      state: this.fb.control(null, [Validators.required]),
      postalCode: this.fb.control(null, [Validators.required]),
      birthdate: this.fb.control(null, [Validators.required]),
      countryCode: this.fb.control(null, [Validators.required]),
    });
  }

  @HostListener('submit')
  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
