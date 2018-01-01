import { Component, OnInit } from '@angular/core';
import { RegioesService } from './regioes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-regioes',
  templateUrl: './regioes.component.html',
  styleUrls: ['./regioes.component.css'],
  providers: [RegioesService]
})
export class RegioesComponent implements OnInit {
  showConteudo = true;
  teste = null;
  regiao = null;

  constructor(private _RegioesService: RegioesService,
              private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log(this._activatedRoute);
    this._activatedRoute.params.subscribe(data => {
      console.log('Router value => ', data);
      const routerId = Number(data.id);
      this._get(routerId);
    });
  }

  showMap(listId) {
    console.log(listId);
    this.showConteudo = false;

    this.teste = `Lista n${listId}`;
  }


  private _get(routerId) {
    this.regiao =  this._RegioesService.getRegiao(routerId);
    // tslint:disable-next-line:curly
    if (this.regiao) this.showConteudo = true;
    console.log(this.regiao);
  }
}
