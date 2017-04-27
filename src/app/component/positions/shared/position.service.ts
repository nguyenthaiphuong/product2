import { Injectable } from '@angular/core';
import  { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Position } from "./position";
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class PositionService {
  headers: Headers;
  options: RequestOptions;

  private url: string = 'http://localhost:3000/v1/positions';

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type':'application/json'});
    this.options = new RequestOptions({headers: this.headers});
   }

  getPositions(){
    return  this.http.get(this.url)
      .map(res => res.json())
      .do(data => console.log('All: ' +  JSON.stringify(data)))

  }

  // getPositions(): Observable<Position[]> {
  //   return this.http.get(this.url)
  //     .map((response: Response) => <Position[]>response.json())
  // }

  // getPositions(){
  //   return this.http.get(this.url)
  //     .map((response: Response) => <Position[]>response.json());
  // }

  getPosition(id){
    return  this.http.get(this.url + '/' + id)
      .map(res => res.json());
  }

  addPosition(position){
    return this.http.post(this.url, {'position': position})
      .map(res => res.json());
  }

  updatePosition(position){
    return this.http.put(this.url + '/' + position.id, {'position': position})
      .map(res => res.json());
  }

  deletePosition(id){
    return this.http.delete(this.url + '/' + id)
      .map(res => res.json());
  }
}
