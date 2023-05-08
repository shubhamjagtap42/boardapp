import { Component, OnInit } from '@angular/core';
import { LawyerService } from '../lawyer.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { PrimeIcons } from 'primeng/api';
import { interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Product {
  [x: string]: any;
  id?: string;
  act?: string;
  petitioner?: string;
  respondent?: string;
  courtName?: number;
  status?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  productDialog!: boolean;

  products!: Product[];

  product!: Product;

  selectedProducts!: Product[];

  submitted!: boolean;

  displayModal!: boolean;

  date3: any;

  selectedDate!: Date;

  currentDate: string;
  
  
  getDate: any;

  constructor(
    private lawyer: LawyerService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private datePipe: DatePipe,
    private http: HttpClient
  ) {
    const today = new Date();
    this.currentDate = this.datePipe.transform(
      today,
      'EEEE,d MMMM , y'
    ) as string;
  }

  ngOnInit() {
    // this.display();
    // this.lawyer.getCases().subscribe((data:any)=>{
    //   this.products =data.reverse();
    // console.log(data);

    this.refreshData(); // Call the method initially to load data

    interval(150000).subscribe(() => {
      // Call the method every 2 minutes
      this.refreshData();
    });

    console.log(this.products);
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
  }
  delArr: any = [];
  refreshData() {
    this.lawyer.getCases().subscribe((data: any) => {
      this.products = data.reverse(); // Update the products array with new data
      console.log(data);
    });
  }
deleteAll(){

  this.lawyer.getCases().subscribe((data: any) => {
    this.products = data; // Update the products array with new data
    console.log(data);
    console.log(this.products,"store");
    
    for(let i=0;i<this.products.length;i++){
      const id = this.products[i]['_id']
      this.delArr.push(id);
    }
    
  });
  console.log(this.delArr,"delarr");
  this.lawyer.delete(this.delArr).subscribe((data) => {
    console.log(data);
    
  })
}
  
  // display(){
  //   this.lawyer.getCases().subscribe((data:any)=>{
  //     this.products =data
  //     console.log(this.product);
  //   })

  // }
  showModalDialog() {
    this.displayModal = true;
  }

  events!: any[];

  // private filterConstraint(value: any, filter: string): boolean {
  //   const valueToCheck = (value === null || value === undefined) ? '' : value.toString().toLowerCase();
  //   return valueToCheck.indexOf(filter.toLowerCase()) !== -1;
  // }

  public filterDate(date: Date): string | null {
    this.datePipe.transform(date, 'M/d/yyyy');
    console.warn(date);

    this.getDate = date.getDate();
    console.log(this.getDate);

    return this.datePipe.transform(date, 'dd-MM-yyyy');
  }

  // public filterDate(date: Date): string {
  //   if (date) {
  //     return this.datePipe.transform(date, 'yyyy-MM-dd') ?? '';

  //   }

  //   // return '';  
  // }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    // this.lawyer.delete({
    //     message: 'Are you sure you want to delete the selected products?',
    //     header: 'Confirm',
    //     icon: 'pi pi-exclamation-triangle',
    //     accept: () => {
    //         this.products = this.products.filter(val => !this.selectedProducts.includes(val));
    //         // this.selectedProducts = null;
    //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
    //     }
    // });
  }

  idsToDelete: string[] = [];

  onDeleteSelected() {
    this.http
      .delete('/api/casedetails', { body: { ids: this.idsToDelete } })
      .subscribe();
  }

  // deleteProduct() {
  //   if (confirm('Are you sure you want to delete this product?')) {
  //     this.lawyer.delete().subscribe(() => {
  //       this.refreshData();
  //     });
  //   }
  // }

  // deleteProduct(product: Product) {
  //     this.confirmationService.confirm({
  //         message: 'Are you sure you want to delete ' + product.name + '?',
  //         header: 'Confirm',
  //         icon: 'pi pi-exclamation-triangle',
  //         accept: () => {
  //             this.products = this.products.filter(val => val.id !== product.id);
  //             this.product = {};
  //             this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
  //         }
  //     });
  // }

  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
