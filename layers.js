var wms_layers = [];


        var lyr_DarkMatterretina_0 = new ol.layer.Tile({
            'title': 'Dark Matter (retina)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Manzanas_2 = new ol.format.GeoJSON();
var features_Manzanas_2 = format_Manzanas_2.readFeatures(json_Manzanas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_2.addFeatures(features_Manzanas_2);
var lyr_Manzanas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manzanas_2, 
                style: style_Manzanas_2,
                interactive: true,
                title: '<img src="styles/legend/Manzanas_2.png" /> Manzanas'
            });
var format_Hidrologa_3 = new ol.format.GeoJSON();
var features_Hidrologa_3 = format_Hidrologa_3.readFeatures(json_Hidrologa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hidrologa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrologa_3.addFeatures(features_Hidrologa_3);
var lyr_Hidrologa_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hidrologa_3, 
                style: style_Hidrologa_3,
                interactive: true,
    title: 'Hidrología<br />\
    <img src="styles/legend/Hidrologa_3_0.png" /> Escurrimiento<br />\
    <img src="styles/legend/Hidrologa_3_1.png" /> Hidroconector<br />\
    <img src="styles/legend/Hidrologa_3_2.png" /> Masa de agua<br />\
    <img src="styles/legend/Hidrologa_3_3.png" /> Río<br />'
        });
var format_Equipamientorecreativoenpredio_4 = new ol.format.GeoJSON();
var features_Equipamientorecreativoenpredio_4 = format_Equipamientorecreativoenpredio_4.readFeatures(json_Equipamientorecreativoenpredio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Equipamientorecreativoenpredio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equipamientorecreativoenpredio_4.addFeatures(features_Equipamientorecreativoenpredio_4);
var lyr_Equipamientorecreativoenpredio_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Equipamientorecreativoenpredio_4, 
                style: style_Equipamientorecreativoenpredio_4,
                interactive: true,
    title: 'Equipamiento recreativo en predio<br />\
    <img src="styles/legend/Equipamientorecreativoenpredio_4_0.png" /> Alberca<br />\
    <img src="styles/legend/Equipamientorecreativoenpredio_4_1.png" /> Cancha<br />'
        });
var format_Elementosconstructivos_5 = new ol.format.GeoJSON();
var features_Elementosconstructivos_5 = format_Elementosconstructivos_5.readFeatures(json_Elementosconstructivos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elementosconstructivos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elementosconstructivos_5.addFeatures(features_Elementosconstructivos_5);
var lyr_Elementosconstructivos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Elementosconstructivos_5, 
                style: style_Elementosconstructivos_5,
                interactive: true,
    title: 'Elementos constructivos<br />\
    <img src="styles/legend/Elementosconstructivos_5_0.png" /> Cerca<br />'
        });
var format_Cotasfotogramtricas_6 = new ol.format.GeoJSON();
var features_Cotasfotogramtricas_6 = format_Cotasfotogramtricas_6.readFeatures(json_Cotasfotogramtricas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cotasfotogramtricas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cotasfotogramtricas_6.addFeatures(features_Cotasfotogramtricas_6);
var lyr_Cotasfotogramtricas_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cotasfotogramtricas_6, 
                style: style_Cotasfotogramtricas_6,
                interactive: true,
                title: '<img src="styles/legend/Cotasfotogramtricas_6.png" />  Cotas fotogramétricas'
            });
var format_Predios_7 = new ol.format.GeoJSON();
var features_Predios_7 = format_Predios_7.readFeatures(json_Predios_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Predios_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predios_7.addFeatures(features_Predios_7);
var lyr_Predios_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Predios_7, 
                style: style_Predios_7,
                interactive: true,
                title: '<img src="styles/legend/Predios_7.png" /> Predios'
            });
