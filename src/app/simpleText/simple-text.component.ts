import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-text',
  standalone: true,
  imports: [],
  template: `
    <p>{{ description }}</p>
    <p>{{ value }}</p>
  `,
  styles: [
    `
      :host {
        display: block;
        border: 1px solid red;
      }
    `
  ],
})
export class SimpleTextComponent {
  @Input({required: true})
  description = '';

  @Input({required: true})
  value!: number;
}
