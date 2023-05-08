import { Component } from '@angular/core';
import { LawyerService } from '../lawyer.service';
import { DatePipe } from '@angular/common';
import { PrimeIcons } from 'primeng/api';

interface Product {
  id?:string;
  code?:string;
  name?:string;
  description?:string;
  price?:number;
  quantity?:number;
  inventoryStatus?:string;
  category?:string;
  image?:string;
  rating?:number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor (private datePipe:DatePipe,private lawyer:LawyerService) {}
  selectedDate!: Date;
  displayModal!: boolean;
  date3:any
  events!: any[];
  
  selectedProducts!: Product[];
  

  public filterDate(date: Date): string {
    if (date) {
      return this.datePipe.transform(date, 'yyyy-MM-dd') ?? '';
    }
    return '';
  }
  ngOnInit() {
    this.lawyer.getCases().subscribe((data:any)=>{
      this.products =data
      console.log(data);
      this.events = [
        {
          status: 'Order',
          date: '15/10/2020 10:30',
          icon: PrimeIcons.SHOPPING_CART,
          color: '#9C27B0',
          image: 'game-controller.jpg',
        },
        {
          status: 'Order',
          date: '15/10/2020 14:00',
          icon: PrimeIcons.COG,
          color: '#673AB7',
        },
        {
          status: 'Order',
          date: '15/10/2020 16:15',
          icon: PrimeIcons.ENVELOPE,
          color: '#FF9800',
        },
        {
          status: 'Order',
          date: '16/10/2020 10:00',
          icon: PrimeIcons.CHECK,
          color: '#607D8B',
        },
      ];
      
    }) 
}
showModalDialog() {
  this.displayModal = true;
}
 
//   userByRoles:any[]=[]
//   files:any[]=[];
//   cols!: { field: string; header: string; }[];
  
//   ngOnInit() {
    
//     this.lawyer.getCases().subscribe((data:any)=>{
//       console.log(data);
//       this.files = data
      
//     })

//     this.cols = [
//         { field: 'name', header: 'Name' },
//         { field: 'size', header: 'Size' },
//         { field: 'type', header: 'Type' },
//     ];
// }
// logRowData(rowData: any) {
//   console.log(rowData);
// }

// editProduct(data:any){
// console.log(data,"on click case");


// }


products!: Product[];

}
