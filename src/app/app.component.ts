import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-1';

  //ngOnChanges
  //number variable cant be accessed outside
  private number: number = 12345;
  name1: string = "Aditya";

  //getter and setter for 'number'
  get counter(){
    return this.number;
  }

  set counter(value){
    this.number = value;
  }

  //increment and decrement function for 'number'
  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }
  

  //ngDoCheck
  user = {
    name: "Aditya"
  }

  updateName(){
    this.user.name = "Harsh";
  }

  //ngOnDestroy

  isVisible: boolean = true;

  switchVisibility(){
    this.isVisible = !this.isVisible;
  }
}
