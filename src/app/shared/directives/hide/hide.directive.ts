import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2,  ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class HideDirective {

  private hasView = false;
  constructor(  private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() 
  
  set myIf (condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }





}
