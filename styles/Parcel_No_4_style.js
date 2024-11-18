var style_Parcel_No_4 = function(feature, resolution){
    var labelText = "";
    var labelFont = "13.0px 'Open Sans', sans-serif";
    var labelFill = "#fe314f";
    var bufferColor = "";
    var bufferWidth = 0;
    
    // Get the BSI_str property and Shape_Area value
    var bsiStr = feature.get("BSI_str");
    var shapeArea = feature.get("Shape_Area");

    // Check for both properties and format label text
    if (bsiStr !== null && shapeArea !== null) {
        // Ensure shapeArea is a number and format correctly
        shapeArea = parseFloat(shapeArea);
        if (!isNaN(shapeArea)) {
            labelText = `${bsiStr}\nArea: ${shapeArea.toFixed(2)}`;
        } else {
            labelText = `${bsiStr}\nArea: Invalid Shape Area`;
        }
    }

    var style = new ol.style.Style({
        image: new ol.style.Circle({
            radius: 4.0,
            stroke: new ol.style.Stroke({
                color: 'rgba(35,35,35,1.0)',
                width: 0.0
            }),
            fill: new ol.style.Fill({
                color: 'rgba(190,207,80,1.0)'
            })
        }),
        
        text: new ol.style.Text({
            font: labelFont,
            text: labelText,
            fill: new ol.style.Fill({
                color: labelFill
            }),
            offsetX: 8,
            offsetY: 3,
            placement: 'point',
        })
    });

    return [style]; // Return an array of styles
};
