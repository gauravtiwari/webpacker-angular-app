import { Component } from '@angular/core';
import './app.component.sass'
const styles = require('./style')

@Component({
  selector: 'hello-angular',
  template: `<h1>Hello <span class="${styles.heading}">{{name}}</span></h1>`
})

export class AppComponent {
  name = 'Angular!';
}
