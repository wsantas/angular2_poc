import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Chore } from './chore/chore.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, Chore ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
