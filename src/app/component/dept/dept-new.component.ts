import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Dept } from '../../model/dept';
import { DeptService } from '../../service/dept.service';


@Component({
  selector: 'dept-new',
  templateUrl: 'dept-new.component.html',
  styleUrls: ['dept.component.css']
})

export class DeptNewComponent {
  dept = new Dept;
  submitted: boolean = false; //check if the form is submitted

  constructor(private deptService: DeptService) {}

  createDept(dept: Dept) {
    this.submitted = true;
    this.deptService.createDept(dept)
      .subscribe(data => { return true },
        error => {
          console.log("Error creating dept");
          return Observable.throw(error);
        });
  }
}