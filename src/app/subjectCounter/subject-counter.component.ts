import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DescriptionPipe } from '../pipes/description.pipe';
import { SimpleTextComponent } from '../simpleText/simple-text.component';
import { SubjectService } from './services/subject.service';

@Component({
  selector: 'app-subject-counter',
  standalone: true,
  imports: [SimpleTextComponent, AsyncPipe, NgIf, DescriptionPipe],
  template: `
    <h3>Simple counter that uses BehaviorSubject</h3>
    <div>
      <button (click)="decrement()">-</button>
      <span>{{ counter$ | async }}</span>
      <button (click)="increment()">+</button>
      <button (click)="reset()">Reset</button>
    </div>
    <div>
      <ng-container *ngIf="{ counter: counter$ | async, operations: operations$ | async  } as calculations">
        <app-simple-text [description]="{ counter: calculations.counter, result: calculations.operations?.square } | description:'Square of '"></app-simple-text>
        <app-simple-text [description]="{ counter: calculations.counter, result: calculations.operations?.cube } | description:'Cube of '"></app-simple-text>
        <app-simple-text [description]="{ counter: calculations.counter, result: calculations.operations?.double } | description:'2 x '"></app-simple-text>
        <app-simple-text [description]="{ counter: calculations.counter, result: calculations.operations?.triple } | description:'3 x '"></app-simple-text>
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
  operations$ = this.service.operations$;

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
