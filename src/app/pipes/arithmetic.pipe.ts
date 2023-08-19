import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arithmetic',
  standalone: true
})
export class ArithmeticPipe implements PipeTransform {

  transform(counter: number, description: string, result?: number): string {
    if (counter !== null && result !== null) {
      return `${description}${counter} = ${result}`;
    }

    return 'Unknown result';
  }
}
