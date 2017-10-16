var format_sertao_IBGE2010_0 = new ol.format.GeoJSON();
var features_sertao_IBGE2010_0 = format_sertao_IBGE2010_0.readFeatures(json_sertao_IBGE2010_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sertao_IBGE2010_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_sertao_IBGE2010_0.addFeatures(features_sertao_IBGE2010_0);var lyr_sertao_IBGE2010_0 = new ol.layer.Vector({
                source:jsonSource_sertao_IBGE2010_0, 
                style: style_sertao_IBGE2010_0,
                title: '<img src="styles/legend/sertao_IBGE2010_0.png" /> sertao_IBGE2010'
            });

lyr_sertao_IBGE2010_0.setVisible(true);
var layersList = [lyr_sertao_IBGE2010_0];
lyr_sertao_IBGE2010_0.set('fieldAliases', {'ID': 'ID', 'CD_GEOCODI': 'CD_GEOCODI', 'TIPO': 'TIPO', 'CD_GEOCODB': 'CD_GEOCODB', 'NM_BAIRRO': 'NM_BAIRRO', 'CD_GEOCODS': 'CD_GEOCODS', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_GEOCODD': 'CD_GEOCODD', 'NM_DISTRIT': 'NM_DISTRIT', 'CD_GEOCODM': 'CD_GEOCODM', 'NM_MUNICIP': 'NM_MUNICIP', 'NM_MICRO': 'NM_MICRO', 'NM_MESO': 'NM_MESO', });
lyr_sertao_IBGE2010_0.set('fieldImages', {'ID': 'TextEdit', 'CD_GEOCODI': 'TextEdit', 'TIPO': 'TextEdit', 'CD_GEOCODB': 'TextEdit', 'NM_BAIRRO': 'TextEdit', 'CD_GEOCODS': 'TextEdit', 'NM_SUBDIST': 'TextEdit', 'CD_GEOCODD': 'TextEdit', 'NM_DISTRIT': 'TextEdit', 'CD_GEOCODM': 'TextEdit', 'NM_MUNICIP': 'TextEdit', 'NM_MICRO': 'TextEdit', 'NM_MESO': 'TextEdit', });
lyr_sertao_IBGE2010_0.set('fieldLabels', {'ID': 'no label', 'CD_GEOCODI': 'no label', 'TIPO': 'no label', 'CD_GEOCODB': 'no label', 'NM_BAIRRO': 'no label', 'CD_GEOCODS': 'no label', 'NM_SUBDIST': 'no label', 'CD_GEOCODD': 'no label', 'NM_DISTRIT': 'no label', 'CD_GEOCODM': 'no label', 'NM_MUNICIP': 'no label', 'NM_MICRO': 'no label', 'NM_MESO': 'header label', });
lyr_sertao_IBGE2010_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_sertao_IBGE2010_0.on("postcompose", update);

    var listenerKey = lyr_sertao_IBGE2010_0.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });