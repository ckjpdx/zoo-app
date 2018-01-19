import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { ListAnimalComponent } from './list-animal/list-animal.component';


@NgModule({
  declarations: [
    AppComponent,
    AddAnimalComponent,
    ListAnimalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
