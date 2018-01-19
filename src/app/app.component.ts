import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zoo Animal Tracker';
  animalList: Animal[] = [
  {
    name: "Tinkerbell",
    species: "Northwest Black Tailed Deer",
    age: 8,
    diet: "Herbivore",
    location: "Northern Trail",
    caretakers: 2,
    sex: "Female",
    likes: "Delicate roots and leaves",
    dislikes: "Loud Noises",
    }
  ]
  addAnimal(newAnimal: Animal){
    this.animalList.push(newAnimal);
  }
}
export class Animal {
  defaultProperty: string = 'This is an animal';
  constructor(name: string, species: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) { }
}
