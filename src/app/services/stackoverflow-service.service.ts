
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class StackoverflowServiceService {

  private tag: string;
  private URL: string;
  constructor(private _http: Http) { }

  getQuestions(questionTag: string){
    this.URL = `http://api.stackexchange.com/2.2/questions/unanswered?/
                            order=desc&sort=activity&tagged=${questionTag}&site=stackoverflow`;
    console.log(this.URL);
    return this._http.get(this.URL).pipe(map(res => res.json()));
  }


  getUsers(questionTag: string){
    this.URL = `http://api.stackexchange.com/2.2/tags/${questionTag}/top-answerers/all_time?site=stackoverflow`;
    console.log(this.URL);
    return this._http.get(this.URL).pipe(map(res => res.json()));
  }
}
