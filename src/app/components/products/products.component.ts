import { Component, OnInit } from '@angular/core';
import { HotelService } from "../../services/hotel/hotel.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  hotels = [];

  constructor(private restHotel: HotelService) { }

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels(){
    this.restHotel.getHotels().subscribe(res=>{
      this.hotels = res.hotels;
      console.log(this.hotels);
    })
  }

}
