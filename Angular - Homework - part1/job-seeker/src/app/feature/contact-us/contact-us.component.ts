import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';

import { FooterComponent } from '../../core/components/footer/footer.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {}
