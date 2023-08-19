import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ArithmeticPipe } from '../pipes/arithmetic.pipe';
import { SimpleTextComponent } from '../simpleText/simple-text.component';
import { SubjectService } from './services/subject.service';

@Component({
  selector: 'app-subject-counter',
  standalone: true,
  imports: [SimpleTextComponent, AsyncPipe, NgIf, ArithmeticPipe],
  template: `
    <h3>Simple counter that uses BehaviorSubject</h3>
    <div>
      <button (click)="decrement()">-</button>
      <span>{{ counter$ | async }}</span>
      <button (click)="increment()">+</button>
      <button (click)="reset()">Reset</button>
    </div>
    <div>
      <ng-container *ngIf="arithmetic$ | async as arithmetic">
        <app-simple-text [description]="arithmetic.counter | arithmetic:'Square of ':arithmetic.square"></app-simple-text>
        <app-simple-text [description]="arithmetic.counter | arithmetic:'Cube of ':arithmetic.cube"></app-simple-text>
        <app-simple-text [description]="arithmetic.counter | arithmetic:'2 x ':arithmetic.double"></app-simple-text>
        <app-simple-text [description]="arithmetic.counter | arithmetic:'3 x ':arithmetic.triple"></app-simple-text>
      </ng-container>
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
