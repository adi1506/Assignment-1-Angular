//Input is used to pass the value from parent component to the child component
//SimpleChange and SimpleChanges store the prvious and current value of the property
import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  private myNumber: number;
  @Input() myNewName: any;
  constructor() { }

  get myNewNumber(){
    return this.myNumber;
  }

  //instead of directly accesing the property 'myNewNumber', we are using getters and setters
  @Input() 
  set myNewNumber(number : number){
    this.myNumber = number;
  }

  //ngOnChanges executes before ngOnIt()
  //whenever any changes occur from the parent component, ngOnChanges gets triggered
  //it also triggers during component init. before ngOnIt
  //only those variables are recieved in ngOnChanges which are changed in btween to boost performance
  //doesnt detect changes that are made by pass by reference
  ngOnChanges(changes: SimpleChanges){
    console.log("Inside ngOnChanges");
    const newNumberChange: SimpleChange = changes.myNewNumber;
    // debugger;
    console.log("Previous Value - (ng on changes)",newNumberChange.previousValue);
    console.log("Current Value - (ng on changes)",newNumberChange.currentValue);
    this.myNewNumber = newNumberChange.currentValue;
    console.log("-------------");
    
      
  }

  //executed after ngOnChanges
  //ngOnIt is executed only once during component initialisation
  //generally used to initialise the variables
  ngOnInit(): void {
    console.log("Inside ngOnInit");
    console.log("First Initialisation triggered ngOnIt");
    console.log("-------------");
    
  }

  //executed after ngOnChanges
  //detects changes that are made using pass by refernce
  ngDoCheck(): void {
    // debugger;
    console.log("Inside ngDoCheck");
    console.log(this.myNewName.name);
    console.log("-------------");
      
  }

  //executed after ngDoCheck
  //executed only once after ngDoCheck is triggered
  //used when we need to do some calculation or execute a function only once during the lifetime of the component
  ngAfterContentInit(){
    console.log("Inside ngAfterContentInit");
    console.log("-------------");
    
  }

  //executed after ngAfterContentInit
  //can be triggered multiple times, whenever ngDoCheck gets completed
  //it can be used to perform some acions on the variables that are changed under ngDoCheck lifecycle
  ngAfterContentChecked(){
    console.log("Inside ngAfterContentChecked");
    console.log("-------------");
  }


  //executed after ngAfterContentChecked
  //is executed only once
  //if there are any grandchild components, then all the lifecycle hooks of grandchild component will be executed first and then the ngAfterViewInit of child component will be executed
  ngAfterViewInit(){
    console.log("Inside ngAfterViewInit");
    console.log("-------------");
  }


  //executed after ngAfterViewInit
  //can be executed multiple times
  ngAfterViewChecked(){
    console.log("Inside ngAfterViewChecked");
    console.log("-------------");
  }

  ngOnDestroy(){
    console.log("Component has been destroyed");
    
  }

}
