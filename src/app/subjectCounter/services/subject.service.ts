import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private counterSub = new BehaviorSubject(0);
  counter$ = this.counterSub.asObservable().pipe(shareReplay(1));

  private square$ = this.counter$.pipe(map((x) => Math.pow(x, 2)));
  private cube$ = this.counter$.pipe(map((x) => Math.pow(x, 3)));
  private double$ = this.counter$.pipe(map((x) => 2 * x));
  private triple$ = this.counter$.pipe(map((x) => 3 * x));

  operations$ = combineLatest([ this.square$, this.cube$, this.double$, this.triple$ ])
    .pipe(
      map(([square, cube, double, triple]) => ({
        square,
        cube,
        double,
        triple,
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
