import { Injectable, computed, signal } from '@angular/core';

@Injectable()
export class SignalService {
  private counterSignal = signal(0);
  counter = this.counterSignal.asReadonly();

  descriptions = computed(() => {
    const counter = this.counter();
    return {
      square: `Math.pow(${counter}, 2) = ${Math.pow(counter, 2)}`,
      cube: `Math.pow(${counter}, 3) = ${Math.pow(counter, 3)}`,
      double: `2 x ${counter} = ${counter * 2}`,
      triple: `3 x ${counter} = ${counter * 3}`,
    }
  });

  update(delta = 1) {
    this.counterSignal.update((value) => {
      const nextValue = value + delta;
      return (nextValue >= 0) ? nextValue : value;
    });
  }

  reset() {
    this.counterSignal.set(0);
  }
}
