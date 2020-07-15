document.addEventListener('DOMContentLoaded', bindButtons)

function bindButtons(){
    //Create event listener for Country and State Form
    var apiKey = "f3238c0e6bbb34dcaece588797448ede"
    document.getElementById('submitGet').addEventListener("click", function(event){
        console.log("created listener");
        var req = new XMLHttpRequest();
        var city = document.getElementById('city').value;
        var country = document.getElementById('country').value;
        var request = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=' + apiKey;
        console.log('city: ' + city);
        console.log('country: ' + country);
        console.log(request);
        //Rest Form
        document.getElementById('form1').reset();
        req.open('GET', request, false);
        req.addEventListener('load', function(){
            console.log("Adding Event listener");
            if(req.status >= 200 && req.status < 400){
                var response = JSON.parse(req.responseText);
                document.getElementById('json').innerHTML = JSON.stringify(response, undefined, 2);
                console.log("Request Received");
                console.log(response);

            }else{
                console.log("Error in request: " + req.statusText);
                consoel.log("Request Received");
            }
        });
        event.preventDefault();
        console.log("sending request");
        req.send(null);
    })

    document.getElementById('submitGet2').addEventListener('click', function(event){
        var req = new XMLHttpRequest();
        var zip = document.getElementById('zipcode').value;
        var request = 'https://api.openweathermap.org/data/2.5/weather?q=' + zip + '&appid=' + apiKey;
        console.log(request);
        document.getElementById('form2').reset();
        req.open('GET', request, false);
        req.addEventListener('load', function(){
            console.log("Adding Asynchronous Event Listener");
            if(req.status >= 200 && req.status < 400){
                var response = JSON.parse(req.responseText);
                document.getElementById('json').innerHTML = JSON.stringify(response, undefined, 2);
                console.log("Request Received");
                console.log(response);

            }else{
                console.log("Error in request: " + req.statusText);
                consoel.log("Request Received");
            }
        });
        event.preventDefault();
        console.log("sending request");
        req.send(null);
    })

    document.getElementById('submitPost').addEventListener('click', function(){
        var req = new XMLHttpRequest();
        var payload = {queryString:null};

        //Get the string that user puts into the text box.
        payload.queryString = document.getElementById('query').value;

        //True: Asynchronous
        req.open('POST', 'http://httpbin.org/post', true);
        req.setRequestHeader('Content-Type', 'application/json');
        document.getElementById('form3').reset();
        req.addEventListener('load', function(){
            if(req.status >= 200 && req.status < 400){
                var response = JSON.parse(req.responseText);
                console.log(response);
                document.getElementById('json').innerHTML = JSON.stringify(response, undefined, 2);
            }else{
                console.log("Error in request: " + req.statusText);
            }
        });
        req.send(JSON.stringify(payload));
        event.preventDefault();
    })

}
