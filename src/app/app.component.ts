import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular1';
  // public messageClass={
  //   "test":true
  // }
  RandomNumber: number=-1;


  function1() {//example function
    return "click on the button to get random number";
  }
  generaterandomNumber() // the func generate number between 1 to 100
  {
    this.RandomNumber = Math.floor(Math.random() * 500)
  }
  function2() {
    return alert("hello world")
  }

}
