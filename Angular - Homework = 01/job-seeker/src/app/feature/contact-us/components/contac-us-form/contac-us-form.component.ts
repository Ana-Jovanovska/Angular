import { Component, effect, input, output, signal } from '@angular/core';
import { ContactUs } from '../../../models/jobs.model';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contac-us-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contac-us-form.component.html',
  styleUrl: './contac-us-form.component.scss',
})
export class ContacUsFormComponent {
  reviwData = input<ContactUs>();
  contactUsForm = this.generateContactForm();
  maxMessageLenght = 500;
  submitedOutput = output<ReactiveFormsModule>();
  contactUsSubmited = signal(false);

  constructor() {
    effect(() => {
      if (this.reviwData()) this.populateContactForm(this.reviwData());
    });
  }

  generateContactForm() {
    return new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      phoneNumber: new FormControl<number>(null, Validators.required),
      message: new FormControl('', Validators.maxLength(this.maxMessageLenght)),
    });
  }

  populateContactForm(contact: ContactUs) {
    this.contactUsForm.setValue({
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      phoneNumber: contact.phoneNumber,
      message: contact.message,
    });
  }

  onContactUsFormSubmit() {
    this.contactUsSubmited.set(true);
    this.contactUsForm.markAllAsTouched();

    if (this.contactUsForm.invalid) return;
    this.submitedOutput.emit(this.contactUsForm.value as ReactiveFormsModule);
  }
}
