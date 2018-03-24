import { Component, OnInit } from '@angular/core';
import { MaterialApoioService } from './material-apoio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-material-apoio',
  templateUrl: './material-apoio.component.html',
  styleUrls: ['./material-apoio.component.css'],
  providers: [MaterialApoioService]
})
export class MaterialApoioComponent implements OnInit {
imagem01 = './assets/Arial-Helvetica/helvetica X Arial.png';
titulo = null;
link = null;
material: any[] = null;
// showConteudo: boolean;

constructor(
            private _materialApoioService: MaterialApoioService,
            private _activatedRoute: ActivatedRoute
            ) { }

   ngOnInit() {
    this._activatedRoute.params.subscribe(data => {
      console.log('Router value => ', data);
      const routerId = Number(data.id);
      this._get(routerId);
      console.log(this._get(routerId));
    });
}

showTexto(titulo, link) {
  this.link = link;
  this.material = titulo;
  console.log('LINK ====' + this.link);
  console.log('TITULO ====' + this.titulo);

}

  public _get(routerId) {
    this.material = this._materialApoioService.getTexto(routerId);
    // tslint:disable-next-line:curly
    console.log('THIS  MATERIAL + + + +' + this.material);

  }


}
