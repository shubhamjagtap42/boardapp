import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LawyerService {

  constructor(private http:HttpClient) { }
  url='http://192.168.2.170:3000/casedetails'
  url2='http://localhost:3000/caseDetails'
  deleteUrl='http://192.168.2.170:3000/casedetails/:id'
  
  getCases(){
      return this.http.get(this.url)
    }

    delete(ids:any){
      return this.http.delete(this.url,ids)
    }

}
