import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appToggleJobs]',
  standalone: true,
})
export class ToggleJobsDirective implements OnInit {
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  isInitiallyClick = input(false);
  addJobsDetails: HTMLDivElement;
  isClick = false;

  ngOnInit(): void {
    console.log('directive create');
    this.addJobsDetails =
      this.elementRef.nativeElement.querySelector('.buttonApply');

    this.isClick = this.isInitiallyClick();

    this.renderer.setStyle(
      this.addJobsDetails,
      'display',
      this.isClick ? 'block' : 'none'
    );
  }

  @HostListener('click') onClick() {
    console.log('element clicked');
    this.isClick = !this.isClick;
    this.renderer.setStyle(
      this.addJobsDetails,
      'display',
      this.isClick ? 'block' : 'none'
    );
  }
}
