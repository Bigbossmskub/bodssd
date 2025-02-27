var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_restaurant_Chaingmai_1 = new ol.format.GeoJSON();
var features_restaurant_Chaingmai_1 = format_restaurant_Chaingmai_1.readFeatures(json_restaurant_Chaingmai_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurant_Chaingmai_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurant_Chaingmai_1.addFeatures(features_restaurant_Chaingmai_1);
var lyr_restaurant_Chaingmai_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restaurant_Chaingmai_1, 
                style: style_restaurant_Chaingmai_1,
                popuplayertitle: "restaurant_Chaingmai",
                interactive: true,
                title: '<img src="styles/legend/restaurant_Chaingmai_1.png" /> restaurant_Chaingmai'
            });
var format_restaurant_Chaingrai_2 = new ol.format.GeoJSON();
var features_restaurant_Chaingrai_2 = format_restaurant_Chaingrai_2.readFeatures(json_restaurant_Chaingrai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurant_Chaingrai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurant_Chaingrai_2.addFeatures(features_restaurant_Chaingrai_2);
var lyr_restaurant_Chaingrai_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restaurant_Chaingrai_2, 
                style: style_restaurant_Chaingrai_2,
                popuplayertitle: "restaurant_Chaingrai",
                interactive: true,
                title: '<img src="styles/legend/restaurant_Chaingrai_2.png" /> restaurant_Chaingrai'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "ถนนเส้นหลักภาคเหนือ",
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> ถนนเส้นหลักภาคเหนือ'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: "ภาคเหนือตอนบน",
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> ภาคเหนือตอนบน'
            });
var format_restaurant_Lampang_5 = new ol.format.GeoJSON();
var features_restaurant_Lampang_5 = format_restaurant_Lampang_5.readFeatures(json_restaurant_Lampang_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurant_Lampang_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurant_Lampang_5.addFeatures(features_restaurant_Lampang_5);
var lyr_restaurant_Lampang_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restaurant_Lampang_5, 
                style: style_restaurant_Lampang_5,
                popuplayertitle: "restaurant_Lampang",
                interactive: true,
                title: '<img src="styles/legend/restaurant_Lampang_5.png" /> restaurant_Lampang'
            });
var format_restaurant_Lamphun_6 = new ol.format.GeoJSON();
var features_restaurant_Lamphun_6 = format_restaurant_Lamphun_6.readFeatures(json_restaurant_Lamphun_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurant_Lamphun_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurant_Lamphun_6.addFeatures(features_restaurant_Lamphun_6);
var lyr_restaurant_Lamphun_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restaurant_Lamphun_6, 
                style: style_restaurant_Lamphun_6,
                popuplayertitle: "restaurant_Lamphun",
                interactive: true,
                title: '<img src="styles/legend/restaurant_Lamphun_6.png" /> restaurant_Lamphun'
            });
var format_restaurant_Maehongson_7 = new ol.format.GeoJSON();
var features_restaurant_Maehongson_7 = format_restaurant_Maehongson_7.readFeatures(json_restaurant_Maehongson_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurant_Maehongson_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurant_Maehongson_7.addFeatures(features_restaurant_Maehongson_7);
var lyr_restaurant_Maehongson_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restaurant_Maehongson_7, 
                style: style_restaurant_Maehongson_7,
                popuplayertitle: "restaurant_Maehongson",
                interactive: true,
                title: '<img src="styles/legend/restaurant_Maehongson_7.png" /> restaurant_Maehongson'
            });
var format_restaurant_Nan_8 = new ol.format.GeoJSON();
var features_restaurant_Nan_8 = format_restaurant_Nan_8.readFeatures(json_restaurant_Nan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurant_Nan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurant_Nan_8.addFeatures(features_restaurant_Nan_8);
var lyr_restaurant_Nan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restaurant_Nan_8, 
                style: style_restaurant_Nan_8,
                popuplayertitle: "restaurant_Nan",
                interactive: true,
                title: '<img src="styles/legend/restaurant_Nan_8.png" /> restaurant_Nan'
            });
