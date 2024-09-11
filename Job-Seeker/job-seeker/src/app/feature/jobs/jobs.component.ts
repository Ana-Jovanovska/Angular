import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { AvaiableListComponent } from './components/avaiable-list/avaiable-list.component';
import { AppliedListComponent } from './components/applied-list/applied-list.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    AvaiableListComponent,
    AppliedListComponent,
  ],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
})
export class JobsComponent {}
