import { Injectable } from '@angular/core';
import { BehaviorSubject, map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private counterSub = new BehaviorSubject(0);
  counter$ = this.counterSub.asObservable().pipe(shareReplay(1));

  arithmetic$ = this.counterSub.pipe(
    map((x) => ({
      counter: x,
      square: Math.pow(x, 2),
      cube: Math.pow(x, 3),
      double: x * 2,
      triple: x * 3,
    }))
  );

  update(delta = 1) {
    if (this.counterSub.getValue() + delta >= 0) {
      this.counterSub.next(this.counterSub.getValue() + delta);
    }
  }

  reset() {
    this.counterSub.next(0);
  }
}
