
import { Component, OnInit } from '@angular/core';
import { RegioesService } from './regioes.service';
import { ActivatedRoute } from '@angular/router';
const mapUrl = null;

@Component({
  selector: 'app-regioes',
  templateUrl: './regioes.component.html',
  styleUrls: ['./regioes.component.css'],

  providers: [RegioesService]
})
export class RegioesComponent implements OnInit {
  showConteudo = true;

  regiao = null;
  mapUrl = null;
  // tslint:disable-next-line:max-line-length
  teste = `<div style="position: absolute;top:100px;left :  250px;"><iframe width="900" height="550" scrolling="no" frameborder="no" src="http://fusiontables.google.com/embedviz?q=select+col22+from+1IcNEWGsIBhYIy1rUSAMcklXib8DD6n91NrH70gw-&amp;viz=MAP&amp;h=false&amp;lat=-30.09538886361527&amp;lng=-51.15781057739258&amp;t=1&amp;z=9&amp;l=col22&amp;y=2&amp;tmplt=2&amp;hml=KML" ></iframe></div>`;

  private _url = 'http://fusiontables.google.com/';

  constructor(private _RegioesService: RegioesService,
              private _activatedRoute: ActivatedRoute,
             ) {}

  ngOnInit() {
    console.log(this._activatedRoute);
    this._activatedRoute.params.subscribe(data => {
      console.log('Router value => ', data);
      const routerId = Number(data.id);
      this._get(routerId);

    });

  }

  showMap(link) {
    this.showConteudo = false;
    // this.mapUrl = this._url + link;
    this.mapUrl = link;
    // mapa = this._url;
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

@Pipe({ name: 'safe' })

export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
