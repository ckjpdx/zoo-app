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
    species: "Northwest Black Tailed Deer",
    name: "Tinkerbell",
    age: 8,
    diet: "Herbivore",
    location: "Northern Trail",
    caretakers: 2,
    sex: "Female",
    likes: "Delicate roots and leaves",
    dislikes: "Loud Noises",
    }
  ]
}
export class Animal {
  constructor(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) { }

}
