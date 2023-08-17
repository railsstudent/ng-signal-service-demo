import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description',
  standalone: true
})
export class DescriptionPipe implements PipeTransform {

  transform(input: { counter: number | null, result?: number }, description: string): string {
    if (input?.counter !== null && input?.result !== null) {
      return `${description}${input.counter} = ${input.result}`;
    }

    return 'Unknown result';
  }
}
