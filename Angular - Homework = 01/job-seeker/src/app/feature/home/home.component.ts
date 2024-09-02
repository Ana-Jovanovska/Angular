import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';
import { FooterComponent } from '../../core/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private router = inject(Router);

  clickToJobsPage() {
    this.router.navigate(['jobs']);
  }
}
