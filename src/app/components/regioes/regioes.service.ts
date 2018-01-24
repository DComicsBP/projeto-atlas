import { Injectable } from '@angular/core';


@Injectable()
export class RegioesService {
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


        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:max-line-length
//        'https://fusiontables.google.com/embedviz?q=select+col22+from+1IcoXZ7XHA4uhvqXAP9n3fjjsN6eJ1uWfOIH3Xgc3&viz=MAP&h=false&lat=-30.191385705216614&lng=-50.62162998193355&t=1&z=8&l=col22&y=2&tmplt=2&hml=KML',
        // tslint:disable-next-line:max-line-length
  //      'https://fusiontables.google.com/embedviz?q=select+col22+from+1IcoXZ7XHA4uhvqXAP9n3fjjsN6eJ1uWfOIH3Xgc3&viz=MAP&h=false&lat=-30.191385705216614&lng=-50.62162998193355&t=1&z=8&l=col22&y=2&tmplt=2&hml=KML'


      ]},

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
      maps: [
        {
          titulo:'Óbitos Infantis - RS',
          nome:'Óbitos Infantis - RS ',
          link:'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-30.39595413228537&lng=-52.99139537500001&t=1&z=6&l=col26&y=2&tmplt=3&hml=KML'
        },
        {
          titulo:'Óbitos Infantis - Indígena',
          nome:'Óbitos Infantis - Indígena',
          link:'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-29.901462995701408&lng=-53.211121937500025&t=1&z=6&l=col26&y=3&tmplt=4&hml=KML'
        },        
        
        {
          titulo:'Óbitos Infantis - Pop. Preta',
          nome:'Taxa de Óbitos Infantis - Pop. Preta',
          link:'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-29.663082158777538&lng=-52.892518421875025&t=1&z=6&l=col26&y=5&tmplt=6&hml=KML'
        },
        {
          titulo:'Óbitos Infantis - Pop. Branca',
          nome:'Óbitos Infantis - Pop. Branca',
          link:'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-29.117461214902278&lng=-53.782411000000025&t=1&z=6&l=col26&y=8&tmplt=9&hml=KML'
        },
       
        {
          titulo:'Óbitos Infantis Pop. Parda',
          nome:'Taxa de Óbitos Infantis Pop. Parda',
          link:'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-29.117461214902278&lng=-53.782411000000025&t=1&z=6&l=col26&y=7&tmplt=8&hml=KML'
        }, 
        {
          titulo:'Óbitos Infantis - Infantis Ignorados',
          nome:'Óbitos Infantis - Infantis Ignorados',
          link:'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-29.9776248272372&lng=-52.37616100000001&t=1&z=6&l=col26&y=6&tmplt=7&hml=KML'
        },
        {
          titulo:'Taxa de Óbitos Infantis Pop. Parda',
          nome:'Taxa de Óbitos Infantis Pop. Parda',
          link:'https://fusiontables.google.com/embedviz?q=select+col26+from+1ZAxGejRZuKEiVSf5McmWMdPtlqceQmNGIviUHDHb&viz=MAP&h=false&lat=-29.117461214902278&lng=-53.782411000000025&t=1&z=6&l=col26&y=7&tmplt=8&hml=KML'
        }

    ]},

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

