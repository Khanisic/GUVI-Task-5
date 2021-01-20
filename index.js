var request = new XMLHttpRequest; //creating new Http request
request.open('GET', 'https://restcountries.eu/rest/v2/all',true); // using GET method to retreive data from given Link
request.send(); //sending the request
request.onload = function(){  
    var readData = JSON.parse(this.response); //parsing the values

    for(i in readData){ //creating a loop to iterate through the restCountries API
        var lat = readData[i].latlng[0]; // assigning values for lattitude
        var lon = readData[i].latlng[1]; // assigning values for longitude
        try{ // creating an error handling exception try block
            if(lat== null & lon == null){ //specifying value for exception
                throw new SyntaxError('Lattitude and Longitude are not defined') // creating custom message for error
            }
        }
        catch(error){ // creating a catch block
            console.log( 'Name :' + error.name ); //specifying the name of the exception
            console.log( 'Message :' + error.message ); //specifying the message of the exception
            console.log( 'Stack :' + error.stack ); 
        }
        var weather = new XMLHttpRequest; // creating new Http request for Weather API
        weather.open('GET','https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=65f297466d115415e31f5fbedaaeea76',true); // specifying the link and getting lattitide and longitude values from restCountries API
        weather.send(); // Sending the request
        weather.onload = function(){
                        var readweather = JSON.parse(this.response); // parsing the values of the said url link
                        for( i in readweather){ //iterating through the values
                            var temp = readweather[i].temp; //assigning value of temp to a variable
                                if(temp!= null){ 
                                console.log(temp);        // displaying the temp                      
                        }
        }
    }
    }
}