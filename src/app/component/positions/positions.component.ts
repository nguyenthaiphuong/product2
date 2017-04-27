import { Component, OnInit } from '@angular/core';
import { PositionService} from "./shared/position.service"
import { Router } from '@angular/router';
// Import model
import { Position } from "./shared/position";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.sass']
})

export class PositionsComponent implements OnInit {
  positions: Position[];

  title = "hello";

  constructor( private positionService: PositionService,
    private router: Router) { }

  ngOnInit() {
     this.positionService.getPositions()
      .subscribe(data => this.positions = data,data => console.log(data));
     console.log(this.positions);
  }

  getPositions() {
   this.positionService.getPositions()
     .subscribe(positions => this.positions = positions);
  }

  deletePosition(positions) {
    if (confirm("are you delete ?" + positions.name + "?")) {
      var index = this.positions.indexOf(positions);
      this.positions.splice(index, 1);
      this.positionService.deletePosition(positions.id)
        .subscribe(null);
    }
  }
}
