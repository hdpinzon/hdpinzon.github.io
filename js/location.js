$(function(){
    window.alert("Entered");
    var msg = "Location not available";
    $h2 = $('h2');
    if (Modernizr.geolocation){
        window.alert("Yes gps");
        navigator.geolocation.getCurrentPosition(success,fail); 
    } else {
        window.alert("NO gps");
        $h2.text(msg);
    };
});
function success(position){
    $h2.text('Longitud: '+ position.coords.longitude+' ' + 'Latitud: '+ position.coords.latitude)
};
function fail(){
    $h2.text('Error')
};