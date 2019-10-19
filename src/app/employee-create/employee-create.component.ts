import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  @Input() employeeDetails = { name: '', email: '', phone: 0 }

  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() { }

  addEmployee() {
    if (window.confirm('Are you sure, you want to create new user?')){
        this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
          this.router.navigate(['/employees-list'])
        })
    }
    
  }

}