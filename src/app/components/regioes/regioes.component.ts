
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
  legenda = _Legenda;


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
      console.log('Teste da legenda = >' + this.legenda); 
    });

  }
  
  showMap(link, titulo,legenda) {
    this.showConteudo = false;
    this.titulo = titulo;
    this.mapUrl = link;
    console.log(this.mapUrl);
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
import { _Legenda } from './legenda';

@Pipe({ name: 'safe' })

export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
