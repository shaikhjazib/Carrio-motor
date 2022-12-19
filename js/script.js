function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    } else {

    }
}

function showPosition(position) {
    document.getElementById('latitude').innerText = position.coords.latitude
    document.getElementById('longitude').innerText = position.coords.longitude
}
getLocation()



function display_ct5() {
    var x = new Date()
    var ampm = x.getHours() >= 12 ? ' PM' : 'AM';
    var x1 = x.getMonth() + 1 + "/" + x.getDate() + "/" + x.getFullYear();
    x1 = x1 + " - " + x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds() + ":" + ampm;
    document.getElementById('ct5').innerHTML = x1;
    display_c5();
}

function display_c5() {
    var refresh = 1000;
    mytime = setTimeout('display_ct5', refresh)
}
display_c5()

var datetime = new Date();

$("#c5").text("Date And Time :" + datetime)
