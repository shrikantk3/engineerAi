import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private http:HttpClient ) { }

  taglist(){
     let httpOption = {
      headers: new HttpHeaders({
        // 'Content-Type':  'application/json',
        // 'Authorization': 'my-auth-token'
      })
     };
     
   return this.http.get(
      'https://hn.algolia.com/api/v1/search_by_date?tags=story',
      httpOption);
  }

}
