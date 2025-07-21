import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'operationsby10',
})
export class CustomPipePipe implements PipeTransform {
  transform(value: number, operation: string, format?: string): string | null {
    if (format !== 'INR' && format !== 'USD') {
      return value.toString();
    }
    const allowedoperations = ['divide', 'multiply', 'add', 'subtract'];
    if (allowedoperations.includes(operation)) {
      let val = '';
      if (operation === 'multiply') {
        val = (value * 10).toString();
      } else if (operation === 'divide') {
        val = (value / 10).toString();
      } else if (operation === 'add') {
        val = (value + 10).toString();
      } else {
        val = (value - 10).toString();
      }
      if (format === 'USD') {
        val = '$' + val;
      } else if (format === 'INR') {
        val = '₹' + val;
      }
      return val;
    } else {
      return value.toString();
    }
  }
}
