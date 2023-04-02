import { Directive, Input, OnChanges } from '@angular/core';
import { NgControl } from '@angular/forms'
import { SimpleChanges } from '@angular/core';

@Directive({
  selector: '[disableControl]' }) 

export class DisablingFormDirective implements OnChanges {
  @Input() disableControl = false; 
  
  ngOnChanges(changes: SimpleChanges) : void { 
    
    if (changes['disableControl']) { this.ngControl.control?.disable(); } 
    else { this.ngControl.control?.enable(); } } 
    
    constructor(private ngControl: NgControl) {} 


}
  
