import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ArithmeticPipe } from '../pipes/arithmetic.pipe';
import { ArithmeticCardComponent } from '../arithmeticCard/arithmetic-card.component';

@Component({
  selector: 'app-arithmetic-cards',
  standalone: true,
  imports: [ArithmeticCardComponent, ArithmeticPipe],
  template: `
    <div>
      <app-arithmetic-card [description]="arithmetic.counter | arithmetic:'Square of ':arithmetic.square" 
        [borderColor]="borderColor" [borderWidth]="borderWidth"></app-arithmetic-card>
      <app-arithmetic-card [description]="arithmetic.counter | arithmetic:'Cube of ':arithmetic.cube" 
        [borderColor]="borderColor" [borderWidth]="borderWidth"></app-arithmetic-card>
      <app-arithmetic-card [description]="arithmetic.counter | arithmetic:'2 x ':arithmetic.double" 
        [borderColor]="borderColor" [borderWidth]="borderWidth"></app-arithmetic-card>
      <app-arithmetic-card [description]="arithmetic.counter | arithmetic:'3 x ':arithmetic.triple" 
        [borderColor]="borderColor" [borderWidth]="borderWidth"></app-arithmetic-card>
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
  arithmetic!: {
    counter: number,
    square: number,
    cube: number,
    double: number,
    triple: number,
  }

  @Input()
  borderColor = 'red';

  @Input()
  borderWidth = 1;
}
