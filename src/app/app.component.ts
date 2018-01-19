import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zoo Animal Tracker';
  masterAnimalList: Animal[] = [
  {
    Species: "Northwest Black Tailed Deer",
    Name: "Tinkerbell",
    Age: 8,
    Diet: "Herbivore",
    Location: "Northern Trail",
    Caretakers: 2,
    Sex: "Female",
    Likes: "Delicate roots and leaves",
    Dislikes: "Loud Noises",
    }
  ]
}
export class Animal {
  Species: string;
  Name: string;
  Age: number;
  Diet: string;
  Location: string;
  Caretakers: number;
  Sex: string;
  Likes: string;
  Dislikes: string;
}
