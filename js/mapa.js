function initialize() {

  // Exibir mapa;
  var myLatlng = new google.maps.LatLng(-23.528000,-46.6920000);
  var mapOptions = {
    zoom: 17,
    center: myLatlng,
    panControl: false,
    scrollwheel: false,
    // mapTypeId: google.maps.MapTypeId.ROADMAP
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  }

 
  // Parâmetros do texto que será exibido no clique;
  var contentString = '<p>R. Tito, 54 - Vila Romana, São Paulo - SP</p>'+
  '<p><a href="http://www.sp.senac.br/jsp/default.jsp?newsID=0">www.sp.senac.br</a></p>';
  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 700
  });
 
 
  // Exibir o mapa na div #mapa;
  var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
 
 
  // Marcador personalizado;
  var image = 'http://time-n-attendance.com/wp-content/uploads/2014/11/GPS-location-1.png';
  var marcadorPersonalizado = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image,
      title: 'R. Tito, 54',
      animation: google.maps.Animation.DROP
  });
 
 
//   // Exibir texto ao clicar no ícone;
  google.maps.event.addListener(marcadorPersonalizado, 'click', function() {
    infowindow.open(map,marcadorPersonalizado);
  });
 
  // crio um objeto passando o array de estilos (styles) e definindo um nome para ele;
  var styledMap = new google.maps.StyledMapType(styles, {
    name: "Mapa Style"
  });
 
  // Aplicando as configurações do mapa
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
 
}
 
 
// Função para carregamento assíncrono
function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDeHb17So0QupSGO_d6b8X-OyvJ32UQehs&sensor=true&callback=initialize";
  document.body.appendChild(script);
}
 
window.onload = loadScript;