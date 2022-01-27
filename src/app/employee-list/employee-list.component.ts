import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

employees:Employee[]=[];
public searchContent:any = '';

orderproperty:string='id';
val=false;
togleSort(order:string){

  if(this.val==true){
    this.val=false;
  }else{
    this.val=true;
    this.orderproperty=order;
  }

}



  constructor(private employeeService:EmployeeService,private router:Router) {
    
   }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data=>{
      console.log(data);
      this.employees=data;
      //this.dataSource.data=data as Employee[];
    })
  }

  updateEmployee(id:number){
    this.router.navigate(['update-employee',id])

  }
  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.getEmployees();
    })
  }
  viewEmployee(id:number){
    this.router.navigate(['employee-details',id])
  }

}
