import { Injectable } from '@angular/core';
import { BehaviorSubject, map, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private counterSub = new BehaviorSubject(0);
  counter$ = this.counterSub.asObservable()
    .pipe(
      // shareReplay(1),
      map((x) => x),
      tap((x) => console.log('counter$ emits value', x))
    );

  square$ = this.counter$.pipe(
    map((x) => x * x),
    tap((x) => console.log('square', x))
  );
  cube$ = this.counter$.pipe(map((x) => x * x * x));
  double$ = this.counter$.pipe(map((x) => 2 * x));
  triple$ = this.counter$.pipe(map((x) => 3 * x));

  increment() {
    this.counterSub.next(this.counterSub.getValue() + 1);
  }

  decrement() {
    this.counterSub.next(this.counterSub.getValue() - 1);
  }
}
