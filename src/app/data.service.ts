import { Injectable } from '@angular/core';
import { Employee } from './model/employee';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  employees:Employee[] = [];


  //static data
  //actual employ records
  // info1: string[] = ["Aditya","1111","ac@gmail.com"];
  // info2: string[] = ["Harsh","2222","hr@gmail.com"];
  // info3: string[] = ["Abhisar","3333","ap@gmail.com"];

  //methods to retrieve these records
  //this info will be retirved in e-info component using dependency injection

  // getInfo1():string[]{
  //   return this.info1;
  // }

  // getInfo2():string[]{
  //   return this.info2;
  // }

  // getInfo3():string[]{
  //   return this.info3;
  // }

  getInfo():Employee[]{
    return this.employees;
  }

  //adds the location in all 3 arrays
  // addInfo(id: number,name: string,mail: string,country: string){
  //   // this.info1.push(info);
  //   // this.info2.push(info);
  //   // this.info3.push(info);

  //   // return this.info1;
  //   this.employees.push({
  //     empID: id,
  //     empName: name,
  //     empMail: mail,
  //     empCountry: country 
  //   });

  // }

  addInfo(emp:Employee){
    // this.info1.push(info);
    // this.info2.push(info);
    // this.info3.push(info);

    // return this.info1;
    this.employees.push(emp);

  }

  



  constructor() { }
}
