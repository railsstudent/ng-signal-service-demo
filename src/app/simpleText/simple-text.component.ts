import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-text',
  standalone: true,
  imports: [],
  template: `
    <p>Simple Text Component</p>
    <label>
      <span>Message: </span>
      <span>{{ description }}</span>
    </label>
  `,
  styles: [
    `
      :host {
        display: block;
        border: 1px solid red;
        padding: 0.5rem;
      }

      span {
        color: #666;
        font-style: italic;
      }
    `
  ],
})
export class SimpleTextComponent {
  @Input({required: true})
  description = '';
}
