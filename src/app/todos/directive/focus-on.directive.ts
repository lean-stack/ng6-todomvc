import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[todoFocusOn]'
})
export class FocusOnDirective implements OnChanges {


  @Input()
  public todoFocusOn: boolean;

  constructor(private elt: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.todoFocusOn) {
      this.elt.nativeElement.focus();
    }
  }
}
