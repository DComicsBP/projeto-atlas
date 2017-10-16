import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {

  // tslint:disable-next-line:one-line
  onclick01(){
  window.location.href = '/src/assets/Mapas/qgis2web_2017_10_08-20_06_36_732000/index.html';
  }
  constructor() { }

  ngOnInit() {
  }

}
