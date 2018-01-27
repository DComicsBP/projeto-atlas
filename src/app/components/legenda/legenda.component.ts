import { Component, OnInit } from '@angular/core';
import { _Legenda } from './legenda';

@Component({
  selector: 'app-legenda',
  templateUrl: './legenda.component.html',
  styleUrls: ['./legenda.component.css']
})
export class LegendaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    

  }
  title = 'app';
  var01:any[] = _Legenda;
  
}

