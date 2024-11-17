var wms_layers = [];


        var lyr_satellitemaps_0 = new ol.layer.Tile({
            'title': ' satellite  maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Prj_AREA_1 = new ol.format.GeoJSON();
var features_Prj_AREA_1 = format_Prj_AREA_1.readFeatures(json_Prj_AREA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prj_AREA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prj_AREA_1.addFeatures(features_Prj_AREA_1);
var lyr_Prj_AREA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prj_AREA_1, 
                style: style_Prj_AREA_1,
                popuplayertitle: "Prj_AREA",
                interactive: true,
                title: '<img src="styles/legend/Prj_AREA_1.png" /> Prj_AREA'
            });
var format_Cadastral_2 = new ol.format.GeoJSON();
var features_Cadastral_2 = format_Cadastral_2.readFeatures(json_Cadastral_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cadastral_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cadastral_2.addFeatures(features_Cadastral_2);
var lyr_Cadastral_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cadastral_2, 
                style: style_Cadastral_2,
                popuplayertitle: "Cadastral",
                interactive: true,
                title: '<img src="styles/legend/Cadastral_2.png" /> Cadastral'
            });
var format_polyline_FCAD_3 = new ol.format.GeoJSON();
var features_polyline_FCAD_3 = format_polyline_FCAD_3.readFeatures(json_polyline_FCAD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polyline_FCAD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polyline_FCAD_3.addFeatures(features_polyline_FCAD_3);
var lyr_polyline_FCAD_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polyline_FCAD_3, 
                style: style_polyline_FCAD_3,
                popuplayertitle: "polyline_FCAD",
                interactive: true,
                title: '<img src="styles/legend/polyline_FCAD_3.png" /> polyline_FCAD'
            });
var format_Parcel_No_4 = new ol.format.GeoJSON();
var features_Parcel_No_4 = format_Parcel_No_4.readFeatures(json_Parcel_No_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcel_No_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcel_No_4.addFeatures(features_Parcel_No_4);
var lyr_Parcel_No_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcel_No_4, 
                style: style_Parcel_No_4,
                popuplayertitle: "Parcel_No",
                interactive: true,
                title: '<img src="styles/legend/Parcel_No_4.png" /> Parcel_No'
            });

