import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sambiental',
  templateUrl: './sambiental.component.html',
  styleUrls: ['./sambiental.component.css']
})
export class SambientalComponent implements OnInit { 

  constructor() { }

  ngOnInit() {
  }
  imagem01='./assets/Mapas/Saude Ambiental/bacias-hidrograficas-1.jpg'; 
  imagem02='./assets/Mapas/Saude Ambiental/carencia-habitacional-agua-1.jpg'; 
  imagem03='./assets/Mapas/Saude Ambiental/carencia-habitacional-esgoto-1.jpg'; 
  imagem04='./assets/Mapas/Saude Ambiental/carencia-habitacional-lixo-1.jpg'; 
  imagem05='./assets/Mapas/Saude Ambiental/carencia-habitacional-1.jpg'; 


}