var format_restaurant_Phare_9 = new ol.format.GeoJSON();
var features_restaurant_Phare_9 = format_restaurant_Phare_9.readFeatures(json_restaurant_Phare_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurant_Phare_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurant_Phare_9.addFeatures(features_restaurant_Phare_9);
var lyr_restaurant_Phare_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restaurant_Phare_9, 
                style: style_restaurant_Phare_9,
                popuplayertitle: "restaurant_Phare",
                interactive: true,
                title: '<img src="styles/legend/restaurant_Phare_9.png" /> restaurant_Phare'
            });
var format_restaurant_Phayao_10 = new ol.format.GeoJSON();
var features_restaurant_Phayao_10 = format_restaurant_Phayao_10.readFeatures(json_restaurant_Phayao_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurant_Phayao_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurant_Phayao_10.addFeatures(features_restaurant_Phayao_10);
var lyr_restaurant_Phayao_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restaurant_Phayao_10, 
                style: style_restaurant_Phayao_10,
                popuplayertitle: "restaurant_Phayao",
                interactive: true,
                title: '<img src="styles/legend/restaurant_Phayao_10.png" /> restaurant_Phayao'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_restaurant_Chaingmai_1.setVisible(true);lyr_restaurant_Chaingrai_2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr_restaurant_Lampang_5.setVisible(true);lyr_restaurant_Lamphun_6.setVisible(true);lyr_restaurant_Maehongson_7.setVisible(true);lyr_restaurant_Nan_8.setVisible(true);lyr_restaurant_Phare_9.setVisible(true);lyr_restaurant_Phayao_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_restaurant_Chaingmai_1,lyr_restaurant_Chaingrai_2,lyr__3,lyr__4,lyr_restaurant_Lampang_5,lyr_restaurant_Lamphun_6,lyr_restaurant_Maehongson_7,lyr_restaurant_Nan_8,lyr_restaurant_Phare_9,lyr_restaurant_Phayao_10];
