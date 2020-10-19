import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
  public labels1: string [] = ['Vehiculos', 'Ropa', 'Muebles'];
  public labels2: string [] = ['Carros', 'Motos', 'Bicicletas'];
  public labels3: string [] = ['Entrada', 'Salida', 'Stock'];
  public labels4: string [] = ['Sillas', 'Mesas', 'Muebles'];
  public data1 = [
    [200, 100, 300],
  ];
  public data2 = [
    [350, 450, 100],
  ];
  public data3 = [
    [799, 400, 100],
  ];
  public data4 = [
    [230, 280, 300],
  ]
 
  constructor() { }

  ngOnInit(): void {
  }

}
