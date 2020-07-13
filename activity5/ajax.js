console.log("executing js");
var btn = document.getElementById("submitGet");
console.log(btn);
btn.addEventListener("click", function(){
    console.log("created listener");
    var req = new XMLHttpRequest();
    var state = getElementById('state');
    var city = getElementById('city');
    var apiKey = "f3238c0e6bbb34dcaece588797448ede"
//    payload.longUrl = document.getElementById('zipcode').value;
    //    api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={your api key}
    var request = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + state + 'appid=' + apiKey;
    req.open('GET', request, false);
    req.addEventListener('load', function(){
        console.log("Adding Event listener");
        if(req.status >= 200 && req.status < 400){
            var response = JSON.parse(req.responseText);
            consoel.log("Request Received");
            console.log(response);

        }else{
            console.log("Error in request: " + req.statusText);
            consoel.log("Request Received");
        }
    });
    console.log("sending request");
    req.send(null);
})


