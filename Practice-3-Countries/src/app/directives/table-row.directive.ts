import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appTableRow]',
})
export class TableRowDirective {
  @Input() countryName: string = '';

  constructor(private router: Router) {}
  @HostBinding('style.cursor') cursor: string = 'pointer';
  @HostListener('click', ['$event'])
  onClick() {
    this.router.navigate(['country', this.countryName]);
  }
}
