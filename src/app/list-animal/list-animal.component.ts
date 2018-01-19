import { Component, OnInit, Input, Output } from '@angular/core';
import { Animal } from './../model';

@Component({
  selector: 'list-animal',
  templateUrl: './list-animal.component.html',
  styleUrls: ['./list-animal.component.css']
})
export class ListAnimalComponent implements OnInit {
  @Input() animalList: Animal[];

  constructor() { }

  ngOnInit() {
  }

}
