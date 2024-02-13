import { Component } from '@angular/core';
import { ProductList } from '../../datastore/models/ProductList';
import { Category } from '../../datastore/models/Category';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  prdlist : ProductList[];
  catList : Category[];
  totalPrice : number;
  selectedCategory: string = '';


  constructor() {
    this.totalPrice =0;
    this.prdlist = [
      {id : 1 , name : "Tenis ball" , Quantity : 10 , price: 10 , imageUrl: "https://fakeimg.pl/300/", catId:1},
      {id : 2 , name : "BBQ Grill" , Quantity : 3, price: 30 , imageUrl: "https://fakeimg.pl/300/", catId:2},
      {id : 3 , name : "Camp House" , Quantity : 5 , price: 350 , imageUrl: "https://fakeimg.pl/300/", catId:3},
      {id : 4 , name : "FootBall" , Quantity : 15 , price: 3 , imageUrl: "https://fakeimg.pl/300/", catId:1}
    ]
    this.catList =[
      {id:1, Name :"sport"},
      {id:2, Name :"Summer"},
      {id:3, Name :"Camping"},

    ]
  }
  TotalPrice(price:number,Quantity:string){
    let qty: number = parseInt(Quantity);
    let dummy = this.totalPrice;
    this.totalPrice = price * qty + dummy;
  }
}

