import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable()
export class SubjectService {
  private counterSub = new BehaviorSubject(0);
  counter$ = this.counterSub.asObservable();

  descriptions$ = this.counterSub.pipe(
    map((counter) =>  
      ({
        square: `Square of ${counter} = ${Math.pow(counter, 2)}`,
        cube: `Cube of ${counter} = ${Math.pow(counter, 3)}`,
        double: `2 x ${counter} = ${2 * counter}`,
        triple: `3 x ${counter} = ${3 * counter}`,
      })
    )
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