var format_Construcciones_8 = new ol.format.GeoJSON();
var features_Construcciones_8 = format_Construcciones_8.readFeatures(json_Construcciones_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Construcciones_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Construcciones_8.addFeatures(features_Construcciones_8);
var lyr_Construcciones_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Construcciones_8, 
                style: style_Construcciones_8,
                interactive: true,
    title: 'Construcciones<br />\
    <img src="styles/legend/Construcciones_8_0.png" /> En construcción<br />\
    <img src="styles/legend/Construcciones_8_1.png" /> Concreto<br />\
    <img src="styles/legend/Construcciones_8_2.png" /> En ruinas<br />\
    <img src="styles/legend/Construcciones_8_3.png" /> Lámina<br />\
    <img src="styles/legend/Construcciones_8_4.png" /> Palma<br />\
    <img src="styles/legend/Construcciones_8_5.png" /> Tejabán<br />'
        });
var format_Vialidades_9 = new ol.format.GeoJSON();
var features_Vialidades_9 = format_Vialidades_9.readFeatures(json_Vialidades_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vialidades_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vialidades_9.addFeatures(features_Vialidades_9);
var lyr_Vialidades_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vialidades_9, 
                style: style_Vialidades_9,
                interactive: true,
    title: 'Vialidades<br />\
    <img src="styles/legend/Vialidades_9_0.png" /> Banqueta<br />\
    <img src="styles/legend/Vialidades_9_1.png" /> Carretera<br />\
    <img src="styles/legend/Vialidades_9_2.png" /> Empedrado<br />\
    <img src="styles/legend/Vialidades_9_3.png" /> Pavimento<br />\
    <img src="styles/legend/Vialidades_9_4.png" /> Puente<br />\
    <img src="styles/legend/Vialidades_9_5.png" /> Terraceria<br />'
        });
var format_Infraestructuraurbana_10 = new ol.format.GeoJSON();
var features_Infraestructuraurbana_10 = format_Infraestructuraurbana_10.readFeatures(json_Infraestructuraurbana_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infraestructuraurbana_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infraestructuraurbana_10.addFeatures(features_Infraestructuraurbana_10);
var lyr_Infraestructuraurbana_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Infraestructuraurbana_10, 
                style: style_Infraestructuraurbana_10,
                interactive: true,
    title: ' Infraestructura urbana<br />\
    <img src="styles/legend/Infraestructuraurbana_10_0.png" /> Luminaria<br />\
    <img src="styles/legend/Infraestructuraurbana_10_1.png" /> Poste<br />\
    <img src="styles/legend/Infraestructuraurbana_10_2.png" /> Poste eléctrico con luminaria<br />\
    <img src="styles/legend/Infraestructuraurbana_10_3.png" /> Torre de comunicación<br />'
        });

