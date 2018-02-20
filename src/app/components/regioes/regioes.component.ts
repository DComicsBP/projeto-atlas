/*tslint:disable*/
import { _Legenda } from './legenda';

import { Component, OnInit } from '@angular/core';
import { RegioesService } from './regioes.service';
import { ActivatedRoute } from '@angular/router';
const mapUrl = null;

@Component({
  selector: 'app-regioes',
  templateUrl: './regioes.component.html',
  styleUrls: [
    './regioes.component.css',
     './legenda.css.css' 
],

  providers: [RegioesService]
})
export class RegioesComponent implements OnInit {
  showConteudo = true;
  regiao = null;
  mapUrl = null;
  titulo = null;
  Ltitulo = null; 
  leg = null; 

  constructor(private _RegioesService: RegioesService,
              private _activatedRoute: ActivatedRoute,
             ) {

             }

  ngOnInit() {
    console.log(this._activatedRoute);
    this._activatedRoute.params.subscribe(data => {
      console.log('Router value => ', data);
      const routerId = Number(data.id);
      this._get(routerId);

      

    });

  }
  
  showMap(link, titulo,ltitulo,leg) {
    this.showConteudo = false;
    this.titulo = titulo;
    this.mapUrl = link;
    this.Ltitulo = ltitulo;
    this.leg = leg;  
    console.log(this.titulo);
    console.log(this.leg);
    console.log(this.Ltitulo);
    
    }

  private _get(routerId) {
    this.regiao =  this._RegioesService.getRegiao(routerId);
    // tslint:disable-next-line:curly
    if (this.regiao) this.showConteudo = true;
    console.log(this.regiao);

  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })

export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
