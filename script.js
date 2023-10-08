const submit = document.getElementById('submit');

function getOutput(){
    // alert("button clicked");
    const place = document.getElementById('place').value;

    // const name = place.value;
    const cityNameElement = document.getElementById('cityName');
    cityNameElement.textContent = "Weather in " + place;

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/weather?city=' + place,
        headers: { 'X-Api-Key': `${process.env.WEATHER_API_KEY}`},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            // $('#result').html('Success: ' + JSON.stringify(result));
            $('#temp').text(result.temp + "°C")
            $('#minTemp').text("Minimum Temperature: " + result.min_temp + "°C")
            $('#maxTemp').text("Maximum Temperature: " + result.max_temp + "°C")

            $('#humidity').text(result.humidity + "%")
            $('#cloud').text("Cloud pct: " + result.cloud_pct)
            $('#feels').text("Feels Like: " + result.feels_like)

            $('#windspeed1').text(result.wind_speed)
            $('#windDegree').text("Wind Degree: " + result.wind_speed)
            $('#windSpeed').text("Wind Speed: " + result.wind_speed)

        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
            $('#result').html('Error: ' + jqXHR.responseText);
            
        }
    });
}

