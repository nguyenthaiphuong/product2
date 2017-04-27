import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DeptService } from '../../service/dept.service';
import { Dept } from '../../model/dept';

@Component({
  selector: 'dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept.component.css']
})

export class DeptListComponent implements OnInit {
  public depts: Dept[]= [];

  constructor(
    private deptService: DeptService,
    private router: Router
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getdepts());
  }

  getdepts() {
    this.deptService.getDepts().subscribe(
       depts => this.depts = depts ,
       error => alert(" Error is : " + error),
       ()=> console.log(this.depts) );
  }

  goToShow(dept: Dept): void {
    let deptLink = ['/depts', dept.id];
    this.router.navigate(deptLink);
  }

}
