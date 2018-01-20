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
  totalCaretakers: number = 0; // caretaker method - can this be refactored?

  getTotalCaretakers(){ // caretaker method - can this be refactored?
    let counter = 0;
    this.animalList.forEach(function(animal){
      counter += animal.caretakers;
    });
    this.totalCaretakers = counter;
    console.log(this.totalCaretakers);
  }

  addAnimal(newAnimal: Animal){
    this.animalList.push(newAnimal);
    this.getTotalCaretakers(); // caretaker method - can this be refactored?
  }

  editAnimal(animal: Animal){
    this.selectedAnimal = animal;
    // console.log(this.selectedAnimal);
  }
}
