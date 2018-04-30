import { ActivatedRoute } from '@angular/router';
import { MaterialApoioService } from './material-apoio.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-material-apoio',
  templateUrl: './material-apoio.component.html',
  styleUrls: ['./material-apoio.component.css']
})
export class MaterialApoioComponent implements OnInit {
cursos: any[];
  constructor(private _materialApoioService: MaterialApoioService,
              private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('ESCREVENDO BESTEIRA ');
    console.log(this._ActivatedRoute);
    this._ActivatedRoute.params.subscribe(data => {
      console.log('Router value => ', data);
      const routerId = Number(data.id);
      this._get(routerId);
      // tslint:disable-next-line:no-debugger
  });
}
// tslint:disable-next-line:member-ordering
curso: any;
  private _get(routerId) {
    this.curso = this._materialApoioService.getCurso(routerId);
    console.log(`vamos ver se sai o cursos que eu preciso ==> ` + routerId);
    }

}
