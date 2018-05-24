import { Directive, OnChanges, Input, ElementRef, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[todoClass]'
})
export class ClassDirective implements OnChanges {

  @Input()
  public todoClass: object;

  constructor(private elt: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const classname in this.todoClass) {
      if (this.todoClass[classname] === true) {
        this.elt.nativeElement.classList.add(classname);
      } else {
        this.elt.nativeElement.classList.remove(classname);
      }
    }
  }
}
