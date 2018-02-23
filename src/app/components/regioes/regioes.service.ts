/* tslint:disable */

import { Injectable } from '@angular/core';

import { _Descricao } from './ts/tipos-mapas/descricao';
import { _MapasSaudeAmbiental } from './ts/tipos-mapas/saudeAmbiental';
import { _MapasAdministrativos } from './ts/tipos-mapas/administrativos';
import { _MapasDemografia } from './ts/tipos-mapas/demografia';
import { _MapasMortalidade } from './ts/tipos-mapas/mortalidade';
import { _MapasViolencia } from './ts/tipos-mapas/violencia';

@Injectable()
export class RegioesService {

  tipoMapa:any[] = [_MapasMortalidade, _MapasDemografia, _MapasAdministrativos, _MapasSaudeAmbiental, _MapasViolencia]
  descricao: any[] = _Descricao;

 
  private _regioes = [
    { id: 1,
      regiao: 'Demografia',
      desc: this.descricao[0],
      maps: this.tipoMapa[1],
      
    },
    { id: 2,
      regiao: 'Administrativos',
      desc: this.descricao[1],
      maps: this.tipoMapa[2], 
   
    },
    { id: 3,
      regiao: 'Violência',
      desc: this.descricao[2],
      maps: this.tipoMapa[4],
     },
    { id: 4,
      regiao: 'Mortalidade',
      desc: this.descricao[3],
      maps: this.tipoMapa[0],
    },

    { id: 5,
      regiao: 'Saúde Ambiental',
      desc: this.descricao[4],
      maps: this.tipoMapa[3],
    }
  ];


  constructor() {}

  getRegioes() { return this._regioes; }

  getRegiao(regiaoId) {
    return this._regioes.find(regiao => regiaoId === regiao.id );
    }

  }

