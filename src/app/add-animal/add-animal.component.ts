import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './../model';

@Component({
  selector: 'add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {
  // @Input() animalList: Animal[];
  @Output() animalEmitter = new EventEmitter();

  constructor() { }

  addAnimal(name, species, age, diet, location, caretakers, sex, likes, dislikes){
    let newAnimal: Animal = new Animal(name, species, age, diet, location, caretakers, sex, likes, dislikes)
    this.animalEmitter.emit(newAnimal);
  }

  ngOnInit() {
  }

}
