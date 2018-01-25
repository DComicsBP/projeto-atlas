import { _MapasAdministrativos } from './administrativos';
import { _MapasDemografia } from './demografia';
import { _MapasMortalidade } from './mortalidade';
import { Injectable } from '@angular/core';

@Injectable()
export class RegioesService {

  tipoMapa:any[] = [_MapasMortalidade, _MapasDemografia, _MapasAdministrativos]
  private _regioes = [
    { id: 1,
      regiao: 'Demografia',
      desc: `O estado do Rio Grande do Sul está localizado no extremo sul do país, abaixo do trópico de
      Capricórnio.Seu clima é o subtropical
      úmido (temperado), o que significa que suas estações são muito bem definidas, isto é, tem-se período de verão,
      de outono, de inverno e de primavera. Apenas reproduzir esse tipo de informação, não parece trazer à tona de
      nossas discussões o que realmente interessa ao estado do Rio Grande do Sul com relação ao seu desenvolvimento
      econômico, a sua qualidade de vida e também ao apreço com o ambiente em que se vive. Entretanto, tais informações
      colidos de livros didáticos do quinto ano do Ensino Fundamental, podem servir como um alerta de que existe
      alguma coisa de diferente em nosso clima, pois cada vez mais se presencia certa indefinição climatica com o
      passar dos dias.`,
      maps: this.tipoMapa[1]},

    { id: 2,
      regiao: 'Administrativos',
      desc: `O estado do Rio Grande do Sul está localizado no extremo sul do país, abaixo do trópico de
      Capricórnio.Seu clima é o subtropical
      úmido (temperado), o que significa que suas estações são muito bem definidas, isto é, tem-se período de verão,
      de outono, de inverno e de primavera. Apenas reproduzir esse tipo de informação, não parece trazer à tona de
      nossas discussões o que realmente interessa ao estado do Rio Grande do Sul com relação ao seu desenvolvimento
      econômico, a sua qualidade de vida e também ao apreço com o ambiente em que se vive. Entretanto, tais informações
      colidos de livros didáticos do quinto ano do Ensino Fundamental, podem servir como um alerta de que existe
      alguma coisa de diferente em nosso clima, pois cada vez mais se presencia certa indefinição climatica com o
      passar dos dias.`,
      maps: this.tipoMapa[2]
    },

    { id: 3,
      regiao: 'Violência',
      desc: `O estado do Rio Grande do Sul está localizado no extremo sul do país, abaixo do trópico de
      Capricórnio.Seu clima é o subtropical
      úmido (temperado), o que significa que suas estações são muito bem definidas, isto é, tem-se período de verão,
      de outono, de inverno e de primavera. Apenas reproduzir esse tipo de informação, não parece trazer à tona de
      nossas discussões o que realmente interessa ao estado do Rio Grande do Sul com relação ao seu desenvolvimento
      econômico, a sua qualidade de vida e também ao apreço com o ambiente em que se vive. Entretanto, tais informações
      colidos de livros didáticos do quinto ano do Ensino Fundamental, podem servir como um alerta de que existe
      alguma coisa de diferente em nosso clima, pois cada vez mais se presencia certa indefinição climatica com o
      passar dos dias.`,
      maps: [
        {
          titulo:'Titulo 01',
          nome:'Mapa 01',
          link:'https://fusiontables.google.com/embedviz?q=select+col22+from+1IcoXZ7XHA4uhvqXAP9n3fjjsN6eJ1uWfOIH3Xgc3&viz=MAP&h=false&lat=-30.191385705216614&lng=-50.62162998193355&t=1&z=8&l=col22&y=2&tmplt=2&hml=KML'
        },
        {
          titulo:'Titulo 02',
          nome:'Mapa 02',
          link:'https://fusiontables.google.com/embedviz?q=select+col22+from+1IcoXZ7XHA4uhvqXAP9n3fjjsN6eJ1uWfOIH3Xgc3&viz=MAP&h=false&lat=-30.191385705216614&lng=-50.62162998193355&t=1&z=8&l=col22&y=2&tmplt=2&hml=KML'
        },
        {
          titulo:'Titulo 03',
          nome:'Mapa 02',
          link:'https://fusiontables.google.com/embedviz?q=select+col22+from+1IcoXZ7XHA4uhvqXAP9n3fjjsN6eJ1uWfOIH3Xgc3&viz=MAP&h=false&lat=-30.191385705216614&lng=-50.62162998193355&t=1&z=8&l=col22&y=2&tmplt=2&hml=KML'
        }
    ]},

    { id: 4,
      regiao: 'Mortalidade',
      desc: `O estado do Rio Grande do Sul está localizado no extremo sul do país, abaixo do trópico de
      Capricórnio.Seu clima é o subtropical
      úmido (temperado), o que significa que suas estações são muito bem definidas, isto é, tem-se período de verão,
      de outono, de inverno e de primavera. Apenas reproduzir esse tipo de informação, não parece trazer à tona de
      nossas discussões o que realmente interessa ao estado do Rio Grande do Sul com relação ao seu desenvolvimento
      econômico, a sua qualidade de vida e também ao apreço com o ambiente em que se vive. Entretanto, tais informações
      colidos de livros didáticos do quinto ano do Ensino Fundamental, podem servir como um alerta de que existe
      alguma coisa de diferente em nosso clima, pois cada vez mais se presencia certa indefinição climatica com o
      passar dos dias.`,
      maps: this.tipoMapa[0]
        
    },

    { id: 5,
      regiao: 'Saúde Ambiental',
      desc: `O estado do Rio Grande do Sul está localizado no extremo sul do país, abaixo do trópico de
      Capricórnio.Seu clima é o subtropical
      úmido (temperado), o que significa que suas estações são muito bem definidas, isto é, tem-se período de verão,
      de outono, de inverno e de primavera. Apenas reproduzir esse tipo de informação, não parece trazer à tona de
      nossas discussões o que realmente interessa ao estado do Rio Grande do Sul com relação ao seu desenvolvimento
      econômico, a sua qualidade de vida e também ao apreço com o ambiente em que se vive. Entretanto, tais informações
      colidos de livros didáticos do quinto ano do Ensino Fundamental, podem servir como um alerta de que existe
      alguma coisa de diferente em nosso clima, pois cada vez mais se presencia certa indefinição climatica com o
      passar dos dias.`,
      maps: [
        {
          titulo:'Biomas do Rio Grande do Sul',
          nome:'Biomas',
          link:'https://fusiontables.google.com/embedviz?q=select+col13+from+19qswfScrqONnn5_27CYEMRzLBiZFDSRp0MOjQJ1h&viz=MAP&h=false&lat=-30.165250892256093&lng=-54.455476148294&t=1&z=6&l=col13&y=2&tmplt=3&hml=KML',
          legenda:`Oi`
        },
        {
          titulo:'Titulo 02',
          nome:'Mapa 02',
          link:'https://fusiontables.google.com/embedviz?q=select+col22+from+1IcoXZ7XHA4uhvqXAP9n3fjjsN6eJ1uWfOIH3Xgc3&viz=MAP&h=false&lat=-30.191385705216614&lng=-50.62162998193355&t=1&z=8&l=col22&y=2&tmplt=2&hml=KML',
          legenda:`Oi 2`
        },
        {
          titulo:'Titulo 03',
          nome:'Mapa 02',
          link:'https://fusiontables.google.com/embedviz?q=select+col22+from+1IcoXZ7XHA4uhvqXAP9n3fjjsN6eJ1uWfOIH3Xgc3&viz=MAP&h=false&lat=-30.191385705216614&lng=-50.62162998193355&t=1&z=8&l=col22&y=2&tmplt=2&hml=KML', 
          legenda:`Oi 3`
        }
    ]}

  ];


  constructor() {}

  getRegioes() { return this._regioes; }

  getRegiao(regiaoId) {
    return this._regioes.find(regiao => regiaoId === regiao.id );
    }

  }

