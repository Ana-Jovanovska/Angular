import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { AppliedListComponent } from './components/applied-list/applied-list.component';
import { AvaiableListComponent } from './components/avaiable-list/avaiable-list.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [HeaderComponent, AppliedListComponent, AvaiableListComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
})
export class JobsComponent {}
