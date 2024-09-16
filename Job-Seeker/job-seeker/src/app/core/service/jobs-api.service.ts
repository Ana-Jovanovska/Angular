import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Jobs } from '../../feature/jobs/model/jobs.model';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class JobsApiService {
  private http = inject(HttpClient);

  fetchJobsById(id: string) {
    return this.http.get<Jobs>(`${BASE_URL}/jobs/${id}`);
  }
}
