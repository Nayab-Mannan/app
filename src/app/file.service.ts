import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private _http: HttpClient) { }

  getData() {

    const url = "assets/data.json";
  return this._http.get(url, {responseType: "text"}) .pipe(map(result => result));
  // .map(result => result)
    
  }
}
