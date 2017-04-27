import { Component, OnInit } from '@angular/core';
import { PositionService } from '../shared/position.service'
import { Position } from '../shared/position';

import {Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-position-form',
  templateUrl: './position-form.component.html',
  styleUrls: ['./position-form.component.sass']
})
export class PositionFormComponent implements OnInit {

  name: string;
  position: Position = new Position();

  constructor(
    private positionService: PositionService,
    private router: Router,
    private route: ActivatedRoute
    ){}

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      this.name = id ? 'Edit Position' : 'Create Position';
      if (!id)
        return;
      this.positionService.getPosition(id)
        .subscribe(
          position => Position,
          response => {});
    });
  }

  save() {
    var result;
    if (this.position.id){
      result = this.positionService.updatePosition(this.position);
    } else {
      result = this.positionService.addPosition(this.position);
    }

    result.subscribe(data => this.router.navigate(['/']));
  }
}
