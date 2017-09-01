import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demografia',
  templateUrl: './demografia.component.html',
  styleUrls: ['./demografia.component.css']
})
export class DemografiaComponent implements OnInit {

  imagem01='./assets/Mapas/Demografia/densidade-rs-hab-km2-1.jpg'; 
  imagem02='./assets/Mapas/Demografia/percentual-pop-branca-rs-1.jpg'; 
  imagem03='./assets/Mapas/Demografia/percentual-pop-indigena-rs-1.jpg'; 
  imagem04='./assets/Mapas/Demografia/percentual-pop-parda-rs-1.jpg'; 
  imagem05='./assets/Mapas/Demografia/percentual-pop-preta-rs-1.jpg'; 

  constructor() {   }

  ngOnInit() {
  }
  

}
