import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './../model';

@Pipe({
  name: "AnimalProperty",
  pure: false
})

export class AnimalPipe implements PipeTransform {
  transform(input: Animal[], filterProperty) {
    let output: Animal[] = [];

    if (filterProperty === "youngest"){
      input.sort(function(a, b) {
        return a.age - b.age;
      });
      output = input;
    } else if (filterProperty === "oldest"){
      input.sort(function(a, b) {
        return b.age - a.age;
      });
      output = input;
    } else if (filterProperty === "name"){
      input.sort(function(a, b){
        return a.name.toLowerCase().charCodeAt(0) - b.name.toLowerCase().charCodeAt(0);
      });
      output = input;
    }
    return output;
  }
}
