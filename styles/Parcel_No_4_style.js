var size = 0;
var placement = 'point';

var style_Parcel_No_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#fe314f";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Length") !== null) {
        // Get the length value
        let Shape_AreaValue = feature.get("Shape_Area");
    
        // Convert to a number
        Shape_AreaValue = Number(Shape_AreaValue);
    
        // Check if the value is a valid number
        if (!isNaN(Shape_AreaValue)) {
            // Format to two decimal places
            labelText = Shape_AreaValue.toFixed(3)+"Sqm";
        } else {
            // Handle the case where Shape_AreaValue is not a number
            labelText = "Invalid Shape_Area"; // or some other fallback value
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