lyr_restaurant_Chaingmai_1.set('fieldAliases', {'Id': 'Id', 'Name_res': 'Name_res', 'Height': 'Height', });
lyr_restaurant_Chaingrai_2.set('fieldAliases', {'Id': 'Id', 'Name_res': 'Name_res', 'Height': 'Height', });
lyr__3.set('fieldAliases', {'RDLNNUM': 'RDLNNUM', 'NICKNAME': 'NICKNAME', 'RDLNNAMT': 'RDLNNAMT', 'RDLNNAME': 'RDLNNAME', 'BRDNAMT': 'BRDNAMT', 'BRDNAME': 'BRDNAME', 'VERSION': 'VERSION', 'SYMBOL': 'SYMBOL', 'RDLNCLASS': 'RDLNCLASS', 'DIRECTION': 'DIRECTION', 'SOURCETHM': 'SOURCETHM', 'LENGTH': 'LENGTH', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr__4.set('fieldAliases', {'PROV_CODE': 'PROV_CODE', 'PROV_NAM_T': 'PROV_NAM_T', 'PROV_NAM_E': 'PROV_NAM_E', 'P_CODE': 'P_CODE', 'Sht_NameE': 'Sht_NameE', });
lyr_restaurant_Lampang_5.set('fieldAliases', {'Id': 'Id', 'Name_res': 'Name_res', 'Height': 'Height', });
lyr_restaurant_Lamphun_6.set('fieldAliases', {'Id': 'Id', 'Name_res': 'Name_res', 'Height': 'Height', });
lyr_restaurant_Maehongson_7.set('fieldAliases', {'Id': 'Id', 'Name_res': 'Name_res', 'Height': 'Height', });
lyr_restaurant_Nan_8.set('fieldAliases', {'Id': 'Id', 'Name_res': 'Name_res', 'Height': 'Height', });
lyr_restaurant_Phare_9.set('fieldAliases', {'Id': 'Id', 'Name_res': 'Name_res', 'Height': 'Height', });
lyr_restaurant_Phayao_10.set('fieldAliases', {'Id': 'Id', 'Name_res': 'Name_res', 'Height': 'Height', });
lyr_restaurant_Chaingmai_1.set('fieldImages', {'Id': '', 'Name_res': '', 'Height': '', });
lyr_restaurant_Chaingrai_2.set('fieldImages', {'Id': '', 'Name_res': '', 'Height': '', });
lyr__3.set('fieldImages', {'RDLNNUM': '', 'NICKNAME': '', 'RDLNNAMT': '', 'RDLNNAME': '', 'BRDNAMT': '', 'BRDNAME': '', 'VERSION': '', 'SYMBOL': '', 'RDLNCLASS': '', 'DIRECTION': '', 'SOURCETHM': '', 'LENGTH': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr__4.set('fieldImages', {'PROV_CODE': 'TextEdit', 'PROV_NAM_T': 'TextEdit', 'PROV_NAM_E': 'TextEdit', 'P_CODE': 'TextEdit', 'Sht_NameE': 'TextEdit', });
lyr_restaurant_Lampang_5.set('fieldImages', {'Id': '', 'Name_res': '', 'Height': '', });
lyr_restaurant_Lamphun_6.set('fieldImages', {'Id': '', 'Name_res': '', 'Height': '', });
lyr_restaurant_Maehongson_7.set('fieldImages', {'Id': '', 'Name_res': '', 'Height': '', });
lyr_restaurant_Nan_8.set('fieldImages', {'Id': '', 'Name_res': '', 'Height': '', });
lyr_restaurant_Phare_9.set('fieldImages', {'Id': '', 'Name_res': '', 'Height': '', });
lyr_restaurant_Phayao_10.set('fieldImages', {'Id': '', 'Name_res': '', 'Height': '', });
lyr_restaurant_Chaingmai_1.set('fieldLabels', {'Id': 'no label', 'Name_res': 'no label', 'Height': 'no label', });
lyr_restaurant_Chaingrai_2.set('fieldLabels', {'Id': 'no label', 'Name_res': 'no label', 'Height': 'no label', });
lyr__3.set('fieldLabels', {'RDLNNUM': 'no label', 'NICKNAME': 'no label', 'RDLNNAMT': 'no label', 'RDLNNAME': 'no label', 'BRDNAMT': 'no label', 'BRDNAME': 'no label', 'VERSION': 'no label', 'SYMBOL': 'no label', 'RDLNCLASS': 'no label', 'DIRECTION': 'no label', 'SOURCETHM': 'no label', 'LENGTH': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr__4.set('fieldLabels', {'PROV_CODE': 'no label', 'PROV_NAM_T': 'no label', 'PROV_NAM_E': 'no label', 'P_CODE': 'no label', 'Sht_NameE': 'no label', });
lyr_restaurant_Lampang_5.set('fieldLabels', {'Id': 'no label', 'Name_res': 'no label', 'Height': 'no label', });
lyr_restaurant_Lamphun_6.set('fieldLabels', {'Id': 'no label', 'Name_res': 'no label', 'Height': 'no label', });
lyr_restaurant_Maehongson_7.set('fieldLabels', {'Id': 'no label', 'Name_res': 'no label', 'Height': 'no label', });
lyr_restaurant_Nan_8.set('fieldLabels', {'Id': 'no label', 'Name_res': 'no label', 'Height': 'no label', });
lyr_restaurant_Phare_9.set('fieldLabels', {'Id': 'no label', 'Name_res': 'no label', 'Height': 'no label', });
lyr_restaurant_Phayao_10.set('fieldLabels', {'Id': 'no label', 'Name_res': 'no label', 'Height': 'no label', });
lyr_restaurant_Phayao_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});