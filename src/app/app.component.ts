import { Component } from '@angular/core';
import { Animal } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Zoo Animal Tracker';
  animalList: Animal[] = [
    new Animal(`Tinkerbell`, `Deer`, 5, `Greens`, `Woods`, 2, `male`, `Clouds`, `Gunshots`)
  ]
  selectedAnimal = null;
  // totalCaretakers = this.getTotalCareTakers(this.animalList)
  //
  // getTotalCareTakers(animalList){
  //   let counter = 0;
  //     animalList.forEach(function(animal){
  //     counter += animal.caretakers;
  //   });
  //   return counter;
  // }

  selectAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  addAnimal(newAnimal: Animal){
    this.animalList.push(newAnimal);
  }

  editAnimal(animal: Animal){
    this.selectedAnimal = animal;
    console.log(this.selectedAnimal);
  }
}
