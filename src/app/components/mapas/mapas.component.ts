import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapas',
  template: '<div style="position: absolute;top:100px;left :  250px;"><iframe width="900" height="550" scrolling="no" frameborder="no" src="https://fusiontables.google.com/embedviz?q=select+col22+from+1IcNEWGsIBhYIy1rUSAMcklXib8DD6n91NrH70gw-&amp;viz=MAP&amp;h=false&amp;lat=-30.09538886361527&amp;lng=-51.15781057739258&amp;t=1&amp;z=9&amp;l=col22&amp;y=2&amp;tmplt=2&amp;hml=KML" ></iframe></div>',
  styleUrls: ['./mapas.component.css']
  
})
export class MapasComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
