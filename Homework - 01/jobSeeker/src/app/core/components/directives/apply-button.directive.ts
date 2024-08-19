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
  selector: '[appApplyButton]',
  standalone: true,
})
export class ApplyButtonDirective implements OnInit {
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  isInitailClick = input(false);
  jobsItemDetailsEl = HTMLDivElement;
  isClick = false;

  ngOnInit() {
    this.jobsItemDetailsEl = this.elementRef.nativeElement.querySelector('');

    this.isClick = this.isInitailClick();

    this.renderer.setStyle(
      this.jobsItemDetailsEl,
      'display',
      this.isClick ? 'block' : 'none'
    );
  }

  @HostListener('click') onClick() {
    this.isClick = !this.isClick;
    this.renderer.setStyle(
      this.jobsItemDetailsEl,
      'display',
      this.isClick ? 'block' : 'none'
    );
  }
}
