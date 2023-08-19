import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description',
  standalone: true
})
export class DescriptionPipe implements PipeTransform {

  transform(counter: number, description: string, result?: number): string {
    if (counter !== null && result !== null) {
      return `${description}${counter} = ${result}`;
    }

    return 'Unknown result';
  }
}
