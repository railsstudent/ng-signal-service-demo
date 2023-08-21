import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable()
export class SubjectService {
  private counterSub = new BehaviorSubject(0);
  counter$ = this.counterSub.asObservable();

  descriptions$ = this.counterSub.pipe(
    map((counter) =>  
      ({
        square: `Math.pow(${counter}, 2) = ${Math.pow(counter, 2)}`,
        cube: `Math.pow(${counter}, 3) = ${Math.pow(counter, 3)}`,
        double: `2 x ${counter} = ${2 * counter}`,
        triple: `3 x ${counter} = ${3 * counter}`,
      })
    )
  );

  update(delta = 1) {
    const nextValue = this.counterSub.getValue() + delta;
    if (nextValue >= 0) {
      this.counterSub.next(nextValue);
    }
  }

  reset() {
    this.counterSub.next(0);
  }
}
