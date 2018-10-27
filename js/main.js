

(function() {
  "use strict";

  var map = L.map('mapa').setView([20.741486, -103.380489], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([20.741486, -103.380489]).addTo(map)
    .bindPopup('hechandole ganas a este semestre.<br> puro 100 ja.')
    .openPopup()
    .bindTooltip('salgo al hacer hover sobre pin')
    .openTooltip();


  var regalo = document.getElementById('regalo');
  document.addEventListener('DOMContentLoaded', function(){

    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

    var pase_dia = document.getElementById('pase_dia');
    var pase_dosdias = document.getElementById('pase_dosdias');
    var pase_completo = document.getElementById('pase_completo');

    //botones y divs
    var calcular = document.getElementById('calcular');
    var errordiv = document.getElementById('error');
    var botonregistro = document.getElementById('btnregistro');
    var lista_productos = document.getElementById('lista-productos');
    var suma = document.getElementById('suma-total');

    var etiquetas = document.getElementById('etiquetas');
    var camisas = document.getElementById('camisa_evento');

    calcular.addEventListener('click', calcularmontos);

    pase_dia.addEventListener('change', mostrardias);
    pase_dosdias.addEventListener('change', mostrardias);
    pase_completo.addEventListener('change', mostrardias);

    nombre.addEventListener('blur', validarcampos);
    apellido.addEventListener('blur', validarcampos);
    email.addEventListener('blur', validarcampos);
    email.addEventListener('blur', validarmail);

    function validarcampos() {
      if(this.value == '') {
        errordiv.style.display = 'block';
        errordiv.innerHTML = "este campo es obligatorio";
        this.style.border = '1px solid red';
        errordiv.style.border = '1px solid red'

      }else{
        errordiv.style.display = 'none';
        this.style.border = '1px solid #cccccc';
      }
    }

    function validarmail(){
      if(this.value.indexOf("@") > -1){
        errordiv.style.display = 'none';
        this.style.border = '1px solid #cccccc';
      }else{
          errordiv.style.display = 'block';
          errordiv.innerHTML = "ingresa un correo valido";
          this.style.border = '1px solid red';
          errordiv.style.border = '1px solid red'
      }

    }

    function calcularmontos(event) {
      event.preventDefault();
      if(regalo.value === ''){
        alert("debes elegir un regalo");
        regalo.focus();
      }else{
        var boletosdia = parseInt(pase_dia.value, 10) || 0,
            boletos2dias = parseInt(pase_dosdias.value,10) || 0,
            boletocompleto = parseInt(pase_completo.value,10) || 0,
            cantcamisas = parseInt(camisas.value,10) || 0,
            cantetiquetas = parseInt(etiquetas.value,10) || 0;

            var totalpagar = (boletosdia * 30) + (boletos2dias * 45) + (boletocompleto * 50) + ((cantcamisas * 10 ) * .93) + (cantetiquetas * 2 );

          var listadoproductos = [];

          if(boletosdia >= 1){
          listadoproductos.push(boletosdia + ' pases por dia'); }
          if(boletos2dias >= 1){
          listadoproductos.push(boletos2dias + ' pases por 2 dias'); }
          if(boletocompleto >= 1){
          listadoproductos.push(boletocompleto + ' pases completos'); }
          if(cantcamisas >= 1){
          listadoproductos.push(cantcamisas + ' camisas'); }
          if(cantetiquetas >= 1){
          listadoproductos.push(cantetiquetas + ' etiquetas'); }

          lista_productos.style.display ="block";
           lista_productos.innerHTML = '';
           for(var i = 0;i< listadoproductos.length; i++){
             lista_productos.innerHTML += listadoproductos[i] + '<br/>';
           }

          suma.innerHTML = "$ "  + totalpagar.toFixed(2);


      }
    }
    function mostrardias(){
      var boletosdia = parseInt(pase_dia.value, 10) || 0,
          boletos2dias = parseInt(pase_dosdias.value,10) || 0,
          boletocompleto = parseInt(pase_completo.value,10) || 0;

          var diaselegidos =  [];

          if (boletosdia > 0){
              diaselegidos.push('viernes');
          }
          if (boletos2dias > 0){
          diaselegidos.push('viernes','sabado');
          }
          if (boletocompleto > 0){
          diaselegidos.push('viernes', 'sabado', 'domingo');
          }
          for(var i = 0; i < diaselegidos.length; i++){
            document.getElementById(diaselegidos[i]).style.display = 'block';
          }
          if(diaselegidos.length < 1 ) {
            var todosDias = document.getElementsByClassName('contenido-dia');
            for(var i = 0; i < todosDias.length; i++) {
               todosDias[i].style.display = 'none';
            }
        }
    }


  }); //CONTENT LOADED
})();

$(function() {
        //programa de conferencias
      $('.programa-evento .info-curso:first').show();
      $('.menu-programa a:first').addClass('activo');

      $('.menu-programa a').on('click', function() {
      $('.menu-programa a').removeClass('activo');
      $(this).addClass('activo');
        $('.ocultar').hide();

        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);

        return false;
      });

      // estilo titulo
     $('.nombre-sitio').lettering();


      //animaciones para los numeros
      $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 1200);
      $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 1200);
      $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 1500);
      $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 1500);

      //cuenta regresiva
      $('.cuenta-regresiva').countdown('2018/12/10 09:00:00', function(event){
          $('#dias').html(event.strftime('%D'));
          $('#horas').html(event.strftime('%H'));
          $('#minutos').html(event.strftime('%M'));
          $('#segundos').html(event.strftime('%S'));

      });










    });
