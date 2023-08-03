import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent {

  listTarjetas: any[] = [
    { titulo: 'Oscar Lista', numeroTarjeta: '123456789', fechaExpiracion: '12/23', cvv: '123'},
    { titulo: 'Juan', numeroTarjeta: '987654321', fechaExpiracion: '10/24', cvv: '456'},
  ];

  constructor() {}

  ngOnInit(): void{

  }


}
