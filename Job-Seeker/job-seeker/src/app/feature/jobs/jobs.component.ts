import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { AvaiableItemComponent } from './components/avaiable-item/avaiable-item.component';
import { AppliedItemComponent } from './components/applied-item/applied-item.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    AvaiableItemComponent,
    AppliedItemComponent,
  ],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
})
export class JobsComponent {}
