import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CssClassDirective } from './directives/css-class.directive';
import { RepeaterDirective } from './directives/repeater.directive';

@NgModule({
  declarations: [AppComponent, CssClassDirective, RepeaterDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
