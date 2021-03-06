import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'minuteSeconds'
  })

  export class MinuteSecondsPipe implements PipeTransform {
    transform(value: number, args?: any): string {

      const minutes: number = Math.floor(value / 60);
      const seconds: number = (value - minutes * 60);
  
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      
  }
  }