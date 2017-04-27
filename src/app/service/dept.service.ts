import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Dept } from '../model/dept';

@Injectable()
export class DeptService {
  headers: Headers;
  options: RequestOptions;

  private DeptsUrl = 'https://sheltered-fortress-41894.herokuapp.com/depts';

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type':'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  getDepts(): Observable<Dept[]> {
    return this.http.get(this.DeptsUrl)
      .map((response: Response) => <Dept[]>response.json())
      .do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  getDept(id: number) {
    return this.http.get(this.DeptsUrl + "/" + id + '.json');
  }

  createDept(Dept: Dept): Observable<Dept> {
    return this.http.post(this.DeptsUrl, JSON.stringify(Dept),
      this.options).map((res: Response) => res.json());
  }

  deleteDept(id: number): Observable<Dept> {
    const url = '${this.DeptsUrl}/${id}';
    return this.http.delete(url, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateDept(Dept: Dept): Observable<Dept> {
    const url = '${this.DeptsUrl}/${Dept.id}';
    return this.http.put(url, JSON.stringify(Dept),
      this.options).map((res: Response) => res.json())
          .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured ', error);
    return Promise.reject(error.message || error);
  }

}