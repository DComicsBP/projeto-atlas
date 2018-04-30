import { Injectable, AnimationEntryMetadata } from '@angular/core';
import { router01 } from './router01';
import { router02 } from './router02';
import { router03 } from './router03';

@Injectable()
export class MaterialApoioService {

  constructor() {
    this.cursos =
    [
        {id: 1, ob: {id: '1', router: router01}},
        {id: 2, ob: {id: '2', router: router02}},
        {id: 3, ob: {id: '3', router: router03}}
      ]; }
private cursos: AnimationEntryMetadata[] = [];


getCursos() { return this.cursos; }

getCurso(id) { return this.cursos.find(curso => id === curso.id ); }

}
