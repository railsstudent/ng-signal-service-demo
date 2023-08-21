import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ArithmeticCardsComponent } from '../arithmeticCards/arithmetic-cards.component';
import { SubjectService } from './services/subject.service';

@Component({
  selector: 'app-subject-counter',
  standalone: true,
  imports: [ArithmeticCardsComponent, NgIf, AsyncPipe],
  template: `
    <h3>Simple counter that uses BehaviorSubject</h3>
    <div>
      <button (click)="decrement(-3)">-3</button>
      <button (click)="decrement(-1)">-1</button>
      <span>{{ counter$ | async }}</span>
      <button (click)="increment(1)">+1</button>
      <button (click)="increment(3)">+3</button>
      <button (click)="reset()">Reset</button>
    </div>
    <ng-container *ngIf="descriptions$ | async as descriptions">
      <app-arithmetic-cards [descriptions]="descriptions"></app-arithmetic-cards>
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
  providers: [SubjectService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubjectCounterComponent {
  service = inject(SubjectService);
  counter$ = this.service.counter$;
  descriptions$ = this.service.descriptions$;

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
