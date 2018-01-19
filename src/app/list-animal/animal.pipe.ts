import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './../model';

@Pipe({
  name: "AnimalProperty",
  pure: false
})

export class AnimalPipe implements PipeTransform {
  transform(input: Animal[], filterProperty) {
    let output: Animal[] = [];

    if (filterProperty === "age"){
      input.sort(function(a, b) {
        return a.age - b.age;
      });
      output = input;
    }
    // else if (filterProperty === "expensiveness"){
    //   input.sort(function(a, b) {
    //     return b.price - a.price;
    //   });
    // }
    return output;
  }
}
