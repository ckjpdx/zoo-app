import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './../app.component';

@Component({
  selector: 'add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {
  // @Input() animalList: Animal[];
  @Output() animalEmitter = new EventEmitter();

  constructor() { }

  addAnimal(name: string, species: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string){
    console.log(name);
    let newAnimal: Animal = new Animal(name, species, age, diet, location, caretakers, sex, likes, dislikes)
    console.log(newAnimal);
    this.animalEmitter.emit(newAnimal);
  }

  ngOnInit() {
  }

}
