import { Component, OnInit } from '@angular/core';
import { Product } from 'src/interfaces/products.interface';
import { default as Datos } from '../../assets/db.json';

@Component({
  selector: 'app-taple-png',
  templateUrl: './taple-png.component.html',
  styleUrls: ['./taple-png.component.scss']
})
export class TaplePNGComponent implements OnInit {
  datos!: Product[];
  products!: Product[];

  constructor() {}

  ngOnInit() {
    this.getJson();
  }

  getJson() {
    this.datos = Datos.ProductsData;
    this.products = this.datos;
  }

  checked(disabled: Product) {
    console.log('entramos: ', disabled.desactivado);
    this.products.forEach(e => {
      e.desactivado = true;
    })
    disabled.desactivado = false;
    // return desactivado = false;    
  }
}