import { Pipe, PipeTransform } from '@angular/core';
import { Jobs } from '../../feature/models/jobs.model';

@Pipe({
  name: 'filterPipe',
  standalone: true,
})
export class FilterPipePipe implements PipeTransform {
  transform(value: Jobs[], serchValue: string): Jobs[] {
    if (!serchValue) return value;

    const filterPipeJobs = value.filter((job) =>
      job.position.toLowerCase().includes(serchValue.toLowerCase().trim())
    );

    return filterPipeJobs;
  }
}
