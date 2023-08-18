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
      <ng-container *ngIf="arithmetic$ | async as arithmetic">
        <app-simple-text [description]="{ counter: arithmetic.counter, result: arithmetic.square } | description:'Square of '"></app-simple-text>
        <app-simple-text [description]="{ counter: arithmetic.counter, result: arithmetic.cube } | description:'Cube of '"></app-simple-text>
        <app-simple-text [description]="{ counter: arithmetic.counter, result: arithmetic.double } | description:'2 x '"></app-simple-text>
        <app-simple-text [description]="{ counter: arithmetic.counter, result: arithmetic.triple } | description:'3 x '"></app-simple-text>
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
