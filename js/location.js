$(function(){
    window.alert("sometext");
    var msg = "Location not available";
    $h2 = $('h2');
    if (modernizr.geolocation){
        window.alert("Yes gps");
        navigator.geolocation.getCurrentPosition(succes,fail);
        if (success){
            $h2.text('Longitud: '+ position.coords.longitud + 'Latitud: '+ position.coords.latitude)
        }else{
            $h2.text('Error')
        };
    } else {
        $h2.text(msg);
    };
});