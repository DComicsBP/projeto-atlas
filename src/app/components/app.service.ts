import { Injectable } from '@angular/core';


@Injectable()
export class MapasService{

   // mapas_porto_alegre : string[];
   // mapas_serra : string[]
    mapas: any[];

    // tslint:disable-next-line:one-line
    constructor(){
        this.mapas = [
                // tslint:disable-next-line:max-line-length
                {'id': 1, 'nome': 'pop_parda_poa', 'src': 'https://fusiontables.google.com/embedviz?q=select+col22+from+1IcNEWGsIBhYIy1rUSAMcklXib8DD6n91NrH70gw-&amp;viz=MAP&amp;h=false&amp;lat=-30.09538886361527&amp;lng=-51.15781057739258&amp;t=1&amp;z=9&amp;l=col22&amp;y=2&amp;tmplt=2&amp;hml=KML'},
                {'id': 2, 'nome': 'pop_indi_poa', 'src': 'https://fusiontables.google.com/embedviz?q=select+col22+from+1IcNEWGsIBhYIy1rUSAMcklXib8DD6n91NrH70gw-&viz=MAP&h=false&lat=-29.83483995234321&lng=-50.82272756958008&t=1&z=9&l=col22&y=2&tmplt=2&hml=KML'},
                // tslint:disable-next-line:max-line-length
                {'id': 3, 'nome': 'pop_preta_poa', 'src': 'https://fusiontables.google.com/embedviz?q=select+col22+from+1IcNEWGsIBhYIy1rUSAMcklXib8DD6n91NrH70gw-&viz=MAP&h=false&lat=-29.83483995234321&lng=-50.82272756958008&t=1&z=9&l=col22&y=2&tmplt=2&hml=KML'}
        ];
      }

// find para percorrer o array e procura as coisas

    getMapById(id){
      // tslint:disable-next-line:no-shadowed-variable
      const mapa = this.mapas.find( mapa => id === mapa.id );
      return mapa && mapa.src; 
    }

    addMapa(nome, src){
            const novoMapa = this.mapas.push(this.mapas.length, nome, src);
    }

}