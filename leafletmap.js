function myFunction(){
    var map = L.map('map').setView([36.079848, -115.051764], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var home = L.marker([36.078679, -115.051188]).addTo(map)
    .openPopup();

var church = L.marker([36.073668, -115.056672]).addTo(map)
    .openPopup();
var school = L.marker([36.058513, -115.054240]).addTo(map)
    .openPopup();
var caferio = L.marker([36.056762, -115.046800
]).addTo(map)
    .openPopup();
var gg = L.marker([36.055444, -115.041600
]).addTo(map)
    .openPopup();

var circle = L.circle([36.078679, -115.051188], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 400
}).addTo(map);

var polygon = L.polygon([
    [36.078765, -115.051227],
    [36.078763, -115.051130],
    [36.078661, -115.051141],
    [36.078665, -115.051224]
]).addTo(map);

home.bindPopup("<b>My home!</b><br>My family moved here when I was 16. They just moved out a week ago. (yes I actually live in Henderson, but I just say I'm from Vegas) ").openPopup();
church.bindPopup("<b>The Church of Jesus Christ of Latter-day Saints</b><br>My home ward's chapel.")
school.bindPopup("<b>Green Valley High School</b><br>I went to school here for four years")
caferio.bindPopup("<b>Cafe Rio</b><br>This became the cool place to eat because it was the first one opened near my highschool")
circle.bindPopup("<b>If you had 10 minutes</br> <br>you could walk anywhere in this red circle from my house");
polygon.bindPopup("<b>Our apartment's Property line</b><br>Our apartment was pretty small.");
gg.bindPopup("<b>The Great Greek</b><br>Hika and I ate here recently. 8/10 Wouldn't go again.")
}
