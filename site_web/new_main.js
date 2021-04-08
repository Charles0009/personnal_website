
var mymap = L.map('mymap').setView([48.84583, 2.304313], 2);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY2FybGl0bzAwMDkiLCJhIjoiY2ttdzU1ODZqMGJvdjJwbjF3d3o1YWZzcSJ9.SZrowcbYw5w-0k2ZkfYHrw'
}).addTo(mymap);

//// mise en place d'un popup si le user click sur la carte avec les coords du click 
var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

var redIcon = new L.Icon({
	iconUrl: 'favicon/img/marker-icon-red.png',
	shadowUrl: 'favicon/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var blueIcon = new L.Icon({
	iconUrl: 'favicon/img/marker-icon-blue.png',
	shadowUrl: 'favicon/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});


var greenIcon = new L.Icon({
	iconUrl: 'favicon/img/marker-icon-green.png',
	shadowUrl: 'favicon/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});




var marker_mtl = new L.Marker([45.505243, -73.577649], {
    title: "McGill",
    icon : redIcon,
    draggable : false
});

var marker_ny = new L.Marker([40.957228, -73.740237], {
    title: "FASNY",
    icon : redIcon,
    draggable : false
});

var marker_mlv = new L.Marker([48.841108, 2.587698], {
    title: "ENSG",
    icon : redIcon,
    draggable : false
});

var marker_Pb = new L.Marker([48.858261, 2.180196], {
    title: "Passy-Buzenval",
    icon : redIcon,
    draggable : false
});


var marker_madrid = new L.Marker([40.429413, -3.690229], {
    title: "Madrid",
    icon : blueIcon,
    draggable : false
});

var marker_barcelona = new L.Marker([41.387068, 2.182901], {
    title: "Barcelona",
    icon : blueIcon,
    draggable : false
});

var marker_gibra = new L.Marker([36.13461, -5.345192], {
    title: "Gilbraltar",
    icon : blueIcon,
    draggable : false
});

var marker_lisbon = new L.Marker([38.709424, -9.139207], {
    title: "Lisbon",
    icon : blueIcon,
    draggable : false
});

var marker_marrakesh = new L.Marker([31.628933, -7.983781], {
    title: "Marrakesh",
    icon : blueIcon,
    draggable : false
});

var marker_gua = new L.Marker([29.454935, 34.932147], {
    title: "Gulf of Aden",
    icon : blueIcon,
    draggable : false
});

var marker_athens = new L.Marker([37.949504, 23.724452], {
    title: "Athens",
    icon : blueIcon,
    draggable : false
});

var marker_rome = new L.Marker([41.893307, 12.49679], {
    title: "Rome",
    icon : blueIcon,
    draggable : false
});

var marker_sardegna = new L.Marker([39.417629, 9.159261], {
    title: "Sardegna",
    icon : blueIcon,
    draggable : false
});

var marker_venice = new L.Marker([45.430503, 12.336898], {
    title: "Venice",
    icon : blueIcon,
    draggable : false
});

var marker_zadar = new L.Marker([44.096708, 15.232103], {
    title: "Zadar",
    icon : blueIcon,
    draggable : false
});
var marker_sibiu = new L.Marker([45.782178, 24.162018], {
    title: "Sibiu",
    icon : blueIcon,
    draggable : false
});
var marker_tripoint = new L.Marker([46.853523, 10.465152], {
    title: "tripoint",
    icon : blueIcon,
    draggable : false
});
var marker_maas = new L.Marker([50.835129, 5.701056], {
    title: "Maastricht",
    icon : blueIcon,
    draggable : false
});

var marker_dam = new L.Marker([52.375641, 4.897547], {
    title: "Amserdam",
    icon : blueIcon,
    draggable : false
});

var marker_gdanks = new L.Marker([54.334624, 18.687773], {
    title: "Gdansk",
    icon : blueIcon,
    draggable : false
});

var marker_London = new L.Marker([51.493099, -0.079675], {
    title: "London",
    icon : blueIcon,
    draggable : false
});

var marker_Liverpool = new L.Marker([53.396515, -2.989296], {
    title: "Liverpool",
    icon : blueIcon,
    draggable : false
});
var marker_edim = new L.Marker([55.924663, -3.178211], {
    title: "Edimburgh",
    icon : blueIcon,
    draggable : false
});
var marker_gla = new L.Marker([55.855661, -4.241411], {
    title: "Glasgow",
    icon : blueIcon,
    draggable : false
});

var marker_marti = new L.Marker([14.601674, -61.062533], {
    title: "Martinique",
    icon : blueIcon,
    draggable : false
});
var marker_kr = new L.Marker([51.909755, -10.021767], {
    title: "Key ring",
    icon : blueIcon,
    draggable : false
});
var marker_csl = new L.Marker([22.876555, -109.956457], {
    title: "Cabo San Lucas",
    icon : blueIcon,
    draggable : false
});
var marker_miami = new L.Marker([25.810895, -80.205289], {
    title: "Miami",
    icon : blueIcon,
    draggable : false
});
var marker_la = new L.Marker([33.932877, -118.312813], {
    title: "LA",
    icon : blueIcon,
    draggable : false
});
var marker_sf = new L.Marker([37.736404, -122.372306], {
    title: "SF",
    icon : blueIcon,
    draggable : false
});
var marker_lv = new L.Marker([36.18422, -115.113752], {
    title: "Las Vegas",
    icon : blueIcon,
    draggable : false
});
var marker_slcity = new L.Marker([40.842282, -111.939753], {
    title: "Salt Lake city",
    icon : blueIcon,
    draggable : false
});
var marker_yellow = new L.Marker([44.12269, -110.496817], {
    title: "Yellowstone NP",
    icon : blueIcon,
    draggable : false
});
var marker_toronto = new L.Marker([43.648895, -79.402594], {
    title: "Toronto",
    icon : blueIcon,
    draggable : false
});
var marker_ottawa = new L.Marker([45.44491, -75.688654], {
    title: "Ottawa",
    icon : blueIcon,
    draggable : false
});


marker_Liverpool.addTo(mymap);
marker_London.addTo(mymap);
marker_Pb.addTo(mymap);
marker_athens.addTo(mymap);
marker_barcelona.addTo(mymap);
marker_csl.addTo(mymap);
marker_dam.addTo(mymap);
marker_edim.addTo(mymap);
marker_gdanks.addTo(mymap);
marker_gibra.addTo(mymap);
marker_gla.addTo(mymap);
marker_gua.addTo(mymap);
marker_kr.addTo(mymap);
marker_la.addTo(mymap);
marker_lisbon.addTo(mymap);
marker_lv.addTo(mymap);
marker_maas.addTo(mymap);
marker_madrid.addTo(mymap);
marker_marrakesh.addTo(mymap);
marker_marti.addTo(mymap);
marker_miami.addTo(mymap);
marker_mlv.addTo(mymap);
marker_mtl.addTo(mymap);
marker_ny.addTo(mymap);
marker_ottawa.addTo(mymap);
marker_rome.addTo(mymap);
marker_sardegna.addTo(mymap);
marker_sf.addTo(mymap);
marker_sibiu.addTo(mymap);
marker_slcity.addTo(mymap);
marker_toronto.addTo(mymap);
marker_tripoint.addTo(mymap);
marker_venice.addTo(mymap);
marker_yellow.addTo(mymap);
marker_zadar.addTo(mymap);


mymap.on('click', onMapClick);