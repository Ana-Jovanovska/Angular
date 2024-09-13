import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  reviewContactUsForm = this.generateContactUsForm();

  maxMessageLenghContactForm = 500;

  contactUsSubmitted = signal(false);

  generateContactUsForm() {
    return new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl<number>(null, Validators.required),
      message: new FormControl('', [
        Validators.required,
        Validators.max(this.maxMessageLenghContactForm),
      ]),
    });
  }

  onContactUsForm() {
    this.reviewContactUsForm.markAllAsTouched();

    if (this.reviewContactUsForm.invalid) return;

    console.log(this.reviewContactUsForm.value);
  }
}
