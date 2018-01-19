import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './../model';

@Component({
  selector: 'edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent implements OnInit {
  @Input() selectedAnimal: Animal;
  @Output() doneEditingSender = new EventEmitter();

  constructor() { }

  doneEditing(){
    this.doneEditingSender.emit();
  }
  ngOnInit() {
  }
}
