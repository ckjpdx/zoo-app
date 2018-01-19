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
  addAnimal(newAnimal: Animal){
    this.animalList.push(newAnimal);
  }
}
