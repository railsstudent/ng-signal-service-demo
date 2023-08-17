import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SimpleTextComponent } from '../simpleText/simple-text.component';
import { SubjectService } from './services/subject.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { DescriptionPipe } from '../pipes/description.pipe';

@Component({
  selector: 'app-subject-counter',
  standalone: true,
  imports: [SimpleTextComponent, AsyncPipe, NgIf, DescriptionPipe],
  template: `
    <div>
      <p>{{ counter$ | async }}</p>
      <button (click)="decrement()">-</button>
      <button (click)="increment()">+</button>
    </div>
    <div>
      <ng-container *ngIf="square$ | async as square">
        <app-simple-text [description]="square | description:'Square of '" [value]="square"></app-simple-text>
      </ng-container>
      <ng-container *ngIf="cube$ | async as cube">
        <app-simple-text [description]="cube | description:'Cube of '" [value]="cube"></app-simple-text>
      </ng-container>
      <ng-container *ngIf="double$ | async as double">
        <app-simple-text [description]="double | description:'2 x '" [value]="double"></app-simple-text>
      </ng-container>
      <ng-container *ngIf="triple$ | async as triple">
        <app-simple-text [description]="triple | description:'3 x '" [value]="triple"></app-simple-text>
      </ng-container>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    button:first-of-type {
      margin-right: 1rem;
    }

    button {
      border-radius: 25%;
      width: 50px;
      height: 50px;
      font-size: 1.5rem;
    }

    div:nth-of-type(2) {
      display: flex;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubjectCounterComponent {
  service = inject(SubjectService);

  counter$ = this.service.counter$;
  square$ = this.service.square$;
  cube$ = this.service.cube$;
  double$ = this.service.double$;
  triple$ = this.service.triple$;

  increment() {
    this.service.increment();
  }

  decrement() {
    this.service.decrement();
  }
}
