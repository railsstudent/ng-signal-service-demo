import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ArithmeticCardsComponent } from '../arithmeticCards/arithmetic-cards.component';
import { SignalService } from './services/signal.service';

@Component({
  selector: 'app-signal-counter',
  standalone: true,
  imports: [ArithmeticCardsComponent],
  template: `
    <h3>Simple counter that uses Signal</h3>
    <div>
      <button (click)="decrement(-3)">-3</button>
      <button (click)="decrement(-1)">-1</button>
      <span>{{ counter() }}</span>
      <button (click)="increment(1)">+1</button>
      <button (click)="increment(3)">+3</button>
      <button (click)="reset()">Reset</button>
    </div>
    <app-arithmetic-cards [descriptions]="descriptions()" borderColor="blue"></app-arithmetic-cards>
  `,
  styles: [`
    :host {
      display: block;
      padding: 0.5rem;
    }

    button {
      border-radius: 25%;
      width: 40px;
      height: 40px;
      font-size: 1rem;
      margin-right: 0.25rem;
    }

    button:last-of-type {
      border-radius: 25%;
      width: unset;
      height: 40px;
      font-size: 1rem;
    }

    span {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    app-arithmetic-cards {
      margin-top: 1rem;
    }
  `],
  providers: [SignalService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalCounterComponent {
  service = inject(SignalService);
  counter = this.service.counter;
  descriptions = this.service.descriptions;

  increment(delta: number) {
    this.service.update(delta);
  }

  decrement(delta: number) {
    this.service.update(delta);
  } 

  reset() {
    this.service.reset();
  }
}
