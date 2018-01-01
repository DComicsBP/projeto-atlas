import { Injectable } from '@angular/core';


@Injectable()
export class RegioesService {
  private _regioes = [
    { id: 1,
      regiao: 'Rio Grande do Sul',
      desc: `O estado do Rio Grande do Sul está localizado no extremo sul do país, abaixo do trópico de
      Capricórnio.Seu clima é o subtropical
      úmido (temperado), o que significa que suas estações são muito bem definidas, isto é, tem-se período de verão,
      de outono, de inverno e de primavera. Apenas reproduzir esse tipo de informação, não parece trazer à tona de
      nossas discussões o que realmente interessa ao estado do Rio Grande do Sul com relação ao seu desenvolvimento
      econômico, a sua qualidade de vida e também ao apreço com o ambiente em que se vive. Entretanto, tais informações
      colidos de livros didáticos do quinto ano do Ensino Fundamental, podem servir como um alerta de que existe
      alguma coisa de diferente em nosso clima, pois cada vez mais se presencia certa indefinição climatica com o
      passar dos dias.`,
      maps: [ 1, 2, 3, 4, 5 ]
    },
    { id: 2,
      regiao: 'Pelotas',
      desc: `O estado do Rio Grande do Sul está localizado no extremo sul do país, abaixo do trópico de
      Capricórnio.Seu clima é o subtropical
      úmido (temperado), o que significa que suas estações são muito bem definidas, isto é, tem-se período de verão,
      de outono, de inverno e de primavera. Apenas reproduzir esse tipo de informação, não parece trazer à tona de
      nossas discussões o que realmente interessa ao estado do Rio Grande do Sul com relação ao seu desenvolvimento
      econômico, a sua qualidade de vida e também ao apreço com o ambiente em que se vive. Entretanto, tais informações
      colidos de livros didáticos do quinto ano do Ensino Fundamental, podem servir como um alerta de que existe
      alguma coisa de diferente em nosso clima, pois cada vez mais se presencia certa indefinição climatica com o
      passar dos dias.`,
      maps: [ 2, 5, 8, 9, 23, 33, 12  ]
    },
    { id: 3,
      regiao: 'Sarrada no ar',
      desc: `O estado do Rio Grande do Sul está localizado no extremo sul do país, abaixo do trópico de
      Capricórnio.Seu clima é o subtropical
      úmido (temperado), o que significa que suas estações são muito bem definidas, isto é, tem-se período de verão,
      de outono, de inverno e de primavera. Apenas reproduzir esse tipo de informação, não parece trazer à tona de
      nossas discussões o que realmente interessa ao estado do Rio Grande do Sul com relação ao seu desenvolvimento
      econômico, a sua qualidade de vida e também ao apreço com o ambiente em que se vive. Entretanto, tais informações
      colidos de livros didáticos do quinto ano do Ensino Fundamental, podem servir como um alerta de que existe
      alguma coisa de diferente em nosso clima, pois cada vez mais se presencia certa indefinição climatica com o
      passar dos dias.`,
      maps: [ 3, 0, 7, 4 ]
    },
    { id: 4,
      regiao: 'Porto Alegre',
      desc: `O estado do Rio Grande do Sul está localizado no extremo sul do país, abaixo do trópico de
      Capricórnio.Seu clima é o subtropical
      úmido (temperado), o que significa que suas estações são muito bem definidas, isto é, tem-se período de verão,
      de outono, de inverno e de primavera. Apenas reproduzir esse tipo de informação, não parece trazer à tona de
      nossas discussões o que realmente interessa ao estado do Rio Grande do Sul com relação ao seu desenvolvimento
      econômico, a sua qualidade de vida e também ao apreço com o ambiente em que se vive. Entretanto, tais informações
      colidos de livros didáticos do quinto ano do Ensino Fundamental, podem servir como um alerta de que existe
      alguma coisa de diferente em nosso clima, pois cada vez mais se presencia certa indefinição climatica com o
      passar dos dias.`,
      maps: [ 1, 3, 8 ]
    }
  ];


  constructor() {}


  getRegioes() {
    return this._regioes;
  }


  getRegiao(regiaoId) {
    return this._regioes.find(regiao => regiaoId === regiao.id );
  }


}
