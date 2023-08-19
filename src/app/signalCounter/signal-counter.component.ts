import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ArithmeticPipe } from '../pipes/arithmetic.pipe';
import { SimpleTextComponent } from '../simpleText/simple-text.component';
import { SignalService } from './services/signal.service';

@Component({
  selector: 'app-signal-counter',
  standalone: true,
  imports: [SimpleTextComponent, ArithmeticPipe],
  template: `
    <h3>Simple counter that uses Signal</h3>
    <div>
      <button (click)="decrement()">-</button>
      <span>{{ counter() }}</span>
      <button (click)="increment()">+</button>
      <button (click)="reset()">Reset</button>
    </div>
    <div>
      <app-simple-text [description]="arithmetic().counter | arithmetic:'Square of ':arithmetic().square" borderColor="blue" [borderWidth]="2"></app-simple-text>
      <app-simple-text [description]="arithmetic().counter | arithmetic:'Cube of ':arithmetic().cube" [borderColor]="'blue'" [borderWidth]="2"></app-simple-text>
      <app-simple-text [description]="arithmetic().counter | arithmetic:'2 x ':arithmetic().double" [borderColor]="'blue'" [borderWidth]="2"></app-simple-text>
      <app-simple-text [description]="arithmetic().counter | arithmetic:'3 x ':arithmetic().triple" [borderColor]="'blue'" [borderWidth]="2"></app-simple-text>
    </div>
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

    button:nth-of-type(2) {
      margin-right: 1rem;
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

    div:nth-of-type(2) {
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;

      > * {
        margin-right: 0.5rem;
      }
    }
  `],
  providers: [SignalService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalCounterComponent {
  service = inject(SignalService);
  counter = this.service.counter;
  arithmetic = this.service.arithmetic;

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
