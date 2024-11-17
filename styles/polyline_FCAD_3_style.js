var size = 0;
var placement = 'point';

var style_polyline_FCAD_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#fb101a";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    var placement = 'center';
    if (feature.get("Length") !== null) {
        // Get the length value
        let lengthValue = feature.get("Length");
    
        // Convert to a number
        lengthValue = Number(lengthValue);
    
        // Check if the value is a valid number
        if (!isNaN(lengthValue)) {
            // Format to two decimal places
            labelText = lengthValue.toFixed(3)+"Mts";
        } else {
            // Handle the case where lengthValue is not a number
            labelText = "Invalid Length"; // or some other fallback value
        }
    }
        var style = [ new ol.style.Style({
            stroke: new ol.style.Stroke({color: 'rgba(255,3,3,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                                  labelFill, placement, bufferColor,
                                  bufferWidth)
        })];
    
        return style;
    };
    // Assuming the createTextStyle function definition should accommodate offset and alignment
    function createTextStyle(feature, resolution, labelText, labelFont, labelFill, placement, bufferColor, bufferWidth, textAlign, offsetX, offsetY) {
        return new ol.style.Text({
            text: labelText,
            font: labelFont,
            fill: new ol.style.Fill({
                color: labelFill
            }),
            stroke: bufferColor ? new ol.style.Stroke({
                color: bufferColor,
                width: bufferWidth
            }) : undefined,
            textAlign: textAlign,
            offsetX: offsetX,
            offsetY: offsetY,
            placement: placement
        });
    }
