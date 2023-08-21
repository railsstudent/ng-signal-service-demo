import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ArithmeticCardComponent } from './arithmeticCard/arithmetic-card.component';

@Component({
  selector: 'app-arithmetic-cards',
  standalone: true,
  imports: [ArithmeticCardComponent],
  template: `
    <div>
      <app-arithmetic-card [description]="descriptions.square" [borderColor]="borderColor"></app-arithmetic-card>
      <app-arithmetic-card [description]="descriptions.cube" [borderColor]="borderColor"></app-arithmetic-card>
      <app-arithmetic-card [description]="descriptions.double" [borderColor]="borderColor"></app-arithmetic-card>
      <app-arithmetic-card [description]="descriptions.triple" [borderColor]="borderColor"></app-arithmetic-card>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    div {
      display: flex;
      flex-wrap: wrap;

      > * {
        margin-right: 0.5rem;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArithmeticCardsComponent {
  @Input({ required: true }) 
  descriptions!: {
    square: string,
    cube: string,
    double: string,
    triple: string,
  }

  @Input()
  borderColor = 'red';
}
