import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ArithmeticCardsComponent } from '../arithmeticCards/arithmetic-cards.component';
import { SignalService } from './services/signal.service';

@Component({
  selector: 'app-signal-counter',
  standalone: true,
  imports: [ArithmeticCardsComponent],
  template: `
    <h3>Simple counter that uses Signal</h3>
    <div>
      <button (click)="decrement()">-</button>
      <span>{{ counter() }}</span>
      <button (click)="increment()">+</button>
      <button (click)="reset()">Reset</button>
    </div>
    <app-arithmetic-cards [descriptions]="descriptions()"></app-arithmetic-cards>
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
      font-size: 1.5rem;
    }

    button:last-of-type {
      margin-left: 0.5rem;
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

  increment() {
    this.service.update();
  }

  decrement() {
    this.service.update(-1);
  }

  reset() {
    this.service.reset();
  }
}
