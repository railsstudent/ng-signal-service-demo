import { Injectable, computed, signal } from '@angular/core';

@Injectable()
export class SignalService {
  private counterSignal = signal(0);
  counter = this.counterSignal.asReadonly();

  arithmetic = computed(() => {
    const counter = this.counter();
    return {
      counter,
      square: Math.pow(counter, 2),
      cube: Math.pow(counter, 3),
      double: counter * 2,
      triple: counter * 3,
    }
  });

  update(delta = 1) {
    this.counterSignal.update((value) => 
      (value + delta >= 0) ? value + delta : value
    );
  }

  reset() {
    this.counterSignal.set(0);
  }
}
