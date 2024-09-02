import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { ContacUsFormComponent } from './components/contac-us-form/contac-us-form.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [HeaderComponent, ContacUsFormComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {}
