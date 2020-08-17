import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroHelloComponent } from './components/hero-hello/hero-hello.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroHelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
