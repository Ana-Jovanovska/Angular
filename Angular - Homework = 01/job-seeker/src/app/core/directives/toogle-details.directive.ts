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
  selector: '[appToogleDetails]',
  standalone: true,
})
export class ToogleDetailsDirective implements OnInit {
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  isInitiallyClick = input(false);
  addMoreDetailsEl: HTMLDivElement;
  isClick = false;

  ngOnInit(): void {
    console.log(`directives create`);
    this.addMoreDetailsEl =
      this.elementRef.nativeElement.querySelector('.more-details');

    this.isClick = this.isInitiallyClick();

    this.renderer.setStyle(
      this.addMoreDetailsEl,
      'display',
      this.isClick ? 'block' : 'none'
    );
  }

  @HostListener('click') onClick() {
    console.log(`element click`);
    this.isClick = !this.isClick;
    this.renderer.setStyle(
      this.addMoreDetailsEl,
      'display',
      this.isClick ? 'block' : 'none'
    );
  }
}
