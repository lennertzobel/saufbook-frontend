import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  products = [
    {
      name: 'Kleines Bier',
      image: 'https://cdn-icons-png.flaticon.com/128/3728/3728016.png',
    },
    {
      name: 'Großes Bier',
      image: 'https://cdn-icons-png.flaticon.com/128/3728/3728016.png',
    },
    {
      name: 'Schnaps',
      image: 'https://cdn-icons-png.flaticon.com/128/3426/3426900.png',
    },
    {
      name: 'Pizza',
      image: 'https://cdn-icons-png.flaticon.com/128/3280/3280124.png',
    },
    {
      name: 'Limo',
      image: 'https://cdn-icons-png.flaticon.com/128/1237/1237004.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
