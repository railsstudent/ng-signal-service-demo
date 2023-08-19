import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBorder]',
  standalone: true
})
export class BorderDirective {
  @Input()
  @HostBinding('style.borderColor')
  borderColor = 'red';

  @Input()
  @HostBinding('style.borderWidth.px')
  borderWidth = 1;

  @HostBinding('style.borderStyle')
  borderStyle = 'solid';
}
