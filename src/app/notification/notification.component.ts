import { Component,OnInit } from '@angular/core';
import { LawyerService } from '../lawyer.service';



interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private lawyer:LawyerService) {
   
  }

  cities:any[]=[];
  ngOnInit() {
    this.lawyer.getCases().subscribe((data:any)=>{
      this.cities =data;
      console.log(data);
      
    })
    
  }



  

 
  

}
