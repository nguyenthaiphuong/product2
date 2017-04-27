import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Dept } from '../../model/dept';
import { DeptService } from '../../service/dept.service';

@Component({
  selector: 'dept-show',
  templateUrl: 'dept-show.component.html',
  styleUrls: ['dept.component.css']
})
export class DeptShowComponent implements OnInit {

  id: number;
  routeId: any;
  errorMessage: any;
  returnUrl: string;
  editBtnClicked: boolean = false;

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private deptService: DeptService
  ) {}

  @Input() dept: Dept;

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/depts';
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    )
    let deptRequest = this.route.params
        .flatMap((params: Params) =>
          this.deptService.getDept(+params['id']));
    deptRequest.subscribe(response => this.dept = response.json());
  }

  update(dept: Dept) {
    this.editBtnClicked = true;
    this.deptService.updateDept(dept)
      .subscribe(data => {
        return true
      }, error => {
        console.log('Error editing Post');
        return Observable.throw(error);
      })
  }

  delete(dept: Dept) {
    this.deptService.deleteDept(this.dept.id)
      .subscribe(data => {
        this.router.navigate([this.returnUrl]);
      },
        error => this.errorMessage = error);
  }

  onUpdateClicked() {
    this.router.navigate([this.returnUrl]);
    this.editBtnClicked = false;
    //window.location.reload();
  }

}