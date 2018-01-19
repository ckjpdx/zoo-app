import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { ListAnimalComponent } from './list-animal/list-animal.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';


@NgModule({
  declarations: [
    AppComponent,
    AddAnimalComponent,
    ListAnimalComponent,
    EditAnimalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
