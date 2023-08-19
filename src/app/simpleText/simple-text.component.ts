import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BorderDirective } from '../directives/border.directive';

@Component({
  selector: 'app-simple-text',
  standalone: true,
  hostDirectives: [
    {
      directive: BorderDirective,
      inputs: ['borderColor', 'borderWidth']
    } 
  ],
  template: `
    <p>Simple Text Component</p>
    <label>
      <span>{{ description }}</span>
    </label>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 0.5rem;
      }

      span {
        color: #666;
        font-style: italic;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleTextComponent {
  @Input({required: true})
  description = '';
}
