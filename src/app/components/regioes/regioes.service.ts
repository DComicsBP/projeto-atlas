/* tslint:disable */

import { Injectable } from '@angular/core';

import { _Legenda } from './legenda';
import { _Descricao } from './descricao';
import { _MapasSaudeAmbiental } from './saudeAmbiental';
import { _MapasAdministrativos } from './administrativos';
import { _MapasDemografia } from './demografia';
import { _MapasMortalidade } from './mortalidade';
import { _MapasViolencia } from './violencia';

@Injectable()
export class RegioesService {

  tipoMapa:any[] = [_MapasMortalidade, _MapasDemografia, _MapasAdministrativos, _MapasSaudeAmbiental, _MapasViolencia]
  descricao: any[] = _Descricao;
  legenda: any[] = _Legenda;

  getLegenda(){
    return this.legenda;
  }

  private _regioes = [
    { id: 1,
      regiao: 'Demografia',
      desc: this.descricao[0],
      maps: this.tipoMapa[1],
     legend: this.legenda[0]
    },
    { id: 2,
      regiao: 'Administrativos',
      desc: this.descricao[1],
      maps: this.tipoMapa[2], 
    legend: this.legenda[0]
    },
    { id: 3,
      regiao: 'Violência',
      desc: this.descricao[2],
      maps: this.tipoMapa[4],
     legend: this.legenda[0]
     },
    { id: 4,
      regiao: 'Mortalidade',
      desc: this.descricao[3],
      maps: this.tipoMapa[0],
      legend: this.legenda[1]
    },

    { id: 5,
      regiao: 'Saúde Ambiental',
      desc: this.descricao[4],
      maps: this.tipoMapa[3],
      legend:this.legenda[1]
    }
  ];


  constructor() {}

  getRegioes() { return this._regioes; }

  getRegiao(regiaoId) {
    return this._regioes.find(regiao => regiaoId === regiao.id );
    }

  }

