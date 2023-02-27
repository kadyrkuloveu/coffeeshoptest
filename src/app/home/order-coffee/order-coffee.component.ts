import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-coffee',
  templateUrl: './order-coffee.component.html',
  styleUrls: ['./order-coffee.component.scss']
})
export class OrderCoffeeComponent implements OnInit {
  list = [
    {
      id: 1,
      name: 'POST × SURF COFFEE®',
      adrress: 'ул. Постовая, 55',
      worktime: '8:00 - 23:00',
      image: 'place1'
    },
    {
      id: 2,
      name: 'RED × SURF COFFEE®',
      adrress: 'ул. Красная, 65',
      worktime: '8:00 - 23:00',
      image: 'place2'
    },
    {
      id: 3,
      name: 'RASHPIL × SURF COFFEE®',
      adrress: 'ул. Буденого, 129',
      worktime: '8:00 - 23:00',
      image: 'place3'
    },
    {
      id: 4,
      name: 'GALLERY × SURF COFFEE®',
      adrress: 'ул. В. Головатого, 313',
      worktime: '8:00 - 23:00',
      image: 'place4'
    },
    {
      id: 5,
      name: 'AURORA × SURF COFFEE®',
      adrress: 'ул. Красная, 205',
      worktime: '8:00 - 23:00',
      image: 'place5'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
