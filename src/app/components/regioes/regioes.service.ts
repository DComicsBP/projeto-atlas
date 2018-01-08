import { Injectable } from '@angular/core';


@Injectable()
export class RegioesService {
  private _regioes = [
    { id: 1,
      regiao: 'Rio Grande do Sul',
      desc: `O estado do Rio Grande do Sul está localizado no extremo sul do país, abaixo do trópico de
      Capricórnio.Seu clima é o subtropical
      úmido (temperado), o que significa que suas estações são muito bem definidas, isto é, tem-se período de verão,
      de outono, de inverno e de primavera. Apenas reproduzir esse tipo de informação, não parece trazer à tona de
      nossas discussões o que realmente interessa ao estado do Rio Grande do Sul com relação ao seu desenvolvimento
      econômico, a sua qualidade de vida e também ao apreço com o ambiente em que se vive. Entretanto, tais informações
      colidos de livros didáticos do quinto ano do Ensino Fundamental, podem servir como um alerta de que existe
      alguma coisa de diferente em nosso clima, pois cada vez mais se presencia certa indefinição climatica com o
      passar dos dias.`,
      maps: [
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:max-line-length
        'https://fusiontables.google.com/embedviz?q=select+col22+from+1IcoXZ7XHA4uhvqXAP9n3fjjsN6eJ1uWfOIH3Xgc3&viz=MAP&h=false&lat=-30.191385705216614&lng=-50.62162998193355&t=1&z=8&l=col22&y=2&tmplt=2&hml=KML',
        'https://fusiontables.google.com/embedviz?q=select+col22+from+1IcoXZ7XHA4uhvqXAP9n3fjjsN6eJ1uWfOIH3Xgc3&viz=MAP&h=false&lat=-30.191385705216614&lng=-50.62162998193355&t=1&z=8&l=col22&y=2&tmplt=2&hml=KML',
        // tslint:disable-next-line:max-line-length
        'https://fusiontables.google.com/embedviz?q=select+col22+from+1IcoXZ7XHA4uhvqXAP9n3fjjsN6eJ1uWfOIH3Xgc3&viz=MAP&h=false&lat=-30.191385705216614&lng=-50.62162998193355&t=1&z=8&l=col22&y=2&tmplt=2&hml=KML'


      ]
    },
    { id: 2,
      regiao: 'Pelotas',
      desc: `O estado do Rio Grande do Sul está localizado no extremo sul do país, abaixo do trópico de
      Capricórnio.Seu clima é o subtropical
      úmido (temperado), o que significa que suas estações são muito bem definidas, isto é, tem-se período de verão,
      de outono, de inverno e de primavera. Apenas reproduzir esse tipo de informação, não parece trazer à tona de
      nossas discussões o que realmente interessa ao estado do Rio Grande do Sul com relação ao seu desenvolvimento
      econômico, a sua qualidade de vida e também ao apreço com o ambiente em que se vive. Entretanto, tais informações
      colidos de livros didáticos do quinto ano do Ensino Fundamental, podem servir como um alerta de que existe
      alguma coisa de diferente em nosso clima, pois cada vez mais se presencia certa indefinição climatica com o
      passar dos dias.`,
      maps: [ 2, 5, 8, 9, 23, 33, 12  ]
    },
    { id: 3,
      regiao: 'Sarrada no ar',
      desc: `O estado do Rio Grande do Sul está localizado no extremo sul do país, abaixo do trópico de
      Capricórnio.Seu clima é o subtropical
      úmido (temperado), o que significa que suas estações são muito bem definidas, isto é, tem-se período de verão,
      de outono, de inverno e de primavera. Apenas reproduzir esse tipo de informação, não parece trazer à tona de
      nossas discussões o que realmente interessa ao estado do Rio Grande do Sul com relação ao seu desenvolvimento
      econômico, a sua qualidade de vida e também ao apreço com o ambiente em que se vive. Entretanto, tais informações
      colidos de livros didáticos do quinto ano do Ensino Fundamental, podem servir como um alerta de que existe
      alguma coisa de diferente em nosso clima, pois cada vez mais se presencia certa indefinição climatica com o
      passar dos dias.`,
      maps: [ 3, 0, 7, 4 ]
    },
    { id: 4,
      regiao: 'Porto Alegre',
      desc: `O estado do Rio Grande do Sul está localizado no extremo sul do país, abaixo do trópico de
      Capricórnio.Seu clima é o subtropical
      úmido (temperado), o que significa que suas estações são muito bem definidas, isto é, tem-se período de verão,
      de outono, de inverno e de primavera. Apenas reproduzir esse tipo de informação, não parece trazer à tona de
      nossas discussões o que realmente interessa ao estado do Rio Grande do Sul com relação ao seu desenvolvimento
      econômico, a sua qualidade de vida e também ao apreço com o ambiente em que se vive. Entretanto, tais informações
      colidos de livros didáticos do quinto ano do Ensino Fundamental, podem servir como um alerta de que existe
      alguma coisa de diferente em nosso clima, pois cada vez mais se presencia certa indefinição climatica com o
      passar dos dias.`,
      maps: [ 1, 3, 8 ]
    }
  ];


  constructor() {}

  getRegioes() {
    return this._regioes;
  }


  getRegiao(regiaoId) {
    return this._regioes.find(regiao => regiaoId === regiao.id );
  }


}
/*

<!DOCTYPE html>
<html>
<head>
<meta name="viewport"/>
<title>pop_regiao_metropolitana.kml - Google Fusion Tables</title>
<style type="text/css">
html, body, #googft-mapCanvas {
  height: 300px;
  margin: 0;
  padding: 0;
  width: 500px;
}
</style>



<script type="text/javascript">
  function initialize() {
    var isMobile = (navigator.userAgent.toLowerCase().indexOf('android') > -1) ||
      (navigator.userAgent.match(/(iPod|iPhone|iPad|BlackBerry|Windows Phone|iemobile)/));
    if (isMobile) {
      var viewport = document.querySelector("meta[name=viewport]");
      viewport.setAttribute('content', 'initial-scale=1.0, user-scalable=no');
    }
    var mapDiv = document.getElementById('googft-mapCanvas');
    mapDiv.style.width = isMobile ? '100%' : '500px';
    mapDiv.style.height = isMobile ? '100%' : '300px';
    var map = new google.maps.Map(mapDiv, {
      center: new google.maps.LatLng(-30.191385705216614, -50.62162998193355),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    layer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "col22",
        from: "1IcoXZ7XHA4uhvqXAP9n3fjjsN6eJ1uWfOIH3Xgc3",
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });

    if (isMobile) {
      var legend = document.getElementById('googft-legend');
      var legendOpenButton = document.getElementById('googft-legend-open');
      var legendCloseButton = document.getElementById('googft-legend-close');
      legend.style.display = 'none';
      legendOpenButton.style.display = 'block';
      legendCloseButton.style.display = 'block';
      legendOpenButton.onclick = function() {
        legend.style.display = 'block';
        legendOpenButton.style.display = 'none';
      }
      legendCloseButton.onclick = function() {
        legend.style.display = 'none';
        legendOpenButton.style.display = 'block';
      }
    }
  }

  google.maps.event.addDomListener(window, 'load', initialize);
</script>
</head>

<body>
  <div id="googft-mapCanvas"></div>
</body>
</html>

*/
