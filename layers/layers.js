var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_delegaciones_1 = new ol.format.GeoJSON();
var features_delegaciones_1 = format_delegaciones_1.readFeatures(json_delegaciones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_delegaciones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_delegaciones_1.addFeatures(features_delegaciones_1);
var lyr_delegaciones_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_delegaciones_1, 
                style: style_delegaciones_1,
                popuplayertitle: 'delegaciones',
                interactive: true,
                title: '<img src="styles/legend/delegaciones_1.png" /> delegaciones'
            });
var format_PUNTOS_total_2 = new ol.format.GeoJSON();
var features_PUNTOS_total_2 = format_PUNTOS_total_2.readFeatures(json_PUNTOS_total_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNTOS_total_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTOS_total_2.addFeatures(features_PUNTOS_total_2);
var lyr_PUNTOS_total_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUNTOS_total_2, 
                style: style_PUNTOS_total_2,
                popuplayertitle: 'PUNTOS_total',
                interactive: false,
    title: 'PUNTOS_total<br />\
    <img src="styles/legend/PUNTOS_total_2_0.png" /> BOMBEROS<br />\
    <img src="styles/legend/PUNTOS_total_2_1.png" /> CENTRO COMUNITARIO<br />\
    <img src="styles/legend/PUNTOS_total_2_2.png" /> ESCUELA<br />\
    <img src="styles/legend/PUNTOS_total_2_3.png" /> IGLESIA<br />\
    <img src="styles/legend/PUNTOS_total_2_4.png" /> MERCADO<br />\
    <img src="styles/legend/PUNTOS_total_2_5.png" /> PARQUE<br />' });
var format_INMUEBLES_3 = new ol.format.GeoJSON();
var features_INMUEBLES_3 = format_INMUEBLES_3.readFeatures(json_INMUEBLES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INMUEBLES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INMUEBLES_3.addFeatures(features_INMUEBLES_3);
var lyr_INMUEBLES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INMUEBLES_3, 
                style: style_INMUEBLES_3,
                popuplayertitle: 'INMUEBLES',
                interactive: true,
                title: '<img src="styles/legend/INMUEBLES_3.png" /> INMUEBLES'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_delegaciones_1.setVisible(true);lyr_PUNTOS_total_2.setVisible(true);lyr_INMUEBLES_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_delegaciones_1,lyr_PUNTOS_total_2,lyr_INMUEBLES_3];
lyr_delegaciones_1.set('fieldAliases', {'id': 'id', 'delegacion': 'delegacion', 'area': 'area', 'perimeter': 'perimeter', 'hectares': 'hectares', 'pob_total': 'pob_total', 'poblacion': 'poblacion', });
lyr_PUNTOS_total_2.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', 'INTERES': 'INTERES', });
lyr_INMUEBLES_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'METODO': 'METODO', 'OBSERVACIO': 'OBSERVACIO', 'CODIGO': 'CODIGO', 'USO_SUELO': 'USO_SUELO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'CORTE': 'CORTE', 'DIGITALIZA': 'DIGITALIZA', 'ESTATUS': 'ESTATUS', });
lyr_delegaciones_1.set('fieldImages', {'id': 'TextEdit', 'delegacion': '', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'hectares': 'TextEdit', 'pob_total': 'TextEdit', 'poblacion': 'TextEdit', });
lyr_PUNTOS_total_2.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', 'INTERES': 'TextEdit', });
lyr_INMUEBLES_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'METODO': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'CODIGO': 'TextEdit', 'USO_SUELO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'CORTE': 'TextEdit', 'DIGITALIZA': 'TextEdit', 'ESTATUS': 'TextEdit', });
lyr_delegaciones_1.set('fieldLabels', {'id': 'hidden field', 'delegacion': 'inline label - visible with data', 'area': 'hidden field', 'perimeter': 'hidden field', 'hectares': 'hidden field', 'pob_total': 'hidden field', 'poblacion': 'no label', });
lyr_PUNTOS_total_2.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', 'INTERES': 'no label', });
lyr_INMUEBLES_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAME': 'inline label - visible with data', 'METODO': 'hidden field', 'OBSERVACIO': 'hidden field', 'CODIGO': 'hidden field', 'USO_SUELO': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'CORTE': 'hidden field', 'DIGITALIZA': 'hidden field', 'ESTATUS': 'hidden field', });
lyr_INMUEBLES_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});