lyr_satellitemaps_0.setVisible(true);lyr_Prj_AREA_1.setVisible(true);lyr_Cadastral_2.setVisible(true);lyr_polyline_FCAD_3.setVisible(false);lyr_Parcel_No_4.setVisible(false);
var layersList = [lyr_satellitemaps_0,lyr_Prj_AREA_1,lyr_Cadastral_2,lyr_polyline_FCAD_3,lyr_Parcel_No_4];
lyr_Prj_AREA_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'PROJECTID_': 'PROJECTID_', 'PROJECT_NA': 'PROJECT_NA', 'AREA_NAME': 'AREA_NAME', 'BLOCK_NO': 'BLOCK_NO', 'PROJ_TYPE': 'PROJ_TYPE', 'SITE_NO': 'SITE_NO', 'TOWNHOUSES': 'TOWNHOUSES', 'TH_UNITS': 'TH_UNITS', 'APARTMENT_': 'APARTMENT_', 'APARTMENT1': 'APARTMENT1', 'PLOT_UNITS': 'PLOT_UNITS', 'PP_NO': 'PP_NO', 'WL_APP_STA': 'WL_APP_STA', 'PLANNED_ST': 'PLANNED_ST', 'PLANNED_EN': 'PLANNED_EN', 'REV_COMP_D': 'REV_COMP_D', 'PROJ_STATU': 'PROJ_STATU', 'INI_APP_DA': 'INI_APP_DA', 'INI_APP_CO': 'INI_APP_CO', 'PPS_ROADS': 'PPS_ROADS', 'PPS_SEPPD': 'PPS_SEPPD', 'PPS_EDD': 'PPS_EDD', 'PPS_PSD_E': 'PPS_PSD_E', 'PPS_WDD': 'PPS_WDD', 'PPS_PSD_W': 'PPS_PSD_W', 'PPS_TRA': 'PPS_TRA', 'PPS_SURVEY': 'PPS_SURVEY', 'PPS_MUNICI': 'PPS_MUNICI', 'PPS_PARK_M': 'PPS_PARK_M', 'PPS_GOVERN': 'PPS_GOVERN', 'PPS_TV_PLA': 'PPS_TV_PLA', 'PPS_DPS_ED': 'PPS_DPS_ED', 'PPS_CPU': 'PPS_CPU', 'PPS_AGR_EN': 'PPS_AGR_EN', 'PPS_ENV': 'PPS_ENV', 'PPS_COASTG': 'PPS_COASTG', 'PPS_BAPCO': 'PPS_BAPCO', 'PPS_FISHER': 'PPS_FISHER', 'COMMENTS': 'COMMENTS', 'SCH_EDD': 'SCH_EDD', 'SCH_WDD': 'SCH_WDD', 'SCH_TRA': 'SCH_TRA', 'SCH_EDD_ST': 'SCH_EDD_ST', 'SCH_SEPPD': 'SCH_SEPPD', 'SITE_PLAN_': 'SITE_PLAN_', 'SITE_PLAN1': 'SITE_PLAN1', 'GOV_NAME': 'GOV_NAME', 'SECTOR': 'SECTOR', 'CONTRACT_T': 'CONTRACT_T', 'CONTRACT_S': 'CONTRACT_S', 'WORK_COMPL': 'WORK_COMPL', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Cadastral_2.set('fieldAliases', {'FID_1': 'FID_1', 'OBJECTID': 'OBJECTID', 'FID_1_1': 'FID_1_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'FID_2': 'FID_2', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'BSI_str': 'BSI_str', 'Distance': 'Distance', });
lyr_polyline_FCAD_3.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Level': 'Level', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'Length': 'Length', 'LemMT': 'LemMT', });
lyr_Parcel_No_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'BSI_str': 'BSI_str', 'FID_1': 'FID_1', 'FID_12': 'FID_12', 'OBJECTID_2': 'OBJECTID_2', 'FID_1_1': 'FID_1_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'FID_2': 'FID_2', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID_4': 'OBJECTID_4', 'BSI_str_1': 'BSI_str_1', 'Distance': 'Distance', });
lyr_Prj_AREA_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'Range', 'PROJECTID_': 'TextEdit', 'PROJECT_NA': 'TextEdit', 'AREA_NAME': 'TextEdit', 'BLOCK_NO': 'TextEdit', 'PROJ_TYPE': 'TextEdit', 'SITE_NO': 'Range', 'TOWNHOUSES': 'TextEdit', 'TH_UNITS': 'Range', 'APARTMENT_': 'TextEdit', 'APARTMENT1': 'Range', 'PLOT_UNITS': 'Range', 'PP_NO': 'TextEdit', 'WL_APP_STA': 'TextEdit', 'PLANNED_ST': 'DateTime', 'PLANNED_EN': 'DateTime', 'REV_COMP_D': 'DateTime', 'PROJ_STATU': 'TextEdit', 'INI_APP_DA': 'DateTime', 'INI_APP_CO': 'TextEdit', 'PPS_ROADS': 'TextEdit', 'PPS_SEPPD': 'TextEdit', 'PPS_EDD': 'TextEdit', 'PPS_PSD_E': 'TextEdit', 'PPS_WDD': 'TextEdit', 'PPS_PSD_W': 'TextEdit', 'PPS_TRA': 'TextEdit', 'PPS_SURVEY': 'TextEdit', 'PPS_MUNICI': 'TextEdit', 'PPS_PARK_M': 'TextEdit', 'PPS_GOVERN': 'TextEdit', 'PPS_TV_PLA': 'TextEdit', 'PPS_DPS_ED': 'TextEdit', 'PPS_CPU': 'TextEdit', 'PPS_AGR_EN': 'TextEdit', 'PPS_ENV': 'TextEdit', 'PPS_COASTG': 'TextEdit', 'PPS_BAPCO': 'TextEdit', 'PPS_FISHER': 'TextEdit', 'COMMENTS': 'TextEdit', 'SCH_EDD': 'TextEdit', 'SCH_WDD': 'TextEdit', 'SCH_TRA': 'TextEdit', 'SCH_EDD_ST': 'TextEdit', 'SCH_SEPPD': 'TextEdit', 'SITE_PLAN_': 'TextEdit', 'SITE_PLAN1': 'TextEdit', 'GOV_NAME': 'TextEdit', 'SECTOR': 'TextEdit', 'CONTRACT_T': 'TextEdit', 'CONTRACT_S': 'TextEdit', 'WORK_COMPL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Cadastral_2.set('fieldImages', {'FID_1': 'Range', 'OBJECTID': 'TextEdit', 'FID_1_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'FID_2': 'Range', 'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'BSI_str': 'TextEdit', 'Distance': 'TextEdit', });
lyr_polyline_FCAD_3.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Level': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'Length': 'TextEdit', 'LemMT': 'TextEdit', });
lyr_Parcel_No_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'BSI_str': 'TextEdit', 'FID_1': 'Range', 'FID_12': 'Range', 'OBJECTID_2': 'TextEdit', 'FID_1_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'FID_2': 'Range', 'OBJECTID_3': 'TextEdit', 'OBJECTID_4': 'TextEdit', 'BSI_str_1': 'TextEdit', 'Distance': 'TextEdit', });
lyr_Prj_AREA_1.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'PROJECTID_': 'no label', 'PROJECT_NA': 'no label', 'AREA_NAME': 'inline label - always visible', 'BLOCK_NO': 'no label', 'PROJ_TYPE': 'no label', 'SITE_NO': 'no label', 'TOWNHOUSES': 'no label', 'TH_UNITS': 'no label', 'APARTMENT_': 'no label', 'APARTMENT1': 'no label', 'PLOT_UNITS': 'no label', 'PP_NO': 'no label', 'WL_APP_STA': 'no label', 'PLANNED_ST': 'no label', 'PLANNED_EN': 'no label', 'REV_COMP_D': 'no label', 'PROJ_STATU': 'no label', 'INI_APP_DA': 'no label', 'INI_APP_CO': 'no label', 'PPS_ROADS': 'no label', 'PPS_SEPPD': 'no label', 'PPS_EDD': 'no label', 'PPS_PSD_E': 'no label', 'PPS_WDD': 'no label', 'PPS_PSD_W': 'no label', 'PPS_TRA': 'no label', 'PPS_SURVEY': 'no label', 'PPS_MUNICI': 'no label', 'PPS_PARK_M': 'no label', 'PPS_GOVERN': 'no label', 'PPS_TV_PLA': 'no label', 'PPS_DPS_ED': 'no label', 'PPS_CPU': 'no label', 'PPS_AGR_EN': 'no label', 'PPS_ENV': 'no label', 'PPS_COASTG': 'no label', 'PPS_BAPCO': 'no label', 'PPS_FISHER': 'no label', 'COMMENTS': 'no label', 'SCH_EDD': 'no label', 'SCH_WDD': 'no label', 'SCH_TRA': 'no label', 'SCH_EDD_ST': 'no label', 'SCH_SEPPD': 'no label', 'SITE_PLAN_': 'no label', 'SITE_PLAN1': 'no label', 'GOV_NAME': 'no label', 'SECTOR': 'no label', 'CONTRACT_T': 'no label', 'CONTRACT_S': 'no label', 'WORK_COMPL': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Cadastral_2.set('fieldLabels', {'FID_1': 'no label', 'OBJECTID': 'no label', 'FID_1_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'FID_2': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'BSI_str': 'no label', 'Distance': 'no label', });
lyr_polyline_FCAD_3.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Level': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'Length': 'inline label - always visible', 'LemMT': 'no label', });
lyr_Parcel_No_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'BSI_str': 'no label', 'FID_1': 'no label', 'FID_12': 'no label', 'OBJECTID_2': 'no label', 'FID_1_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'FID_2': 'no label', 'OBJECTID_3': 'no label', 'OBJECTID_4': 'no label', 'BSI_str_1': 'no label', 'Distance': 'no label', });
lyr_Parcel_No_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});