lyr_DarkMatterretina_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Manzanas_2.setVisible(true);lyr_Hidrologa_3.setVisible(true);lyr_Equipamientorecreativoenpredio_4.setVisible(true);lyr_Elementosconstructivos_5.setVisible(true);lyr_Cotasfotogramtricas_6.setVisible(true);lyr_Predios_7.setVisible(true);lyr_Construcciones_8.setVisible(true);lyr_Vialidades_9.setVisible(true);lyr_Infraestructuraurbana_10.setVisible(true);
var layersList = [lyr_DarkMatterretina_0,lyr_GoogleSatellite_1,lyr_Manzanas_2,lyr_Hidrologa_3,lyr_Equipamientorecreativoenpredio_4,lyr_Elementosconstructivos_5,lyr_Cotasfotogramtricas_6,lyr_Predios_7,lyr_Construcciones_8,lyr_Vialidades_9,lyr_Infraestructuraurbana_10];
lyr_Manzanas_2.set('fieldAliases', {'fid': 'fid', 'Manzana': 'Manzana', 'Superficie': 'Superficie', });
lyr_Hidrologa_3.set('fieldAliases', {'fid': 'fid', 'Tipo': 'Tipo', });
lyr_Equipamientorecreativoenpredio_4.set('fieldAliases', {'fid': 'fid', 'Tipo': 'Tipo', 'Superficie': 'Superficie', });
lyr_Elementosconstructivos_5.set('fieldAliases', {'fid': 'fid', 'Tipo': 'Tipo', });
lyr_Cotasfotogramtricas_6.set('fieldAliases', {'fid': 'fid', 'X1': 'X1', 'Y1': 'Y1', 'Z1': 'Z1', });
lyr_Predios_7.set('fieldAliases', {'fid': 'fid', 'Manzana': 'Manzana', 'Predio': 'Predio', 'Superficie': 'Superficie', 'A_const': 'A_const', 'A_enconst': 'A_enconst', 'A_enruinas': 'A_enruinas', 'Eq_alberca': 'Eq_alberca', 'Eq_cancha': 'Eq_cancha', });
lyr_Construcciones_8.set('fieldAliases', {'fid': 'fid', 'Tipo': 'Tipo', 'Material': 'Material', 'Piso': 'Piso', 'Superficie': 'Superficie', 'A_const': 'A_const', 'A_enconst': 'A_enconst', 'A_enruinas': 'A_enruinas', });
lyr_Vialidades_9.set('fieldAliases', {'fid': 'fid', 'Tipo': 'Tipo', });
lyr_Infraestructuraurbana_10.set('fieldAliases', {'fid': 'fid', 'Tipo': 'Tipo', });
lyr_Manzanas_2.set('fieldImages', {'fid': 'TextEdit', 'Manzana': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_Hidrologa_3.set('fieldImages', {'fid': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Equipamientorecreativoenpredio_4.set('fieldImages', {'fid': 'TextEdit', 'Tipo': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_Elementosconstructivos_5.set('fieldImages', {'fid': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Cotasfotogramtricas_6.set('fieldImages', {'fid': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'Z1': 'TextEdit', });
lyr_Predios_7.set('fieldImages', {'fid': 'TextEdit', 'Manzana': 'TextEdit', 'Predio': 'TextEdit', 'Superficie': 'TextEdit', 'A_const': 'TextEdit', 'A_enconst': 'TextEdit', 'A_enruinas': 'TextEdit', 'Eq_alberca': 'TextEdit', 'Eq_cancha': 'TextEdit', });
lyr_Construcciones_8.set('fieldImages', {'fid': 'TextEdit', 'Tipo': 'TextEdit', 'Material': 'TextEdit', 'Piso': 'TextEdit', 'Superficie': 'TextEdit', 'A_const': 'TextEdit', 'A_enconst': 'TextEdit', 'A_enruinas': 'TextEdit', });
lyr_Vialidades_9.set('fieldImages', {'fid': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Infraestructuraurbana_10.set('fieldImages', {'fid': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Manzanas_2.set('fieldLabels', {'fid': 'no label', 'Manzana': 'inline label', 'Superficie': 'inline label', });
lyr_Hidrologa_3.set('fieldLabels', {'fid': 'no label', 'Tipo': 'inline label', });
lyr_Equipamientorecreativoenpredio_4.set('fieldLabels', {'fid': 'no label', 'Tipo': 'inline label', 'Superficie': 'inline label', });
lyr_Elementosconstructivos_5.set('fieldLabels', {'fid': 'no label', 'Tipo': 'inline label', });
lyr_Cotasfotogramtricas_6.set('fieldLabels', {'fid': 'no label', 'X1': 'no label', 'Y1': 'no label', 'Z1': 'no label', });
lyr_Predios_7.set('fieldLabels', {'fid': 'no label', 'Manzana': 'inline label', 'Predio': 'inline label', 'Superficie': 'inline label', 'A_const': 'inline label', 'A_enconst': 'inline label', 'A_enruinas': 'inline label', 'Eq_alberca': 'inline label', 'Eq_cancha': 'inline label', });
lyr_Construcciones_8.set('fieldLabels', {'fid': 'no label', 'Tipo': 'inline label', 'Material': 'inline label', 'Piso': 'inline label', 'Superficie': 'inline label', 'A_const': 'inline label', 'A_enconst': 'inline label', 'A_enruinas': 'inline label', });
lyr_Vialidades_9.set('fieldLabels', {'fid': 'inline label', 'Tipo': 'inline label', });
lyr_Infraestructuraurbana_10.set('fieldLabels', {'fid': 'inline label', 'Tipo': 'inline label', });
lyr_Infraestructuraurbana_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});