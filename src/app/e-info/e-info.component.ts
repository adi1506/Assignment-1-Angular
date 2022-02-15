import { Component, OnInit} from '@angular/core';
//dependency injection of data service
//it is done to tell angular when the component is created, service instance is also created
//that is why me also need to include it in provider's array
import { DataService } from '../data.service';
import { Employee } from '../model/employee';




@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],
  
})
export class EInfoComponent implements OnInit{

  
  employees:Employee[]= [];
  employee = new Employee();
  isFresher = true;


  //static data 

  //initial code for retrieving information
  //we will create employe record in he service
  // infoReceived1: string[] = [];
  // infoReceived2: string[] = [];
  // infoReceived3: string[] = [];

  // getInfoFromService1(){
  //   this.infoReceived1 = this.dservice.getInfo1();
  // }
  // getInfoFromService2(){
  //   this.infoReceived2 = this.dservice.getInfo2();
  // }
  // getInfoFromService3(){
  //   this.infoReceived3 = this.dservice.getInfo3();
  // }


  //we are going to write the property of type data service to access its methods
  constructor(private dservice: DataService) { }



  ngOnInit(): void {

  }


  //1st attempt

  // updateInfo(frm: any){
  //   this.dservice.addInfo(frm.value.empID,frm.value.empName,frm.value.empMail,frm.value.empCountry);
  // }


  //2nd attempt

  // updateInfo(newEmployee: Employee){
    
  //   // this.employees.push(newEmployee);
  //   this.dservice.addInfo(newEmployee);
  //   this.employees = this.dservice.getInfo();
  //   newEmployee = null;
  //   // alert(JSON.stringify(newEmployee));
  //   alert(JSON.stringify(this.employees));
  // }

  updateInfo(frm: any){
    this.dservice.addInfo(this.employee);
    this.employees = this.dservice.getInfo();
    this.employee = new Employee();
    
  }
}
