import { text01 } from './texts01';
import { Injectable } from '@angular/core';

@Injectable()
export class MaterialApoioService {

   constructor() { }
   private _textos: any[] = [text01, text01, text01];

  getTextos() { return this._textos; }
  getTexto(textoID) { return this._textos.find(texto => textoID === texto.id); }

  }
