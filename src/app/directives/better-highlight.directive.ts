import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  
  @Input() defaultColor: string = 'black';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.color') backgroundColor: string = '';
  
  constructor(private ref: ElementRef,private renderer: Renderer2) { }
  
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
  
  @HostListener('mouseenter') mouseover(event: Event) {
    //this.renderer.setStyle(this.ref.nativeElement, 'color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    //this.renderer.setStyle(this.ref.nativeElement, 'color', 'black');
    this.backgroundColor = this.defaultColor;
  }

}
