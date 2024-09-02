import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../../core/components/header/header.component';
import { JobsService } from '../../../../core/service/jobs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-jobs',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './edit-jobs.component.html',
  styleUrl: './edit-jobs.component.scss',
})
export class EditJobsComponent implements OnInit {
  private jobsService = inject(JobsService);
  private route = inject(ActivatedRoute);

  selectedJobs = this.jobsService.selectedJobs;

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
  }
}
