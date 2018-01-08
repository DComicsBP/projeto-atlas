import { Injectable,  OnInit } from '@angular/core';


@Injectable()
export class MapasService {
  constructor() {

  }

  OnInit() {
    this.getMapa();

  }

  // tslint:disable-next-line:member-ordering
  private _mapa: string;

  getMapa() {
    return this._mapa;
  }

  setMapa(mapa) {
    this._mapa = mapa;
  }

}

