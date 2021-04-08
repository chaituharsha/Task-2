var request = new XMLHttpRequest()
var url_string = 'https://restcountries.eu/rest/v2/all';

request.open('GET',url_string , true) 
request.send();

request.onload = function() {

var data = JSON.parse(this.response)
for(i=0;i<data.length;i++){
    console.log(data[i].name)
}
}