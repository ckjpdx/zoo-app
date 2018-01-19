import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './../model';

@Component({
  selector: 'list-animal',
  templateUrl: './list-animal.component.html',
  styleUrls: ['./list-animal.component.css']
})
export class ListAnimalComponent implements OnInit {
  @Input() animalList: Animal[];
  @Output() editEmitter = new EventEmitter();
  filterProperty: string = `name`;

  constructor() { }

  editAnimal(animal){
    this.editEmitter.emit(animal);
  }
  setPipeFilter(value){
    this.filterProperty = value;
  }
  ngOnInit() {
  }
}
