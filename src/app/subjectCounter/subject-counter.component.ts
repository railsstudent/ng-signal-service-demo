import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ArithmeticCardsComponent } from '../arithmetic-cards/arithmetic-cards.component';
import { SubjectService } from './services/subject.service';

@Component({
  selector: 'app-subject-counter',
  standalone: true,
  imports: [ArithmeticCardsComponent, NgIf, AsyncPipe],
  template: `
    <h3>Simple counter that uses BehaviorSubject</h3>
    <div>
      <button (click)="decrement()">-</button>
      <span>{{ counter$ | async }}</span>
      <button (click)="increment()">+</button>
      <button (click)="reset()">Reset</button>
    </div>
    <ng-container *ngIf="arithmetic$ | async as arithmetic">
      <app-arithmetic-cards [arithmetic]="arithmetic"></app-arithmetic-cards>
    </ng-container>
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

    app-arithmetic-cards {
      margin-top: 1rem;
    }
  `],
  providers: [SubjectService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubjectCounterComponent {
  service = inject(SubjectService);
  counter$ = this.service.counter$;
  arithmetic$ = this.service.arithmetic$;

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
